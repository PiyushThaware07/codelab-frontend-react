import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { InitialStateType, SelectOptionType } from "../types/MockDriveOnlineTest"
import axiosInstance from "../../../api/axiosInstance";
import { AxiosError } from "axios";

const initialState: InitialStateType = {
    status: "idle",
    loading: false,
    error: null,
    data: null,
}



export const fetchMockDriveSaveProgress = createAsyncThunk(
    "mock-drive/fetchMockDriveSaveProgress",
    async ({ quizId, attemptNumber, payload }: { quizId: string, attemptNumber: string, payload: SelectOptionType[] }, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/quiz/${quizId}/attempt/${attemptNumber}/result/add`;
            const response = await axiosInstance.post(url, payload);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
)



const MockDriveOnlineTestProgressSlice = createSlice({
    name: "mock-drive/save-progress",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // ! SAVING PROGRESS
        builder.addCase(fetchMockDriveSaveProgress.pending, (state) => {
            state.status = "loading",
                state.loading = true;
            state.error = null;
            state.data = null
        })
        builder.addCase(fetchMockDriveSaveProgress.fulfilled, (state) => {
            state.status = "success";
            state.loading = false;
            state.error = null;
        })
        builder.addCase(fetchMockDriveSaveProgress.rejected, (state, action) => {
            state.status = "failed";
            state.loading = false;
            state.data = null;
            state.error = action.payload as string;
        });
    }
})

export default MockDriveOnlineTestProgressSlice.reducer;