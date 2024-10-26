import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { fetchGetMockDriveOnlineTestProgress, fetchMockDriveOnlineTest } from "../reducer/MockDriveOnlineTestReducer";
import { showToast } from "../../../components/toast/reducer/toastSlice";

const useMockDriveOnlineTestHook = () => {
    const { quizId, attemptNumber } = useParams<{ quizId: string; attemptNumber: string }>();
    const dispatch = useAppDispatch();
    const { status, loading, data, error } = useAppSelector((state) => state.mock.mockOnlineTest);

    useEffect(() => {
        const fetchData = async () => {
            if (status === "idle" && quizId && attemptNumber) {
                await dispatch(fetchMockDriveOnlineTest({ quizId, attemptNumber }));
                await dispatch(fetchGetMockDriveOnlineTestProgress({ quizId, attemptNumber }));
            }
        };
        fetchData();
    }, [dispatch, quizId, attemptNumber])

    // HANDLE ERROR
    useEffect(() => {
        if (error) showToast({ message: error, type: "error" });
    }, [dispatch, error])

    return { status, loading, data, error }
};

export default useMockDriveOnlineTestHook;
