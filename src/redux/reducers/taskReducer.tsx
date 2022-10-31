import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  archiveTask,
  createTask,
  deArchiveTask,
  deleteTask,
  getTask,
} from "../actions/taskAction";
import { RootState } from "../store";
import { createSelector } from "reselect";
import { ITaskReq } from "../../interfaces/custemerTask";
import { IError } from "../../interfaces/type";

export interface TaskState {
  tasks: ITaskReq[];
  progress: string;
  success: boolean;
  searchName: string;
  error: IError;
}

const initialState: TaskState = {
  tasks: [],
  progress: "",
  success: false,
  searchName: "",
  error: {
    code: 0,
    details: "",
    validationErrors: {},
    message: "",
  },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setSearchName: (state, action) => {
      state.searchName = action.payload.searchName;
    },
    resetProgress(state) {
      state.progress = "";
    },
    resetSuccess(state) {
      state.success = false;
    },
    resetMessage(state) {
      state.error.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.progress = "done";
      state.tasks = action.payload.result;
    });
    builder
      .addCase(createTask.pending, (state, action) => {
        state.progress = "pending";
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.progress = "done";
        const findTask = state.tasks.find(
          (task) => task.id === action.payload.result.id
        );
        if (findTask) {
          state.tasks = state.tasks.map((task) => {
            if (task.id === action.payload.result.id) {
              task.name = action.payload.result.name;
              task.type = action.payload.result.type;
            }
            return task;
          });
        } else {
          state.tasks.push(action.payload.result);
        }
      });

    builder
      .addCase(archiveTask.pending, (state, action) => {
        state.progress = "pending";
      })
      .addCase(archiveTask.fulfilled, (state, action) => {
        state.progress = "done";
        if (action.payload.success === true) {
          state.tasks = state.tasks.map((task) => {
            if (task.id === action.payload.id) {
              task.isDeleted = true;
            }
            return task;
          });
        } else {
          state.error.message = action.payload.error.message;
        }
      });

    builder
      .addCase(deArchiveTask.pending, (state, action) => {
        state.progress = "pending";
      })
      .addCase(deArchiveTask.fulfilled, (state, action) => {
        state.progress = "done";
        if (action.payload.id) {
          state.tasks = state.tasks.map((task) => {
            if (task.id === action.payload.id) {
              task.isDeleted = false;
            }
            return task;
          });
        }
      });

    builder
      .addCase(deleteTask.pending, (state, action) => {
        state.progress = "pending";
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.progress = "done";
        if (action.payload.success === true) {
          state.tasks = state.tasks.filter(
            (task) => task.id !== action.payload.id
          );
        } else {
          state.error.message = action.payload.error.message;
          console.log(state.error.message);
        }
      });

   
    builder.addCase(createTask.rejected, (state, action) => {
      state.progress = "error";
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.progress = "error";
    });
    builder.addCase(archiveTask.rejected, (state, action) => {
      state.progress = "error";
    });
    builder.addCase(deArchiveTask.rejected, (state, action) => {
      state.progress = "error";
    });
  },
});

const selectSelf = (state: RootState) => state.task;
const getAllTaskSelector = createSelector(
  selectSelf,
  (state) => state.tasks
);
const getCommonTaskSelector = createSelector(
  getAllTaskSelector,
  (tasks) => tasks.filter((task) => task.type === 0)
);
const getOtherTaskSelector = createSelector(
  getAllTaskSelector,
  (tasks) => tasks.filter((task) => task.type === 1)
);

export const taskSelector = {
  getAllTaskSelector,
  getCommonTaskSelector,
  getOtherTaskSelector,
};

export const { resetProgress, resetSuccess, setSearchName, resetMessage } =
  taskSlice.actions;

export default taskSlice.reducer;
