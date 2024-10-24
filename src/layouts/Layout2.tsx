import React from "react";
import Navbar1 from "../components/navbar/Navbar1";
import { Outlet } from "react-router-dom";

const Layout2: React.FC = () => {
    return (
        <div className="layout-2 min-h-screen bg-slate-100">
            <Navbar1 />
            <main className="overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout2;