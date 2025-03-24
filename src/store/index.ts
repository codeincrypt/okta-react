import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import loadingSlice from "./slice/loading";

const rootReducer = combineReducers({
  loading: loadingSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;