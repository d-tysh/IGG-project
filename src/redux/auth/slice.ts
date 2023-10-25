import { createSlice } from "@reduxjs/toolkit";
import { login } from "./actions";
import { AuthState } from "../../interfaces/interfaces";

const initialState: AuthState = {
    isLoggedIn: false,
    isLoading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state: AuthState) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state: AuthState) => {
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
})

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;