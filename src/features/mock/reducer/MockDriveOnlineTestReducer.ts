import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType, SelectOptionType } from "../types/MockDriveOnlineTest";
import axiosInstance from "../../../api/axiosInstance";
import { AxiosError } from "axios";

const initialState: InitialStateType = {
    status: "idle",
    loading: false,
    error: null,
    data: {
        currentIndex: 0,
        currentQuestions: {
            questions: [],
            quiz: null,
        },
        currentTiming: 0,
        selectedOptions: [],
    },
};

// FETCH QUESTIONS
export const fetchMockDriveOnlineTest = createAsyncThunk(
    "mock-drive/fetchMockDriveOnlineTest",
    async ({ quizId, attemptNumber }: { quizId: string; attemptNumber: string }, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/quiz/${quizId}/attempt/${attemptNumber}/questions`;
            const response = await axiosInstance.get(url);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.response?.data?.message || "Something went wrong"; // More specific error handling
            return rejectWithValue(errorMessage);
        }
    }
);

// FETCH PROGRESS DATA
export const fetchGetMockDriveOnlineTestProgress = createAsyncThunk(
    "mock-drive/fetchGetMockDriveOnlineTestProgress",
    async ({ quizId, attemptNumber }: { quizId: string; attemptNumber: string }, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/quiz/${quizId}/attempt/${attemptNumber}/result`;
            const response = await axiosInstance.get(url);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.response?.data?.message || "Something went wrong"; // More specific error handling
            return rejectWithValue(errorMessage);
        }
    }
);

const MockDriveOnlineTestSlice = createSlice({
    name: "mock-drive/online-test",
    initialState,
    reducers: {
        handleNavigate: (state, action) => {
            const newIndex = action.payload;
            if (newIndex >= 0 && newIndex < state.data.currentQuestions.questions.length) {
                state.data.currentIndex = newIndex;
            }
        },
        updateSelectOption: (state, action) => {
            const { questionId, selectedOption } = action.payload;
            const existingOptionIndex = state.data.selectedOptions.findIndex((option: SelectOptionType) => option.questionId === questionId);
            if (existingOptionIndex >= 0) {
                state.data.selectedOptions[existingOptionIndex].selectedOption = selectedOption;
            } else {
                state.data.selectedOptions.push({ questionId, selectedOption });
            }
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle fetching questions
            .addCase(fetchMockDriveOnlineTest.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.data = initialState.data;
                state.status = "idle";
            })
            .addCase(fetchMockDriveOnlineTest.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = {
                    currentIndex: 0,
                    currentQuestions: action.payload,
                    currentTiming: 0,
                    selectedOptions: [],
                };
                state.status = "success";
            })
            .addCase(fetchMockDriveOnlineTest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.data = initialState.data;
                state.status = "failed";
            })

            // Handle fetching progress
            .addCase(fetchGetMockDriveOnlineTestProgress.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.status = "idle";
            })
            .addCase(fetchGetMockDriveOnlineTestProgress.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = {
                    ...state.data,
                    selectedOptions: action.payload || [],
                };
                state.status = "success";
            })
            .addCase(fetchGetMockDriveOnlineTestProgress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.status = "failed";
            });
    },
});

export default MockDriveOnlineTestSlice.reducer;
export const { handleNavigate, updateSelectOption } = MockDriveOnlineTestSlice.actions;
