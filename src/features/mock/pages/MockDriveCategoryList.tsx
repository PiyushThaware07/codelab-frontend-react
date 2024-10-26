import React from "react";

import useMockDriveListHook from "../hooks/useMockDriveListHook";
import Loader from "../../../components/loader/Loader";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { CategoryType } from "../types/MockDriveListType";



const MockDriveCateoryList: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>()
    const { data, loading } = useMockDriveListHook();


    if (loading) return <Loader />
    if (data) {
        const drives:CategoryType[] = data[categoryName as keyof typeof data];
        console.log(drives);
        return (
            <div className="mock-drive-list p-4 sm:p-6 flex flex-col gap-10 max-w-7xl mx-auto">
                <section>
                    <div className="mb-5 flex flex-nowrap items-center justify-between gap-5">
                        <div className="">
                            <h1 className="text-[14px] font-medium capitalize">{categoryName} Based</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                        {drives.map((drive, index) => (
                            <Card key={index} data={drive} />
                        ))}
                    </div>
                </section>
            </div>
        )
    }
    return null;
}

export default MockDriveCateoryList;