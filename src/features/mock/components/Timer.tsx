import { memo, useEffect, useState } from "react";
import { DataType, QuizType } from "../types/MockDriveOnlineTest";



const Timer: React.FC<{ data: DataType }> = ({ data }) => {
    const mapData: DataType = data;
    const currentQuiz: QuizType = mapData?.currentQuestions?.quiz;



    const initialDuration = currentQuiz?.durations * 60;
    const [remainingTime, setRemainingTime] = useState(initialDuration);
    useEffect(() => {
        setRemainingTime(initialDuration);

        const timerInterval = setInterval(() => {
            setRemainingTime(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(timerInterval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [initialDuration]);




    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
    return (
        <div className="timer bg-gray-100 rounded-md max-w-[260px] mx-auto h-10 mb-6 flex flex-nowrap items-center justify-between px-3">
            <h2 className="text-[12px] font-medium tracking-wide text-gray-600/70">Time Remaining</h2>
            <h1 className="flex flex-nowrap items-center gap-2 text-sm font-semibold text-gray-600">
                {formatTime(remainingTime)}
            </h1>
        </div>
    );
};

export default memo(Timer);