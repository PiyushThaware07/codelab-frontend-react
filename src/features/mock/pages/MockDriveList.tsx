import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import useMockDriveListHook from "../hooks/useMockDriveListHook";
import Loader from "../../../components/loader/Loader";
import { Drive } from "../types/mockDriveListType";
import Card from "../components/Card";

const MockDriveList: React.FC = () => {
    const { data, loading } = useMockDriveListHook();
    console.log("--->", data);

    if (loading) return <Loader />;

    if (data) {
        return (
            <div className="mock-drive-list max-w-7xl mx-auto p-5">
                <div className="breadcrumb">
                    <ul className="flex flex-nowrap items-center gap-2">
                        <li className="flex flex-nowrap items-center gap-2">
                            <Link to="/" className="text-[13px] font-medium text-gray-400 hover:text-gray-700 capitalize tracking-wide">home</Link>
                            <IoIosArrowForward className="text-sm text-gray-400" />
                        </li>
                        <li className="flex flex-nowrap items-center gap-2">
                            <Link to="/exams" className="text-[13px] font-medium text-gray-700 hover:text-gray-700 capitalize tracking-wide">exams</Link>
                        </li>
                    </ul>
                </div>

                <div className="mt-5 flex flex-col gap-10">
                    {Object.entries(data).map(([category, drives]) => {
                        const filteredData: Drive[] = drives.slice(0, 3) || [];
                        return (
                            <section key={category}>
                                <div className="flex flex-nowrap items-center justify-between gap-5">
                                    <h1 className="text-sm font-medium capitalize">{category} based</h1>
                                    <Link to={`/mock-drive/category/${category}`} className="flex flex-nowrap items-center gap-1 text-red-600 px-3 py-1 rounded-full group">
                                        <h1 className="text-[12px] font-medium tracking-wide">Explore more</h1>
                                        <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 transition-all duration-500" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-3">
                                    {filteredData.map((drive) => (
                                       <Card data={drive} key={drive.id} />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        );
    }

    return null;
};

export default MockDriveList;
