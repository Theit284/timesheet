import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../api/auth/auth";
import { setAccessToken } from "../../utils/LocalStorage";
import { getAuthenticate } from "../actions/authAction";


const initialState: IAuthState   = {
  progress:"",
  user: {
    accessToken: "",
  },
  success: false,
  error: {
    code: 0,
    details: "",
    validationErrors: {},
    message: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetProgress(state) {
      state.progress = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthenticate.pending, (state, action) => {
      state.progress = "pending"
    });
    builder.addCase(getAuthenticate.fulfilled, (state, action) => {
      state.progress = "done"
      if (action.payload.success === true) {
        setAccessToken(action.payload.result.accessToken);
        state.user.accessToken = action.payload.result.accessToken;
      } else {
        state.error.message = action.payload.error.message;
        state.error.details = action.payload.error.details;
      }
    });
  },
});

export default authSlice.reducer;