import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axiosInstance";
import { AxiosError } from "axios";
import { InitialStateType } from "../types/mockDriveEnrollmentType"


const initialState: InitialStateType = {
    status: "idle",
    loading: false,
    data: null,
    error: null
}


export const fetchMockDriveEnrollment = createAsyncThunk("mock/fetchMockDriveEnrollment",
    async (mockId: string, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/mock-drive/${mockId}/enrollment`;
            const response = await axiosInstance.get(url);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
)


const mockDriveEnrollmentSlice = createSlice({
    name: "mock-drive/enrollment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMockDriveEnrollment.pending, (state) => {
            state.loading = true;
            state.status = "loading";
            state.data = null;
            state.error = null;
        })
        builder.addCase(fetchMockDriveEnrollment.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            state.status = "success";
        })
        builder.addCase(fetchMockDriveEnrollment.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload as string | null;
            state.status = "failed";
        })
    }
})

export default mockDriveEnrollmentSlice.reducer;