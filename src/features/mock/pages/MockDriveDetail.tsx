import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import Loader from "../../../components/loader/Loader";
import useMockDriveDetailHook from "../hooks/useMockDriveDetailHook";
import { Link, useParams } from "react-router-dom";
import useMockDriveEnrollHook from "../hooks/useMockDriveEnrollHook";
import Button from "../../../components/button/Button";
import { RiLoader5Line } from "react-icons/ri";
import useMockDriveEnrollMentHook from "../hooks/useMockDriveEnrollmentHook";




const MockDriveDetail: React.FC = () => {
    const { mockId } = useParams();
    const { data, loading } = useMockDriveDetailHook();

    if (loading) return <Loader />;
    if (data) {
        return (
            <div className="mock-drive-detail max-w-7xl mx-auto p-5">
                <div className="breadcrumb">
                    <ul className="flex flex-nowrap items-center gap-2">
                        <li className="flex flex-nowrap items-center gap-2">
                            <a href="" className="text-[13px] font-medium text-gray-400 hover:text-gray-700 capitalize tracking-wide">home</a>
                            <IoIosArrowForward className="text-sm text-gray-400" />
                        </li>
                        <li className="flex flex-nowrap items-center gap-2">
                            <a href="" className="text-[13px] font-medium text-gray-400 hover:text-gray-700 capitalize tracking-wide">drive</a>
                            <IoIosArrowForward className="text-sm text-gray-400" />
                        </li>
                        <li className="flex flex-nowrap items-center gap-2">
                            <a href="" className="text-[13px] font-medium text-gray-700 hover:text-gray-700 capitalize tracking-wide">TCS</a>
                        </li>
                    </ul>
                </div>

                <div className="content mt-5 flex flex-col gap-10">
                    <section>
                        <h1 className="text-[15px] font-medium tracking-wide">{data?.name || ""}</h1>
                        <p className="text-[13px] font-medium text-gray-600/70 text-justify">{data?.description || ""}</p>
                        <div className="my-3 flex flex-nowrap flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                            <div className="enrollments flex flex-nowrap items-center gap-3 border-r-2 border-gray-300 pe-6 text-nowrap">
                                <FiUsers className="text-gray-600/70" />
                                <h1 className="text-[12px] font-medium text-gray-700">150 Candidates Enrolled</h1>
                            </div>
                            <div className="rating flex flex-nowrap items-center gap-3 text-nowrap">
                                <div className="rating-stars flex flex-nowrap items-center gap-1 text-yellow-400 text-sm">
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaRegStar /></span>
                                    <span><FaRegStar /></span>
                                </div>
                                <h1 className="text-[12px] font-medium text-gray-700">3.5 out of 5.0</h1>
                            </div>
                        </div>
                        <EnrollButton />
                    </section>



                    {/* Online Test */}
                    {(data?.quiz && data?.quiz?.online_test_attempt > 0)
                        &&
                        <section className="bg-white p-5 rounded-2xl">
                            <h1 className="text-[15px] font-medium tracking-wide text-gray-800 mb-5 text-center">Online Test</h1>
                            <div className="overflow-x-auto">
                                <table className="w-full bg-white border-[1.4px]">
                                    <thead>
                                        <tr className="bg-gray-100 border-b-[1.4px]">
                                            <td className="text-[13px] font-medium capitalize px-6 py-3 w-[50px] text-center">#</td>
                                            <td className="text-[13px] font-medium capitalize px-6 py-3 w-full text-start">attempt</td>
                                            <td className="text-[13px] font-medium capitalize px-6 py-3 w-[150px] text-center">score</td>
                                            <td className="text-[13px] font-medium capitalize px-6 py-3 w-[150px] text-center">status</td>
                                            <td className="text-[13px] font-medium capitalize px-6 py-3 w-[150px] text-center">action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            new Array(data?.quiz?.online_test_attempt).fill(null).map((_, index) => (
                                                <tr key={index} className="border-b last:border-b-0">
                                                    <td className="text-[13px] font-medium capitalize px-6 py-3 w-[50px] text-center">{index + 1}</td>
                                                    <td className="text-[13px] font-medium capitalize px-6 py-3 w-full text-start">attempt {index + 1}</td>
                                                    <td className="text-[13px] font-medium capitalize px-6 py-3 w-full text-start"></td>
                                                    <td className="text-[13px] font-medium capitalize px-6 py-3 w-[150px] text-center">
                                                        <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-green-100 text-green-600 text-nowrap">completed</span>
                                                    </td>
                                                    <td className="text-[13px] font-medium capitalize px-6 py-3 w-[150px] text-center">
                                                        <Link to={`/mock-drive/${mockId}/quiz/${data?.quiz?.id}/attempt/${index + 1}/online/start`} className="text-[11px] font-medium rounded-full text-white bg-gray-900 px-3 py-1 text-nowrap">Start</Link>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>}


                    {/* Coding Test */}
                    {(data?.code && data?.code?.online_test_attempt > 0)
                        &&
                        <section className="bg-white p-5 rounded-2xl">
                            <h1 className="text-[15px] font-medium tracking-wide text-gray-800 mb-5 text-center">Coding Test</h1>
                            <div className="overflow-x-auto">
                                <table className="w-full bg-white border-[1.4px]">
                                    <thead>
                                        <tr className="bg-gray-100 border-b-[1.4px]">
                                            <td className="text-[13px] font-medium capitalize px-6 py-3 w-[50px] text-center">#</td>
                                            <td className="text-[13px] font-medium capitalize px-6 py-3 w-full text-start">attempt</td>
                                            <td className="text-[13px] font-medium capitalize px-6 py-3 w-[150px] text-center">score</td>
                                            <td className="text-[13px] font-medium capitalize px-6 py-3 w-[150px] text-center">status</td>
                                            <td className="text-[13px] font-medium capitalize px-6 py-3 w-[150px] text-center">action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            new Array(data?.code?.online_test_attempt).fill(null).map((_, index) => (
                                                <tr key={index} className="border-b last:border-b-0">
                                                    <td className="text-[13px] font-medium capitalize px-6 py-3 w-[50px] text-center">{index + 1}</td>
                                                    <td className="text-[13px] font-medium capitalize px-6 py-3 w-full text-start">attempt {index + 1}</td>
                                                    <td className="text-[13px] font-medium capitalize px-6 py-3 w-full text-start"></td>
                                                    <td className="text-[13px] font-medium capitalize px-6 py-3 w-[150px] text-center">
                                                        <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-green-100 text-green-600 text-nowrap">completed</span>
                                                    </td>
                                                    <td className="text-[13px] font-medium capitalize px-6 py-3 w-[150px] text-center">
                                                        <Link to={`/mock-drive/${mockId}/coding/start`} className="text-[11px] font-medium rounded-full text-white bg-gray-900 px-3 py-1 text-nowrap">Start</Link>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>}
                </div>
            </div>
        )
    }
    return null;
}

export default MockDriveDetail;






const EnrollButton: React.FC = () => {
    const { loading, enroll } = useMockDriveEnrollHook();
    const { data } = useMockDriveEnrollMentHook();
    return (
        <Button
            type="button"
            disabled={loading || !!data}
            onClick={enroll}
            className="mt-10 cursor-pointer bg-gray-900 text-white px-4 py-2 rounded inline-flex flex-nowrap items-center justify-center text-xs">
            {loading ? (
                <RiLoader5Line className="animate-spin text-xl" />
            ) : data ? (
                "Enrolled"
            ) : (
                "Enroll Now"
            )}
        </Button>
    );
};
