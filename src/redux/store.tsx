import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import taskReducer from "./reducers/taskReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'



const reducer = {
  auth: authReducer,
  task: taskReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
