import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/store';
import { showToast } from '../../../components/toast/reducer/toastSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';



export const fetchGoogleAuth = createAsyncThunk(
    "auth/fetchGoogleAuth",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/auth/google`;
            window.location.href = url;
            return Promise.resolve();
        }
        catch (error) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = axiosError?.message || "Something went wrong";
            dispatch(showToast({ message: errorMessage, type: "error" }));
            return rejectWithValue(errorMessage);
        }
    }
);


const GoogleAuthCallback: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        // Get token from the URL (assuming it's passed as a query parameter)
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const token = urlParams.get('token');

        if (token) {
            // Store the token in localStorage
            const codelab = { token };
            localStorage.setItem('codelab', JSON.stringify(codelab));
            dispatch(showToast({ message: "Signin Successfully!", type: "success" }));
            navigate('/');
        } else {
            // If no token is found, navigate to sign-in page
            navigate('/auth/signin');
        }
    }, [navigate]);

    return (
        <div>
            <h1>Processing authentication...</h1>
        </div>
    );
};

export default GoogleAuthCallback;
