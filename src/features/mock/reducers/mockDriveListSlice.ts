import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "../types/mockDriveListType";
import axiosInstance from "../../../api/axiosInstance";
import { AxiosError } from "axios";


const initialState: InitialStateType = {
    status: "idle",
    data: null,
    error: null,
    loading: false,
}


export const fetchMockDriveList = createAsyncThunk("mock/fetchMockDriveList",
    async (_, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/mock-drive/all/sort-by/category`;
            const response = await axiosInstance.get(url);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }

    }
)


const mockDriveListSlice = createSlice({
    name: "mock-drive/list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMockDriveList.pending, (state) => {
            state.loading = true;
            state.status = "loading";
            state.data = null;
            state.error = null;
        })
        builder.addCase(fetchMockDriveList.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            state.status = "success";
        })
        builder.addCase(fetchMockDriveList.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload as string | null;
            state.status = "failed";
        })
    }
})

export default mockDriveListSlice.reducer;



