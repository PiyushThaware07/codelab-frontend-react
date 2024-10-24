import React, { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useMockDriveOnlineTestStartHook from "../hooks/useMockDriveOnlineTestStartHook";
import { useAppDispatch } from "../../../store/store";
import { DataType, QuestionType } from "../types/mockDriveOnlineTestStartType";
import { fetchMockDriveOnlineTestSubmit, handleNavigate, handleOptionSelect, updateProgress } from "../reducers/mockDriveOnlineTestStartSlice";
import Loader from "../../../components/loader/Loader";
import { useParams } from "react-router-dom";


const MockDriveOnlineTestStart: React.FC = () => {
    const dispatch = useAppDispatch();
    const { data, loading } = useMockDriveOnlineTestStartHook();
    const currentIndex: number = data?.currentIndex || 0;
    const currentQuestions: QuestionType[] = data?.currentQuestions?.questions || [];
    const currentQuestion: QuestionType = currentQuestions[currentIndex || 0];
    const optionKeys: Array<'option_1' | 'option_2' | 'option_3' | 'option_4'> = ['option_1', 'option_2', 'option_3', 'option_4'];
    const selectedOption = data?.selectedOptions?.find(
        (option) => option.questionId === currentQuestion?.id
    )?.optionSelected;


    function selectIndex(index: number) {
        dispatch(handleNavigate(index));
    }

    function handleSelectOption(optionSelected: string, questionId: string) {
        dispatch(handleOptionSelect({ optionSelected, questionId }));
    }


    const { quizId, attemptNumber } = useParams()
    function handleSubmit() {
        if (quizId && attemptNumber) {
            dispatch(fetchMockDriveOnlineTestSubmit({ quizId, attemptNumber }));
        }
    }

    
    if (loading) return <Loader />;
    if (data) {
        return (
            <div className="mock-drive-online-test max-w-7xl mx-auto md:h-[calc(100vh-50px)] p-5">
                <div className="h-full w-full bg-white rounded-2xl border shadow-sm flex p-6 select-none">
                    {/* content */}
                    <main className="w-full h-full flex flex-nowrap flex-col justify-between overflow-y-auto">
                        <div className="md:hidden">
                            <Timer data={data} />
                        </div>
                        <section className="py-10 md:px-10 md:mr-10">
                            <h2 className="text-[12px] font-medium tracking-wide text-gray-600/70">{currentQuestion?.topic || ""}</h2>
                            <h2 className="text-[13px] tracking-wide font-medium">Question - {currentQuestion?.sub_title || ""}</h2>
                            <p className="my-5 text-[12.5px] tracking-wide text-justify text-slate-600/70">{currentQuestion?.sub_title || ""}</p>

                            {/* Options */}
                            <div className="">
                                <ul className="flex flex-col gap-2">
                                    {
                                        optionKeys.map((optionKey, index) => (
                                            <li key={index}>
                                                <label htmlFor={`option-${index}`} className="inline-flex flex-nowrap items-center gap-3 cursor-pointer bg-white p-1">
                                                    <input
                                                        type="radio"
                                                        name="options"
                                                        id={`option-${index}`}
                                                        value={currentQuestion?.[optionKey] || ""}
                                                        checked={selectedOption === currentQuestion?.[optionKey]}
                                                        className="h-4 w-4 border-[2px] border-gray-300 appearance-none checked:bg-gray-900 checked:border-transparent square-radio"
                                                        onChange={() => handleSelectOption(currentQuestion?.[optionKey] || "", currentQuestion?.id || "")}
                                                    />
                                                    <p className="text-[13px] font-medium tracking-wide text-gray-900">{currentQuestion?.[optionKey] || ""}</p>
                                                </label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </section>
                        <section className="md:px-10 md:mr-10 flex flex-nowrap items-center justify-between gap-5">
                            <div className="flex flex-nowrap items-center gap-3">
                                <Button
                                    type="button"
                                    className={`h-10 w-10 rounded-full border flex flex-nowrap items-center justify-center  ${currentIndex === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-50 border-gray-900 border-2 cursor-pointer hover:bg-gray-200"}`}
                                    onClick={() => selectIndex(currentIndex - 1)}
                                    disabled={currentIndex === 0} >
                                    <IoIosArrowBack className={`text-xl ${currentIndex === 0 ? "text-gray-300" : "text-gray-900"}`} />
                                </Button>

                                <Button
                                    type="button"
                                    className={`h-10 w-10 rounded-full border flex flex-nowrap items-center justify-center ${currentIndex === currentQuestions.length - 1 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-50 border-gray-900 border-2 cursor-pointer hover:bg-gray-200"}`}
                                    onClick={() => selectIndex(currentIndex + 1)}
                                    disabled={currentIndex === currentQuestions.length - 1} >
                                    <IoIosArrowForward className={`text-xl ${currentIndex === currentQuestions.length - 1 ? "text-gray-300" : "text-gray-900"}`} />
                                </Button>

                            </div>
                            <Button
                                type="button"
                                onClick={handleSubmit}
                                className="h-10 w-[100px] rounded-full bg-gray-900  flex flex-nowrap items-center justify-center">
                                <h1 className="text-[13px] font-semibold tracking-wide text-white">Finish</h1>
                            </Button>
                        </section>
                    </main>

                    {/* aisde */}
                    <aside className="w-[500px] rounded-xl h-full hidden md:flex flex-col gap-5">
                        <Timer data={data} />
                        <Tracker data={{ currentIndex, currentQuestions }} />
                    </aside>
                </div>
            </div>
        )
    }
    return null;
}

export default MockDriveOnlineTestStart;






type TimerProps = {
    data: DataType;
}

const Timer: React.FC<TimerProps> = ({ data }) => {
    const timing = data?.currentQuestions?.quiz?.durations || 0;
    const progress = data?.selectedOptions || [];
    const dispatch = useAppDispatch();
    const { quizId, attemptNumber } = useParams();
    const [remainingTime, setRemainingTime] = useState(timing * 60);
    useEffect(() => {
        const timerInterval = setInterval(() => {
            setRemainingTime((prevTime) => {
                console.log("out");
                if (prevTime <= 1) {
                    clearInterval(timerInterval);
                    saveProgress();
                    alert("Time's up!");
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [dispatch]);


    // Function to save progress
    const saveProgress = () => {
        if (quizId && attemptNumber) {
            dispatch(updateProgress({ quizId, attemptNumber, progress }));
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            saveProgress();
        }, 60 * 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [dispatch, quizId, attemptNumber, progress]);

    return (
        <section className="timer w-full bg-slate-100 rounded-full px-5 py-2 text-center font-medium text-gray-900 tracking-wide flex flex-nowrap items-center justify-between gap-2 select-none">
            <span className="text-xs text-gray-600/70 capitalize">time remaining</span>
            <div className="flex flex-nowrap items-center gap-2">
                <h1 className="text-[15px] ">
                    {Math.floor(remainingTime / 60)} : {(remainingTime % 60).toString().padStart(2, '0')}
                </h1>
            </div>
        </section>
    )
}





interface TrackerProps {
    data: {
        currentIndex: number;
        currentQuestions: QuestionType[];
    };
}
const Tracker: React.FC<TrackerProps> = ({ data }) => {
    const dispatch = useAppDispatch();
    const currentIndex: number = data?.currentIndex || 0;
    const currentQuestions: QuestionType[] = data?.currentQuestions || [];

    function selectIndex(index: number) {
        dispatch(handleNavigate(index));
    }
    return (
        <section className="tracker flex flex-wrap items-center justify-center gap-2">
            {new Array(currentQuestions.length || 0).fill(null).map((_, index) => (
                <Button key={index}
                    type="button"
                    onClick={() => selectIndex(index)}
                    className={`h-9 w-9 border hover:border-0 rounded-md 
                     ${currentIndex === index ? "text-white bg-gray-900" : "bg-white hover:bg-slate-200/50 text-slate-500 hover:text-slate-800"}  cursor-pointer  inline-flex flex-nowrap items-center justify-center text-[11.5px] font-medium tracking-widest select-none  hover:scale-110 transition-all duration-300`}>
                    {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                </Button>
            ))}
        </section>
    )
}