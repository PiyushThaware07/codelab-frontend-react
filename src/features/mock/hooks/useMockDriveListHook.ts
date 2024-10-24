import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { fetchMockDriveList } from "../reducers/mockDriveListSlice";
import { showToast } from "../../../components/toast/reducer/toastSlice";

const useMockDriveListHook = () => {
    const dispatch = useAppDispatch();
    const { data, status, loading, error } = useAppSelector((state) => state.mock.mockDriveList);
    // console.log(data)
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchMockDriveList());
        }
        else if (error) {
            dispatch(showToast({ message: error, type: "error" }))
        }
    }, [dispatch, status])
    return { data, status, loading, error }
}

export default useMockDriveListHook;