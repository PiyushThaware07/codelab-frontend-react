import React from "react";
import { CategoryType } from "../types/MockDriveListType";
import { Link } from "react-router-dom";

type ICardProps = {
    data: CategoryType
}

const Card: React.FC<ICardProps> = ({ data }) => {
    return (
        <Link to={`/mock-drive/${data?.id}/detail`} className="card w-full bg-white rounded-xl p-4 cursor-pointer">
            <div className="">
                <h1 className="text-[13.5px] font-medium">{data?.name || ""}</h1>
            </div>
            <div className="tags mt-5 flex  flex-wrap items-center gap-2 w-full select-none">
                {
                    data?.tags?.map((tag, index) => (
                        <span key={index} className="text-[10px] font-medium tracking-wide bg-gray-100 text-gray-400 px-4 py-1 rounded-full capitalize">{tag}</span>
                    ))
                }
            </div>
        </Link>
    )
}

export default Card;