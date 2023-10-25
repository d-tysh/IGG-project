import { Suspense } from "react"
import { Header } from "../components/Header/Header"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="max-w-[800px] block mx-auto" >
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}