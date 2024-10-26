import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { InitialStateType } from "../types/MockDriveOnlineTest"
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
}





// FETCH QUESTIONS
export const fetchMockDriveOnlineTest = createAsyncThunk(
    "mock-drive/fetchMockDriveOnlineTest",
    async ({ quizId, attemptNumber }: { quizId: string, attemptNumber: string }, { rejectWithValue }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/quiz/${quizId}/attempt/${attemptNumber}/questions`;
            const response = await axiosInstance.get(url);
            return response.data.message || null;
        } catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
)




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
            const existingOptionIndex = state.data.selectedOptions.findIndex((option: any) => option.questionId === questionId);
            if (existingOptionIndex >= 0) {
                state.data.selectedOptions[existingOptionIndex].selectedOption = selectedOption;
            } else {
                state.data.selectedOptions.push({ questionId, selectedOption });
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMockDriveOnlineTest.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.data = null;
            state.status = "idle";
        })
        builder.addCase(fetchMockDriveOnlineTest.fulfilled, (state, action) => {
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
        builder.addCase(fetchMockDriveOnlineTest.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            state.data = null;
            state.status = "failed";
        })
    }
})

export default MockDriveOnlineTestSlice.reducer;
export const { handleNavigate, updateSelectOption } = MockDriveOnlineTestSlice.actions;