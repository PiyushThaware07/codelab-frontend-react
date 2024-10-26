import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import Button from "../../../components/button/Button";


const UserProfile: React.FC = () => {
    return (
        <div className="user-profile p-5">
            <div className="breadcrumb">
                <ul className="flex flex-nowrap items-center gap-2">
                    <li className="flex flex-nowrap items-center gap-2">
                        <a href="" className="text-[13px] font-medium text-gray-400 hover:text-gray-700 capitalize tracking-wide">home</a>
                        <IoIosArrowForward className="text-sm text-gray-400" />
                    </li>
                    <li className="flex flex-nowrap items-center gap-2">
                        <a href="" className="text-[13px] font-medium text-gray-900 hover:text-gray-700 capitalize tracking-wide">Profile</a>
                    </li>
                </ul>
            </div>
            <div className="mt-5">
                <section className="bg-white rounded-xl p-5">
                    <div className="">
                        <div className="flex flex-nowrap items-center gap-3">
                            <div className="h-8 w-8 rounded-md bg-gray-100 border-2 border-gray-700 flex flex-nowrap items-center justify-center">
                                <LuUser2 className="text-lg text-gray-700" />
                            </div>
                            <div className="flex flex-col gap-0">
                                <h1 className="text-[13px] font-[500] text-gray-700 tracking-wide">Personal Information</h1>
                                <p className="text-[12px] -mt-1 text-gray-500">Manage your personal information over here</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <label>
                            <h1 className="text-[11px] font-medium tracking-wide">First Name</h1>
                        </label>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UserProfile;