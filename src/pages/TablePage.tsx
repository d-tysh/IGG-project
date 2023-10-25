import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../components/Table/Table"
import { selectDataCount, selectDataList, selectNextPage, selectPrevPage, selectTableLoading } from "../redux/table/selectors";
import { fetchPrevNext, fetchTableData } from "../redux/table/actions";
import { Loader } from "../components/Loader/Loader";
// import { TableDataForm } from "../components/Forms/TableDataForm";

export const TablePage = () => {
    const dispatch = useDispatch();
    const dataList = useSelector(selectDataList);
    const dataCount = useSelector(selectDataCount);
    const isLoading = useSelector(selectTableLoading);
    const prevPage = useSelector(selectPrevPage);
    const nextPage = useSelector(selectNextPage);
    const [currentPage, setCurrentPage] = useState<number>(1);
    
    const pages = Math.ceil((dataCount / 10));
    const pageNumbers = [];

    useEffect(() => {
        dispatch(fetchTableData(0));
    }, [dispatch])

    for (let i = 0; i < pages; i++) {
        pageNumbers.push(i);
    }

    const loadPage = (offset: number, page: number) => {
        setCurrentPage(page);
        dispatch(fetchTableData(offset));
    }

    const loadPrev = (url: string) => {
        if (currentPage < 1) {
            return
        } else {
            dispatch(fetchPrevNext(url));
            setCurrentPage(page => page && page - 1);
        }
    }

    const loadNext = (url: string) => {
        if (currentPage > pages) {
            return
        } else {
            dispatch(fetchPrevNext(url));
            setCurrentPage(page => page && page + 1);
        }
    }

    return (
        <div className="py-4">
            { isLoading && <Loader /> }
            { !isLoading && dataList && <Table dataList={dataList} /> }
            <ul className="flex flex-wrap gap-y-1 justify-center mt-4">
                {
                    (currentPage > 1) && prevPage && <li key='prev' onClick={() => loadPrev(prevPage)} 
                        className="border px-4 cursor-pointer text-center bg-gray-200 hover:bg-gray-300"
                    >Prev</li>
                }
                {
                    pageNumbers.map(page => <li key={page+1}
                            className="border w-[40px] cursor-pointer text-center hover:bg-gray-300"
                            style={{backgroundColor: `${currentPage === page+1 ? 'gray' : 'transparent'}`}}
                            onClick={() => loadPage(page * 10, page+1)}
                        >{page+1}</li>)
                }
                {
                    (currentPage < pages) && nextPage && <li key='next' onClick={() => loadNext(nextPage)}  
                        className="border px-4 cursor-pointer text-center bg-gray-200 hover:bg-gray-300"
                    >Next</li>
                }
            </ul>
        </div>
    )
}