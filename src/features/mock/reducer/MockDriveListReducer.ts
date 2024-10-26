import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../../api/axiosInstance";
import { AxiosError } from "axios";
import { InitialStateType } from "../types/MockDriveListType";



const initialState: InitialStateType = {
    status: "idle",
    loading: false,
    error: null,
    data: null,
}


// API
export const fetchMockDriveList = createAsyncThunk(
    "mock-drive/fetchMockDriveList",
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


const MockDriveListSlice = createSlice({
    name: "mock-drive/list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMockDriveList.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.data = null;
            state.status = "idle";
        })
        builder.addCase(fetchMockDriveList.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
            state.status = "success";
        })
        builder.addCase(fetchMockDriveList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            state.data = null;
            state.status = "failed";
        })
    }
})


export default MockDriveListSlice.reducer;