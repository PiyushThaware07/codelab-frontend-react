import React from "react";
import Button from "../../../components/button/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useMockDriveOnlineTestHook from "../hooks/useMockDriveOnlineTestHook";
import Loader from "../../../components/loader/Loader";
import { DataType, SelectOptionType } from "../types/MockDriveOnlineTest";
import { handleNavigate, updateSelectOption } from "../reducer/MockDriveOnlineTestReducer";
import { useAppDispatch } from "../../../store/store";
import Timer from "../components/Timer";
import Tracking from "../components/Tracker";



const MockDriveOnlineTest: React.FC = () => {
    const dispatch = useAppDispatch();
    const { loading, data } = useMockDriveOnlineTestHook();
    if (loading) return <Loader />
    if (data) {
        const mapData: DataType = data;
        const currentIndex = mapData?.currentIndex;
        const currentQuestions = mapData?.currentQuestions?.questions;
        const currentQuestion = currentQuestions[currentIndex];
        const selectedOptions = mapData?.selectedOptions;

        function handleSelectOption(questionId: string, option: any) {
            dispatch(updateSelectOption({ questionId, selectedOption: option }));
        }
        return (
            <div className="mock-drive-coding-test h-full w-full p-6 select-none max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl h-full w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* CONTENT - 1 */}
                    <section className="lg:col-span-2 p-5 flex flex-col justify-between">
                        <div className="block lg:hidden w-full">
                            <Timer data={data} />
                        </div>
                        <div className="">
                            <div className="">
                                <span className="inline text-[11.5px] font-medium tracking-wide bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Question {currentIndex + 1 > 9 ? currentIndex + 1 : `0${currentIndex + 1}`}</span>
                                <h1 className="title text-[12px] font-medium tracking-wide mb-2 mt-5 text-gray-700">{currentQuestion?.sub_title || ""}</h1>
                                <p className="title text-[13px] font-medium text-justify text-gray-600/80 tracking-wide">{currentQuestion?.title || ""}</p>
                            </div>
                            <div className="option my-6 flex flex-col gap-2">
                                <label
                                    htmlFor={`option_1`}
                                    className="flex flex-nowrap items-center gap-3 text-[13px] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="option"
                                        id={`option_1`}
                                        value={currentQuestion?.option_1 || ""}
                                        className="w-3 h-3 border-2 border-gray-300 rounded-none appearance-none checked:bg-indigo-600 checked:border-transparent cursor-pointer"
                                        checked={selectedOptions.find((item: SelectOptionType) => item?.questionId === currentQuestion?.id)?.selectedOption === currentQuestion?.option_1}
                                        onChange={() => handleSelectOption(currentQuestion?.id, currentQuestion?.option_1)}
                                    />
                                    <h1 className="font-[500]">{currentQuestion?.option_1 || ""}</h1>
                                </label>
                                <label
                                    htmlFor={`option_2`}
                                    className="flex flex-nowrap items-center gap-3 text-[13px] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="option"
                                        id={`option_2`}
                                        value={currentQuestion?.option_2 || ""}
                                        className="w-3 h-3 border-2 border-gray-300 rounded-none appearance-none checked:bg-indigo-600 checked:border-transparent cursor-pointer"
                                        checked={selectedOptions.find((item: SelectOptionType) => item?.questionId === currentQuestion?.id)?.selectedOption === currentQuestion?.option_2}
                                        onChange={() => handleSelectOption(currentQuestion?.id, currentQuestion?.option_2)}
                                    />
                                    <h1 className="font-[500]">{currentQuestion?.option_2 || ""}</h1>
                                </label>
                                <label
                                    htmlFor={`option_3`}
                                    className="flex flex-nowrap items-center gap-3 text-[13px] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="option"
                                        id={`option_3`}
                                        value={currentQuestion?.option_3 || ""}
                                        className="w-3 h-3 border-2 border-gray-300 rounded-none appearance-none checked:bg-indigo-600 checked:border-transparent cursor-pointer"
                                        checked={selectedOptions.find((item: SelectOptionType) => item?.questionId === currentQuestion?.id)?.selectedOption === currentQuestion?.option_3}
                                        onChange={() => handleSelectOption(currentQuestion?.id, currentQuestion?.option_3)}
                                    />
                                    <h1 className="font-[500]">{currentQuestion?.option_3 || ""}</h1>
                                </label>
                                <label
                                    htmlFor={`option_4`}
                                    className="flex flex-nowrap items-center gap-3 text-[13px] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="option"
                                        id={`option_4`}
                                        value={currentQuestion?.option_4 || ""}
                                        className="w-3 h-3 border-2 border-gray-300 rounded-none appearance-none checked:bg-indigo-600 checked:border-transparent cursor-pointer"
                                        checked={selectedOptions.find((item: SelectOptionType) => item?.questionId === currentQuestion?.id)?.selectedOption === currentQuestion?.option_4}
                                        onChange={() => handleSelectOption(currentQuestion?.id, currentQuestion?.option_4)}
                                    />
                                    <h1 className="font-[500]">{currentQuestion?.option_4 || ""}</h1>
                                </label>
                            </div>
                        </div>
                        <div className="navigation flex flex-nowrap items-center justify-between gap-5">
                            <div className="flex flex-nowrap items-center gap-4">
                                <Button
                                    type="button"
                                    disabled={currentIndex === 0}
                                    onClick={() => dispatch(handleNavigate(currentIndex - 1))}
                                    className="font-medium tracking-wide px-1 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out flex flex-nowrap items-center gap-2">
                                    <div className="h-7 w-7 rounded-full bg-white flex flex-nowrap items-center justify-center">
                                        <IoIosArrowBack className="text-md" />
                                    </div>
                                    <h1 className="px-3 text-gray-600 capitalize font-medium tracking-wider text-[12px]">Prev</h1>
                                </Button>
                                <button
                                    type="button"
                                    disabled={currentIndex === currentQuestions.length - 1}
                                    onClick={() => dispatch(handleNavigate(currentIndex + 1))}
                                    className="font-medium tracking-wide px-1 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out flex flex-nowrap items-center gap-2">
                                    <h1 className="px-3 text-gray-600  capitalize font-medium tracking-wider text-[12px]">Next</h1>
                                    <div className="h-7 w-7 rounded-full bg-white flex flex-nowrap items-center justify-center">
                                        <IoIosArrowForward className="text-md" />
                                    </div>
                                </button>
                            </div>
                            <button className=" font-medium tracking-wide px-3 py-2 rounded-full bg-indigo-600 transition-all duration-300 ease-in-out flex flex-nowrap items-center gap-2">
                                <h1 className="px-3 text-white  capitalize font-medium tracking-wider text-[12px]">Finish</h1>
                            </button>
                        </div>
                    </section>



                    {/* CONTENT - 2 */}
                    <section className="lg:col-span-1 py-5 px-2">
                        <div className="hidden lg:inline-block w-full">
                            <Timer data={data} />
                        </div>
                        <Tracking data={data} />
                    </section>
                </div>
            </div>
        )
    }
    return null;
}

export default MockDriveOnlineTest;














