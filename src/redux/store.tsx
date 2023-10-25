import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { tableReducer } from "./table/slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        table: tableReducer
    }
})