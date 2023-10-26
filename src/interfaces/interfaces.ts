export interface AuthState {
    isLoggedIn: boolean,
    isLoading: boolean
    error: string | null
}

export interface TableData {
    dataList: TableDataItem[] | [],
    isLoading: boolean,
    error: string | null,
    dataCount: number | null,
    prevPage: string | null,
    nextPage: string | null,
    itemLoading: boolean,
    itemInfo: TableDataItem | null
}

export interface TableDataItem {
    id: number,
    name: string,
    email: string,
    address: string,
    birthday_date: string,
    phone_number: string,
}

export interface FormData {
    name: string,
    email: string,
    birthday_date: string,
    phone_number: string,
    address: string
}

export interface DataProps {
    name?: string,
    email?: string,
    birthday_date?: string,
    phone_number?: string,
    address?: string,
    id: number
}