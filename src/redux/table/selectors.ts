import { TableData } from "../../interfaces/interfaces";

export const selectDataList = (state: {table: TableData}) => state.table.dataList;
export const selectDataCount = (state: {table: TableData}) => state.table.dataCount;
export const selectTableLoading = (state: {table: TableData}) => state.table.isLoading;
export const selectPrevPage = (state: {table: TableData}) => state.table.prevPage;
export const selectNextPage = (state: {table: TableData}) => state.table.nextPage;