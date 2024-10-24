import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToastState {
    message?: string;
    type: "success" | "error" | "warning" | "info";
    show: boolean;
    duration: number;
}

const initialState: ToastState = {
    message: undefined,
    type: "info",
    show: false,
    duration: 3000,
};

const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        showToast: (state, action: PayloadAction<{ message: string; type?: ToastState["type"]; duration?: number }>) => {
            // Clear the state first
            state.message = undefined;
            state.type = "info";
            state.show = false;
            state.duration = 3000;

            // Set the new values for the toast notification
            state.message = action.payload.message;
            state.type = action.payload.type || "info";
            state.duration = action.payload.duration || 3000;
            state.show = true;
        },
        hideToast: (state) => {
            state.message = undefined;
            state.type = "info";
            state.show = false;
            state.duration = 3000;
        },
    },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
