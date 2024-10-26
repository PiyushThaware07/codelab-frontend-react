import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { fetchMockDriveList } from "../reducer/MockDriveListReducer";
import { showToast } from "../../../components/toast/reducer/toastSlice";

const useMockDriveListHook = () => {
    const dispatch = useAppDispatch();
    const { data, loading, status, error } = useAppSelector((state) => state.mock.mockList);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchMockDriveList());
        }
    }, [dispatch, status])

    useEffect(() => {
        if (error) dispatch(showToast({ message: error, type: "error" }));
    }, [dispatch, error]);

    return { data, loading, error, status };
}

export default useMockDriveListHook;