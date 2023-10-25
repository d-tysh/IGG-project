import { AuthState } from "../../interfaces/interfaces";

export const selectIsLoggedIn = (state: {auth: AuthState}) => state.auth.isLoggedIn;
export const selectIsLoading = (state: {auth: AuthState}) => state.auth.isLoading;
export const selectError = (state: {auth: AuthState}) => state.auth.error;