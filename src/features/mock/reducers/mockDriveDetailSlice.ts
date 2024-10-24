import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "../types/mockDriveDetailType";
import axiosInstance from "../../../api/axiosInstance";
import { AxiosError } from "axios";


const initialState: InitialStateType = {
    status: "idle",
    loading: false,
    error: null,
    data: null,
}

export const fetchMockDriveDetail = createAsyncThunk("mock/fetchMockDriveDetail",
    async (mockId: string, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/mock-drive/${mockId}`;
            const response = await axiosInstance.get(url);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
)


const mockDriveDetail = createSlice({
    name: "mock-drive/detail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMockDriveDetail.pending, (state) => {
            state.loading = true;
            state.status = "loading";
            state.data = null;
            state.error = null;
        })
        builder.addCase(fetchMockDriveDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            state.status = "success";
        })
        builder.addCase(fetchMockDriveDetail.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload as string | null;
            state.status = "failed";
        })
    }
})


export default mockDriveDetail.reducer;