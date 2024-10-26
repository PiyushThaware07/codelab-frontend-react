import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../../api/axiosInstance";
import { AxiosError } from "axios";
import { InitialStateType } from "../types/MockDriveDetailType";

const initialState: InitialStateType = {
    status: "idle",
    loading: false,
    error: null,
    data: null,
}

// API
export const fetchMockDriveDetail = createAsyncThunk(
    "mock-drive/fetchMockDriveDetail",
    async ( mockId:string , { rejectWithValue }) => {
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


const MockDriveDetailSlice = createSlice({
    name: "mock-drive/detail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMockDriveDetail.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.data = null;
            state.status = "idle";
        })
        builder.addCase(fetchMockDriveDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
            state.status = "success";
        })
        builder.addCase(fetchMockDriveDetail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            state.data = null;
            state.status = "failed";
        })
    }
})

export default MockDriveDetailSlice.reducer;