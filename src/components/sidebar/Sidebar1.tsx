import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiInbox } from "react-icons/fi";
import { LuClipboardList } from "react-icons/lu";
import { LuFolderTree } from "react-icons/lu";
import { LuGamepad2 } from "react-icons/lu";
import { LuBookMarked } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";
import { NavLink } from "react-router-dom";



const menuItems = [
    {
        title: "basic",
        items: [
            {
                label: "Dashboard",
                link: "",
                icon: <FiInbox className="text-md" />
            },
            {
                label: "Job Hunt",
                link: "job",
                icon: <FiBriefcase className="text-md" />
            },
            {
                label: "Resume Builder",
                link: "resume",
                icon: <FiFileText className="text-md" />
            },
        ]

    },
    {
        title: "preparation",
        items: [
            {
                label: "Examination",
                link: "mock-drive",
                icon: <LuClipboardList className="text-md" />
            },
            {
                label: "Project Plaining",
                link: "project",
                icon: <LuFolderTree className="text-md" />
            },
            {
                label: "Preparation",
                link: "preparation",
                icon: <LuGamepad2 className="text-md" />
            },
            {
                label: "Gamified learning",
                link: "gaming",
                icon: <LuBookMarked className="text-md" />
            },
        ]

    },
    {
        title: "USER",
        items: [
            {
                label: "Public Profile",
                link: "examination",
                icon: <LuUser2 className="text-md" />
            },
            // {
            //     label: "Sign out",
            //     link: "signout",
            //     icon: <HiOutlineLogout className="text-lg" />
            // },
        ]

    },
]



const Sidebar1: React.FC = () => {
    return (
        <aside className="h-[calc(100vh-56px)] w-80 border-r-2 border-gray-100 bg-white p-3 hidden lg:flex flex-col gap-5 sticky top-0 left-0 overflow-y-auto">
            {
                menuItems.map((item, index) => (
                    <nav key={index}>
                        <h1 className="text-[10px] font-medium tracking-wide px-4 py-2 text-gray-500/70 uppercase">{item.title}</h1>
                        <ul className="flex flex-col gap-1">
                            {
                                item.items.map((element, idx) => (
                                    <li key={idx}>
                                        <NavLink to={element.link} className={({ isActive }) => `${isActive ? "text-indigo-600 bg-indigo-100 rounded" : "text-gray-700 hover:bg-gray-100 rounded-md"} flex flex-nowrap items-center gap-2 w-full  px-4 h-9`}>
                                            {element.icon}
                                            <h1 className="text-[12px] font-medium capitalize">{element.label}</h1>
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                ))
            }
        </aside>
    )
}

export default Sidebar1;