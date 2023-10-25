import { TableData } from "../../interfaces/interfaces";

export const selectDataList = (state: TableData) => state.table.dataList;
export const selectDataCount = (state: TableData) => state.table.dataCount;
export const selectTableLoading = (state: TableData) => state.table.isLoading;
export const selectPrevPage = (state: TableData) => state.table.prevPage;
export const selectNextPage = (state: TableData) => state.table.nextPage;