import React from "react";
import { Link } from "react-router-dom";
import { Drive } from "../types/mockDriveListType";

interface CardProps {
    data?: Drive
}



const Card: React.FC<CardProps> = ({ data }) => {
    return (
        <Link to={`/mock-drive/${data?.id}/details`} className="card bg-white p-4 border-[1.3px] border-gray-200 rounded-xl">
            <div className="flex flex-nowrap items-center justify-between gap-5">
                <h1 className="text-[13px] font-semibold">{data?.name || ""}</h1>
            </div>
            <div className="content flex flex-col justify-between gap-3">
                {
                    (data?.tags && data?.tags?.length > 0) &&
                    <div className="tags flex flex-wrap items-center gap-2 mt-4">
                        {data?.tags?.map((tag: any, index: number) => (
                            <span key={index} className="text-[11px] bg-gray-100 rounded-full px-2 py-1 border text-gray-500">
                                {tag}
                            </span>
                        ))}
                    </div>
                }
            </div>
        </Link>
    )
}

export default Card;