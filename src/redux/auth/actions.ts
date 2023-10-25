import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
    'auth/login',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://technical-task-api.icapgroupgmbh.com/api/login/', userData);
            if (response.status === 200) {
                toast.success('Authentication successful.')
            }
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    axiosError.response.status === 401 ? toast.error('No user with this data.') : null;
                    return rejectWithValue(axiosError.response.data);
                }
            }
            throw error;
        }
    });

export const logout = createAction('auth/logout');