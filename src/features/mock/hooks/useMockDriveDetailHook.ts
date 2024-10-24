import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useParams } from "react-router-dom";
import { fetchMockDriveDetail } from "../reducers/mockDriveDetailSlice";
import { showToast } from "../../../components/toast/reducer/toastSlice";

const useMockDriveDetailHook = () => {
    const { mockId } = useParams();
    const dispatch = useAppDispatch();
    const { data, status, error, loading } = useAppSelector((state) => state.mock.mockDriveDetail);

    useEffect(() => {
        if (mockId) dispatch(fetchMockDriveDetail(mockId));
    }, [mockId, dispatch]);

    useEffect(() => {
        if (error) dispatch(showToast({ message: error, type: "error" }))
    }, [error, mockId])


    return { data, status, error, loading };
};

export default useMockDriveDetailHook;
