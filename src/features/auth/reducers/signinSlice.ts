import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import axiosInstance from "../../../api/axiosInstance";
import { InitialStateType, SigninType } from "../types/signinType";




const initialState: InitialStateType = {
    status: "idle",
    data: null,
    error: null,
    loading: false,
}


// API CALL
export const fetchSignin = createAsyncThunk<string, SigninType>(
    'auth/fetchSignin',
    async (formData, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/auth/signin`;
            const response = await axiosInstance.post(url, formData);
            if (response.data.message) localStorage.setItem("codelab", JSON.stringify({ token: response.data.message }));
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
);




const authSlice = createSlice({
    name: "auth/signin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSignin.pending, (state) => {
                state.loading = true;
                state.status = "loading";
            })
            .addCase(fetchSignin.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
                state.status = "succces";
            })
            .addCase(fetchSignin.rejected, (state, action) => {
                state.loading = false;
                state.data = null;
                state.error = action.payload as string | null;
                state.status = "failed";
            });
    }
})

export default authSlice.reducer;