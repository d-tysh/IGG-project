import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { tableReducer } from "./table/slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        table: tableReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;