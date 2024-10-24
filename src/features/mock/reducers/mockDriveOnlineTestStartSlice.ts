import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "../types/mockDriveOnlineTestStartType"; // Ensure this import path is correct
import { AxiosError } from "axios";
import axiosInstance from "../../../api/axiosInstance";

const initialState: InitialStateType = {
    status: "idle",
    loading: false,
    error: null,
    data: {
        currentIndex: 0,
        currentQuestions: null,
        selectedOptions: [],
        progress: null,
    },
};

export const fetchMockDriveOnlineTestStart = createAsyncThunk(
    "mock/fetchMockDriveOnlineTestStart",
    async ({ quizId, attemptNumber }: { quizId: string; attemptNumber: string }, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/quiz/${quizId}/attempt/${attemptNumber}/questions`;
            const response = await axiosInstance.get(url);
            return response.data.message || [];
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
);

export const updateProgress = createAsyncThunk(
    "mock/updateProgress",
    async ({ quizId, attemptNumber, progress }: { quizId: string; attemptNumber: string; progress: any }, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/quiz/${quizId}/attempt/${attemptNumber}/result/add`;
            const response = await axiosInstance.post(url, progress);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
);


export const fetchMockDriveOnlineTestProgress = createAsyncThunk(
    "mock/fetchMockDriveOnlineTestProgress",
    async ({ quizId, attemptNumber }: { quizId: string; attemptNumber: string }, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/quiz/${quizId}/attempt/${attemptNumber}/progress`;
            const response = await axiosInstance.get(url);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
)


export const fetchMockDriveOnlineTestSubmit = createAsyncThunk(
    "mock/fetchMockDriveOnlineTestSubmit",
    async ({ quizId, attemptNumber }: { quizId: string; attemptNumber: string }, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/quiz/${quizId}/attempt/${attemptNumber}/report/add`;
            const response = await axiosInstance.post(url);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
)



const mockDriveOnlineTestStartSlice = createSlice({
    name: "mock/online-test-start",
    initialState,
    reducers: {
        handleNavigate: (state, action) => {
            state.data.currentIndex = action.payload;
        },
        handleOptionSelect: (state, action) => {
            const { optionSelected, questionId } = action.payload;
            const existingSelection = state.data.selectedOptions.find(
                (selection) => selection.questionId === questionId
            );
            if (existingSelection) {
                existingSelection.optionSelected = optionSelected;
            } else {
                state.data.selectedOptions.push({ optionSelected, questionId });
            }
            console.log(state.data.selectedOptions);
        },
        updateProgressState: (state, action) => {
            state.data.progress = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMockDriveOnlineTestStart.pending, (state) => {
                state.loading = true;
                state.status = "loading";
                state.error = null;
            })
        builder.addCase(fetchMockDriveOnlineTestStart.fulfilled, (state, action) => {
            state.loading = false;
            state.status = "success";
            state.data.currentQuestions = action.payload || null;
            state.data.currentIndex = 0;
            state.error = null;
        })
        builder.addCase(fetchMockDriveOnlineTestStart.rejected, (state, action) => {
            state.loading = false;
            state.status = "failed";
            state.error = action.payload as string;
        });

        // progress
        builder.addCase(updateProgress.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(updateProgress.fulfilled, (state, action) => {
            state.status = "success";
            state.error = null;
            state.data.progress = action.payload;
        });
        builder.addCase(updateProgress.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload as string;
        });

        // fetch progress
        builder.addCase(fetchMockDriveOnlineTestProgress.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(fetchMockDriveOnlineTestProgress.fulfilled, (state, action) => {
            state.status = "success";
            state.error = null;
            state.data.selectedOptions = action.payload;
        });
        builder.addCase(fetchMockDriveOnlineTestProgress.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload as string;
        });

        // fetch submit
        builder.addCase(fetchMockDriveOnlineTestSubmit.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(fetchMockDriveOnlineTestSubmit.fulfilled, (state, action) => {
            state.status = "success";
            state.error = null;
            state.data.submit = action.payload;
        });
        builder.addCase(fetchMockDriveOnlineTestSubmit.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload as string;
        });
    }
});

export const { handleNavigate, handleOptionSelect, updateProgressState } = mockDriveOnlineTestStartSlice.actions;
export default mockDriveOnlineTestStartSlice.reducer;
