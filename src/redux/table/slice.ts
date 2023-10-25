import { createSlice } from "@reduxjs/toolkit"
import { addData, editDataById, fetchPrevNext, fetchTableData } from "./actions"
import { TableData } from "../../interfaces/interfaces"

const initialState: TableData = {
    dataList: [],
    isLoading: false,
    error: null,
    dataCount: null,
    prevPage: null,
    nextPage: null
}

const tableSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTableData.pending, (state: TableData) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchTableData.fulfilled, (state: TableData, action) => {
                state.dataList = action.payload.results;
                state.dataCount = action.payload.count;
                state.prevPage = action.payload.previous;
                state.nextPage = action.payload.next;
                state.isLoading = false;
            })
            .addCase(fetchTableData.rejected, (state: TableData, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })

            .addCase(fetchPrevNext.pending, (state: TableData) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPrevNext.fulfilled, (state: TableData, action) => {
                state.dataList = action.payload.results;
                state.dataCount = action.payload.count;
                state.prevPage = action.payload.previous;
                state.nextPage = action.payload.next;
                state.isLoading = false;
            })
            .addCase(fetchPrevNext.rejected, (state: TableData, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })

            .addCase(addData.pending, (state: TableData) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addData.fulfilled, (state: TableData, action) => {
                state.dataList = action.payload.results;
                state.dataCount = action.payload.count;
                state.prevPage = action.payload.previous;
                state.nextPage = action.payload.next;
                state.isLoading = false;
            })
            .addCase(addData.rejected, (state: TableData, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })

            .addCase(editDataById.pending, (state: TableData) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(editDataById.fulfilled, (state: TableData) => {
                state.isLoading = false;
            })
            .addCase(editDataById.rejected, (state: TableData, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
})

export const tableReducer = tableSlice.reducer;