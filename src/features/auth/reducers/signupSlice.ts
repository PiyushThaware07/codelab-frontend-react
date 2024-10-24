import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType, SignupType } from "../types/signupType";
import axiosInstance from "../../../api/axiosInstance";
import { AxiosError } from "axios";

const initialState: InitialStateType = {
    status: "idle",
    loading: false,
    data: null,
    error: null,
};


// API CALL
export const fetchSignup = createAsyncThunk<string, SignupType>(
    'auth/fetchSignup',
    async (formData, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/auth/signup`;
            const response = await axiosInstance.post(url, formData);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
);


const signupSlice = createSlice({
    name: "auth/signup",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSignup.pending, (state) => {
                state.status = "loading";
                state.loading = true;
                state.data = null;
                state.error = null
            })
            .addCase(fetchSignup.fulfilled, (state, action) => {
                state.status = "succces";
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchSignup.rejected, (state, action) => {
                state.status = "failed";
                state.loading = false;
                state.data = null;
                state.error = action.payload as string | null;
            });
    }
});

export default signupSlice.reducer;
