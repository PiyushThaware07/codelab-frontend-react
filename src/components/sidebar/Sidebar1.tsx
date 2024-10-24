import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LuBox } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";


const Sidebar1: React.FC = () => {
    const navigate = useNavigate();
    const handleLogout = useCallback(() => {
        localStorage.removeItem("codelab");
        navigate("/auth/signin");
    }, [navigate]);
    return (
        <aside className=" lg:w-64 h-full bg-black py-3 overflow-y-auto hidden lg:flex flex-col">
            <nav className="px-3 py-2">
                <ul className="flex flex-col gap-2">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${isActive ? "nav-link-active" : "text-white/70 group"} flex flex-nowrap items-center gap-2 px-4 py-2 rounded-md`}>
                            <LuBox className={`transition-all duration-500 active-icon group-hover:text-red-600`} />
                            <h1 className="text-xs capitalize font-medium transition-all duration-500 group-hover:text-white">home</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/todo"
                            className={({ isActive }) => `${isActive ? "nav-link-active" : "text-white/70 group"} flex flex-nowrap items-center gap-2 px-4 py-2 rounded-md`}>
                            <LuListTodo className={`transition-all duration-500 active-icon group-hover:text-red-600`} />
                            <h1 className="text-xs capitalize font-medium transition-all duration-500 group-hover:text-white">todo</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/mock-drive"
                            className={({ isActive }) => `${isActive ? "nav-link-active" : "text-white/70 group"} flex flex-nowrap items-center gap-2 px-4 py-2 rounded-md`}>
                            <HiOutlinePencilAlt className={`transition-all duration-500 active-icon group-hover:text-red-600`} />
                            <h1 className="text-xs capitalize font-medium transition-all duration-500 group-hover:text-white">exam</h1>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className="px-3 py-2">
                <div className="h-[1.5px] rounded-full mx-3 w-auto mb-4 bg-gray-500/30"></div>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Button type="button" onClick={() => handleLogout()} className="flex flex-nowrap items-center gap-2 text-white/70 px-4 py-2 rounded-md group">
                            <HiOutlineLogout className="group-hover:text-red-500 transition-all duration-500" />
                            <h1 className=" text-xs capitalize font-medium group-hover:text-white transition-all duration-500">signout</h1>
                        </Button>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar1;