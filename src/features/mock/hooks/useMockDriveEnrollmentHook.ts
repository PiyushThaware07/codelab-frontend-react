import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {  useEffect } from "react";
import { showToast } from "../../../components/toast/reducer/toastSlice";
import { fetchMockDriveEnrollment } from "../reducers/mockDriveEnrollmentSlice";


const useMockDriveEnrollMentHook = () => {
    const { mockId } = useParams();
    const dispatch = useAppDispatch();

    const { data, error, loading, status } = useAppSelector((state) => state.mock.mockDriveEnrollment);

    useEffect(() => {
        if (mockId) dispatch(fetchMockDriveEnrollment(mockId));
    }, [dispatch, mockId]);

    useEffect(() => {
        if (!error) return;
        const toastMessage: any = { message: error, type: "error" };
        dispatch(showToast(toastMessage));
    }, [dispatch, error])

    return { data, status, error, loading };
};

export default useMockDriveEnrollMentHook;
