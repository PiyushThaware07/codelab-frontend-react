import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useCallback, useEffect } from "react";
import { getEnrollment, postEnrollment } from "../reducer/MockDriveEnrollmentReducer";
import { showToast } from "../../../components/toast/reducer/toastSlice";

const useMockDriveEnrollmentHook = () => {
    const { mockId } = useParams<{ mockId: string }>();
    const dispatch = useAppDispatch();
    const { status, loading, data, error } = useAppSelector((state) => state.mock.mockEnrollment);


    // GET ENROLLMENT DETAILS
    useEffect(() => {
        if (mockId) {
            dispatch(getEnrollment(mockId));
        }
    }, [dispatch, mockId])


    // POST ENROLLMENT DETAILS
    const enrollDrive = useCallback(async () => {
        if (mockId) {
            await dispatch(postEnrollment({ mockId, payload: {} }))
            await dispatch(showToast({ message: "Enrollment Successful!", type: "success" }))
        }
    }, [dispatch])

    
    // HANDLE ERRORS
    useEffect(() => {
        if (error) dispatch(showToast({ message: error, type: "error" }));
    }, [dispatch, error])

    return { status, loading, data, error, enrollDrive };
}

export default useMockDriveEnrollmentHook;