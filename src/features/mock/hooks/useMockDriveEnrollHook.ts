import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useCallback, useEffect } from "react";
import { fetchMockDriveEnroll } from "../reducers/mockDriveEnrollSlice";
import { showToast } from "../../../components/toast/reducer/toastSlice";
import { fetchMockDriveEnrollment } from "../reducers/mockDriveEnrollmentSlice";


const useMockDriveEnrollHook = () => {
    const { mockId } = useParams();
    const dispatch = useAppDispatch();

    const { data, error, loading, status } = useAppSelector((state) => state.mock.mockDriveEnroll);
    const enroll = useCallback(async () => {
        if (!mockId) return;
        await dispatch(fetchMockDriveEnroll(mockId));
        await dispatch(fetchMockDriveEnrollment(mockId));
    }, [mockId, dispatch]);

    useEffect(() => {
        if (!data && !error) return;
        const toastMessage: any = data
            ? { message: data, type: "success" }
            : { message: error, type: "error" };

        dispatch(showToast(toastMessage));
    }, [dispatch, error, data]);

    return { data, status, error, loading, enroll };
};

export default useMockDriveEnrollHook;
