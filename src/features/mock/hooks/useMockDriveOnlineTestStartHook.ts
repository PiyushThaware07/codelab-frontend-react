import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { fetchMockDriveOnlineTestProgress, fetchMockDriveOnlineTestStart } from "../reducers/mockDriveOnlineTestStartSlice";
import { useParams } from "react-router-dom";

const useMockDriveOnlineTestStartHook = () => {
    const { quizId, attemptNumber } = useParams<{ quizId?: string; attemptNumber?: string }>();
    const dispatch = useAppDispatch();

    // Select state from the Redux store
    const { loading, data, error, status } = useAppSelector((state) => state.mock.mockDriveStart);

    useEffect(() => {
        if (status === "idle" && quizId && attemptNumber) {
            dispatch(fetchMockDriveOnlineTestStart({ quizId, attemptNumber }));
            dispatch(fetchMockDriveOnlineTestProgress({ quizId, attemptNumber }));
        }
    }, [dispatch, quizId, attemptNumber, status]);

    return { loading, data, error, status };
};

export default useMockDriveOnlineTestStartHook;
