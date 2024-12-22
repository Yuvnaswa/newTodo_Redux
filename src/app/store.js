import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../featuers/todos/todoSlice";

export const store = configureStore({
    reducer: todoReducer
})