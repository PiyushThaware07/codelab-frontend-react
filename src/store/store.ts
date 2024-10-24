import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "../features/auth/reducers";
import toastSlice from "../components/toast/reducer/toastSlice";
import mockReducer from "../features/mock/reducers";


const store = configureStore({
    reducer: {
        toast: toastSlice,
        auth: authReducer,
        mock: mockReducer,
    }
})




// Dispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Selector
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



export default store;