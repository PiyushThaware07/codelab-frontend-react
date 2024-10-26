import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axiosInstance";
import { AxiosError } from "axios";

type InitialStateType = {
    status: "idle" | "loading" | "success" | "failed";
    loading: boolean;
    error: string | null;
    data: any;
};

const initialState: InitialStateType = {
    status: "idle",
    loading: false,
    error: null,
    data: null,
};

// GET ENROLLMENT
export const getEnrollment = createAsyncThunk(
    "mock-drive/getEnrollment",
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
);



export const postEnrollment = createAsyncThunk(
    "mock-drive/postEnrollment",
    async ({ mockId, payload }: { mockId: string, payload: any }, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/mock-drive/${mockId}/enrollment`;
            payload.enrollment_date = new Date();
            payload.expiration_date = new Date();
            const response = await axiosInstance.post(url, payload);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
)



const MockDriveEnrollmentSlice = createSlice({
    name: "mock-drive/enrollment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // ! GET ENROLLMENT
        builder.addCase(getEnrollment.pending, (state) => {
            state.status = "loading";
            state.loading = true;
            state.data = null;
            state.error = null;
        });
        builder.addCase(getEnrollment.fulfilled, (state, action) => {
            state.status = "success";
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        });
        builder.addCase(getEnrollment.rejected, (state, action) => {
            state.status = "failed";
            state.loading = false;
            state.data = null;
            state.error = action.payload as string;
        });


        // ! POST ENROLLMENT
        builder.addCase(postEnrollment.pending, (state) => {
            state.status = "loading";
            state.loading = false;
            state.data = null;
            state.error = null;
        })
        builder.addCase(postEnrollment.fulfilled, (state, action) => {
            state.status = "success";
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        })
        builder.addCase(postEnrollment.rejected, (state, action) => {
            state.status = "failed";
            state.data = null;
            state.loading = false;
            state.error = action.payload as string;
        })
    },
});


export default MockDriveEnrollmentSlice.reducer;
