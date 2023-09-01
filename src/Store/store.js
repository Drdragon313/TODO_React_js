import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import todoReducer from "../Features/todo/todoSlice";
import authReducer from "../Features/loginSlice/authSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
