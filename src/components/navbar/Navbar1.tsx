import React, { useState } from "react";
// Icons
import { FaWix } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { BsCart4 } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";

const Navbar1: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isAuthenticated = localStorage.getItem('codelab') ? !!JSON.parse(localStorage.getItem('codelab')!).token : false;
    return (
        <nav className='h-auto lg:h-12 w-full bg-white border-b lg:px-6 flex flex-nowrap items-center sticky top-0 left-0'>
            <section className='lg:flex h-full flex-nowrap items-center gap-3 w-full'>
                <div className={`h-full flex flex-nowrap items-center justify-between lg:justify-normal w-full lg:w-auto ${isOpen && "lg:border-b-0 border-b"} px-6 lg:px-0`}>
                    <a href="" className='pe-5'>
                        <FaWix className='text-4xl' />
                    </a>
                    <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <LuMenu className="text-xl text-gray-800" />
                    </button>
                </div>
                {
                    isAuthenticated &&
                    <div className={` ${isOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row flex-nowrap lg:items-center gap-3 h-full w-full lg:w-autobg-red-500 -mt-4 lg:m-0 py-10 lg:py-0 px-6 lg:px-0`}>
                        <a href="" className='h-full text-nowrap flex flex-nowrap items-center justify-between lg:justify-normal gap-2 p-3 lg:px-3 bg-gray-50 text-slate-600/70 lg:border-x '>
                            <h1 className='text-[13px] font-medium'>Explore</h1>
                            <IoIosArrowDown className='text-md' />
                        </a>
                        <a href="" className='h-full text-nowrap flex flex-nowrap items-center justify-between lg:justify-normal gap-2 p-3 lg:px-3 text-slate-600/70 hover:text-blue-500 transition-all duration-500'>
                            <h1 className='text-[13px] font-medium '>Hire a professional</h1>
                        </a>
                        <a href="" className='h-full text-nowrap flex flex-nowrap items-center justify-between lg:justify-normal gap-2 p-3 lg:px-3 text-slate-600/70 hover:text-blue-500 transition-all duration-500'>
                            <h1 className='text-[13px] font-medium'>Support</h1>
                            <IoIosArrowDown className='text-md' />
                        </a>
                    </div>
                }

            </section>
            {
                isAuthenticated &&
                <section className='w-full hidden lg:flex flex-nowrap items-center justify-end gap-6'>
                    <form action="" className='flex flex-nowrap items-center gap-3 border border-gray-300 bg-gray-50 p-2 rounded-full'>
                        <IoSearchOutline className='text-gray-600/70' />
                        <input type="text" className='min-w-[300px] text-xs font-medium bg-transparent focus:outline-none' placeholder='Search app,history,settings,books' />
                    </form>
                    <div className=" flex flex-nowrap items-center gap-7">
                        <button><BsCart4 className='text-lg text-gray-600/70 hover:text-blue-500 transition-all duration-500' /></button>
                        <button><GoBell className='text-lg text-gray-600/70 mt-1 hover:text-blue-500 transition-all duration-500' /></button>
                    </div>
                    <div className="border-l-[1.6px] pl-5">
                        <button className='flex flex-nowrap items-center text-gray-600/70 gap-2'>
                            <img className='h-7 w-7 rounded-full object-cover shrink-0' src="https://lh3.googleusercontent.com/a/ACg8ocJWwTj0Qc8WFs36kelLs4h4f7qLDgxuAay80-nrnRNoP9_c2Q%3Ds96-c" alt="" />
                            <IoIosArrowDown className='text-md shrink-0' />
                        </button>
                    </div>
                </section>
            }
        </nav>
    )
}

export default Navbar1;