import React from "react";
import Navbar1 from "../components/navbar/Navbar1";
import Sidebar1 from "../components/sidebar/Sidebar1";
import { Navigate, Outlet } from "react-router-dom";

const Layout1: React.FC = () => {
    const isAuthenticated = localStorage.getItem('codelab') ? !!JSON.parse(localStorage.getItem('codelab')!).token : false;
    if (!isAuthenticated) return <Navigate to={'/auth/signin'} />
    return (
        <div className="layout-1">
            <Navbar1 />
            <div className="flex h-[calc(100vh-48px)] ">
                <Sidebar1 />
                <main className="h-full overflow-y-auto w-full bg-slate-100">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout1;