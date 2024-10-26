import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { fetchMockDriveDetail } from "../reducer/MockDriveDetailReducer";
import { showToast } from "../../../components/toast/reducer/toastSlice";

const useMockDriveDetailHook = () => {
    const dispatch = useAppDispatch();
    const { status, loading, data, error } = useAppSelector((state) => state.mock.mockDetail);
    const { mockId } = useParams<{ mockId: string }>();

    useEffect(() => {
        if (mockId) dispatch(fetchMockDriveDetail(mockId));
    }, [dispatch, mockId])

    useEffect(() => {
        if (error) dispatch(showToast({ message: error, type: "error" }));
    }, [dispatch, error]);

    return { data, error, loading, status };
}

export default useMockDriveDetailHook;