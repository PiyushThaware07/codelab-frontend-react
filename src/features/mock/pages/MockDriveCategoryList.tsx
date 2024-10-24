import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";
import useMockDriveListHook from "../hooks/useMockDriveListHook";
import Loader from "../../../components/loader/Loader";
import Card from "../components/Card";
import { Drive } from "../types/mockDriveListType";


const MockDriveCategoryList: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const { data, loading } = useMockDriveListHook();
    
    if (loading) return <Loader />;
    if (data) {
        const categoryData: Drive[] = data[categoryName as keyof typeof data] || [];
        return (
            <div className="mock-drive-category-list max-w-7xl mx-auto p-5">
                <div className="breadcrumb">
                    <ul className="flex flex-nowrap items-center gap-2">
                        <li className="flex flex-nowrap items-center gap-2">
                            <a href="" className="text-[13px] font-medium text-gray-400 hover:text-gray-700 capitalize tracking-wide">home</a>
                            <IoIosArrowForward className="text-sm text-gray-400" />
                        </li>
                        <li className="flex flex-nowrap items-center gap-2">
                            <a href="" className="text-[13px] font-medium text-gray-400 hover:text-gray-700 capitalize tracking-wide">Drive</a>
                            <IoIosArrowForward className="text-sm text-gray-400" />
                        </li>
                        <li className="flex flex-nowrap items-center gap-2">
                            <a href="" className="text-[13px] font-medium text-gray-700 hover:text-gray-700 capitalize tracking-wide">{categoryName}</a>
                        </li>
                    </ul>
                </div>

                <div className="mt-5 flex flex-col gap-10">
                    <section>
                        <div className="flex flex-nowrap items-center justify-between gap-5">
                            <h1 className="text-sm font-medium capitalize">{categoryName} based</h1>
                        </div>
                        <div className="grid grid-cols-3 gap-6 my-3">
                            {categoryData.map((item: Drive, index: number) => (
                                <Card data={item} key={index} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
    return null;
}

export default MockDriveCategoryList;