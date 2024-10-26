import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiLoader5Fill } from "react-icons/ri";
import useMockDriveDetailHook from "../hooks/useMockDriveDetailHook";
import Loader from "../../../components/loader/Loader";
import { MockDriveDetailType } from "../types/MockDriveDetailType";
import Button from "../../../components/button/Button";
import useMockDriveEnrollmentHook from "../hooks/useMockDriveEnrollmentHook";
import { NavLink, useParams } from "react-router-dom";



const MockDriveDetail: React.FC = () => {
    const {mockId} = useParams<{mockId:string}>();
    const { data, loading } = useMockDriveDetailHook();
    const { data: EnrolledData, loading: EnrolledLoading, enrollDrive } = useMockDriveEnrollmentHook();

    if (loading) return <Loader />;
    if (data) {
        const currentData: MockDriveDetailType = data;
        return (
            <div className="mock-drive-detail p-4 sm:p-6 max-w-7xl mx-auto">

                <div className="flex flex-col gap-10">

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className=" p-3 rounded-xl col-span-2 ">
                            <h1 className="text-[16px] font-medium tracking-wide">{currentData?.name || ""}</h1>
                            <p className="text-[13px] tracking-wide text-justify my-3 text-gray-600">{currentData?.description || ""}</p>
                        </div>
                        <div className="bg-white rounded-xl col-span-1 p-4 flex flex-col justify-between">
                            <div className="">
                                <div className="flex flex-nowrap items-center justify-between gap-2 w-full">
                                    <h1 className="text-[16px] font-semibold">FREE</h1>
                                    <span className="text-[10px] bg-indigo-100 text-indigo-600 px-4 py-1 font-medium rounded-full">{currentData?.discount || 0}% OFF</span>
                                </div>
                                <ul className="flex flex-col gap-2 mt-10">
                                    <li className="flex flex-nowrap items-center gap-2">
                                        <IoCheckmarkCircleOutline className="text-lg text-green-500" />
                                        <h1 className="text-[12px] tracking-wide text-gray-600 font-medium">100% Money Back Guarantee</h1>
                                    </li>
                                    <li className="flex flex-nowrap items-center gap-2">
                                        <IoCheckmarkCircleOutline className="text-lg text-green-500" />
                                        <h1 className="text-[12px] tracking-wide text-gray-600 font-medium">No Questions Asked Returns</h1>
                                    </li>
                                    <li className="flex flex-nowrap items-center gap-2">
                                        <IoCheckmarkCircleOutline className="text-lg text-green-500" />
                                        <h1 className="text-[12px] tracking-wide text-gray-600 font-medium">Secure Payment Processing</h1>
                                    </li>
                                    <li className="flex flex-nowrap items-center gap-2">
                                        <IoCheckmarkCircleOutline className="text-lg text-green-500" />
                                        <h1 className="text-[12px] tracking-wide text-gray-600 font-medium">Regular Discounts and Promotions</h1>
                                    </li>
                                </ul>
                            </div>
                            <EnrollButton data={EnrolledData} loading={EnrolledLoading} enrollDrive={enrollDrive} />
                        </div>
                    </section>

                    {/* Online Test */}
                    {
                        currentData?.quiz?.online_test_attempt > 0
                        &&
                        <section>
                            <h1 className="text-[14px] font-medium tracking-wide my-2 px-2">Round : Online Test</h1>
                            <div className="overflow-x-auto">
                                <table className="rounded-lg overflow-hidden border border-gray-300 bg-white">
                                    <thead>
                                        <tr className="border-b">
                                            <td className="min-w-[100px] text-nowrap text-[12px] font-medium tracking-wide p-3 text-center">No.</td>
                                            <td className="w-full text-nowrap text-[12px] font-medium tracking-wide p-3">Attempt Details</td>
                                            <td className="min-w-[100px] text-nowrap text-[12px] font-medium tracking-wide p-3 text-center">Score</td>
                                            <td className="min-w-[100px] text-nowrap text-[12px] font-medium tracking-wide p-3 text-center">Status</td>
                                            <td className="min-w-[100px] text-nowrap text-[12px] font-medium tracking-wide p-3 text-center">Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {new Array(currentData?.quiz?.online_test_attempt).fill(null).map((_, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="min-w-[100px] text-nowrap text-[12px] font-medium tracking-wide p-3 text-center">0{index + 1}</td>
                                                <td className="w-full text-nowrap text-[12px] font-medium tracking-wide p-3">Attempt 0{index + 1}</td>
                                                <td className="min-w-[100px] text-nowrap text-[12px] font-medium tracking-wide p-3 text-center">0 %</td>
                                                <td className="min-w-[100px] text-nowrap text-[12px] font-medium tracking-wide p-3 text-center">
                                                    <span className="text-[9px] tracking-wide font-medium bg-green-200 text-green-700 border-[1.3px] border-green-300 rounded-full px-3 py-1">Completed</span>
                                                </td>
                                                <td className="min-w-[100px] text-nowrap text-[12px] font-medium tracking-wide p-3 text-center">
                                                    {
                                                        !EnrolledData
                                                            ?
                                                            <h1 className="text-[10px] px-3 py-1 font-medium tracking-wide bg-red-100 text-red-600 rounded-full">Enrollment Required</h1>
                                                            :
                                                            <NavLink to={`/mock-drive/${mockId}/online/${currentData?.quiz?.id}/attempt/${index+1}/start`} className="text-[10px] font-medium px-6 border-0 py-1 text-white bg-gray-950 rounded-full tracking-wide">Start</NavLink>
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    }
                </div>
            </div>
        );
    }
    return null;
};

export default MockDriveDetail;







// * Enrollment Button
const EnrollButton: React.FC<{ data: any, loading: any, enrollDrive: () => any }> = ({ data, loading, enrollDrive }) => {
    return (
        <Button type="button" onClick={enrollDrive} disabled={data || loading} className={`${data || loading ? "bg-gray-500" : "bg-gray-900"} text-[13px] font-medium tracking-wide  text-white rounded-md h-9 mt-10`}>
            {
                loading ?
                    (
                        <RiLoader5Fill className="animate-spin text-white mr-2" />
                    ) : data ? (
                        <h1>Registered</h1>
                    ) : (
                        <h1>Register now</h1>
                    )
            }
        </Button>
    )
}