import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { FormData, TableDataItem } from "../../interfaces/interfaces";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://technical-task-api.icapgroupgmbh.com/api';

export const fetchTableData = createAsyncThunk(
    'table/fetchTableData',
    async (offset, {rejectWithValue}) => {
        try {
            const response = await axios.get(`/table/?offset=${offset}`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    return rejectWithValue(axiosError.response.data);
                }
            }
            throw error;
        }
    }
)

export const fetchPrevNext = createAsyncThunk(
    'table/fetchPrevNext',
    async (url: string, {rejectWithValue}) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    return rejectWithValue(axiosError.response.data);
                }
            }
            throw error;
        }
    }
)

export const addData = createAsyncThunk(
    'table/addData',
    async (data: FormData, {rejectWithValue}) => {
        try {
            const response = await axios.post('table/', data);
            toast.success('Success: data was sent.');
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    toast.error("Error! Data wasn't send.")
                    return rejectWithValue(axiosError.response.data);
                }
            }
            throw error;
        }
    }
)

export const editDataById = createAsyncThunk(
    'table/editDataById',
    async ({id, data}: {id: number, data: TableDataItem}, {rejectWithValue}) => {
        try {
            console.log(data);
            const response = await axios.put(`table/${id}/`, data);
            console.log(response);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    return rejectWithValue(axiosError.response.data);
                }
            }
            throw error;
        }
    }
)

