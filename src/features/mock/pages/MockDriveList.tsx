import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useMockDriveListHook from "../hooks/useMockDriveListHook";
import Loader from "../../../components/loader/Loader";
import Card from "../components/Card";


const MockDriveList: React.FC = () => {
    const { data, loading } = useMockDriveListHook();

    if (loading) return <Loader />
    if (data) {
        return (
            <div className="mock-drive-list p-4 sm:p-6 flex flex-col gap-10 max-w-7xl mx-auto">
                {Object.entries(data).map(([category, drives]) => (
                    <section key={category}>
                        <div className="mb-5 flex flex-nowrap items-center justify-between gap-5">
                            <div className="">
                                <h1 className="text-[14px] font-medium capitalize">{category} Based</h1>
                            </div>
                            <Link to={`/mock-drive/category/${category}/list`} className="text-[11px] font-medium tracking-wide bg-white rounded-full px-4 py-2 text-gray-600 border flex flex-nowrap items-center gap-3">
                                <h1>Explore more</h1>
                                <FaArrowRightLong className="text-indigo-600" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                            {drives.slice(0, 3).map((drive, index) => (
                                <Card key={index} data={drive} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        )
    }
    return null;
}

export default MockDriveList;