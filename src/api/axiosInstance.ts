import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 10000,
});


axiosInstance.interceptors.request.use(
    (config) => {
        const localStorageBuffer = localStorage.getItem("codelab") || "{}";
        let localStorageData;
        try {
            localStorageData = JSON.parse(localStorageBuffer);
        } catch (error) {
            localStorageData = {};
        }
        const token = localStorageData?.token || "";
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



// Optional: Add request and response interceptors
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        let errorMessage;
        if (error.response) {
            // Server responded with a status code that falls out of the range of 2xx
            const temp = error.response.data.errors
            if (Array.isArray(temp)) {
                errorMessage = temp[0] || "Something went wrong";
            }
            else {
                errorMessage = error.response.data.errors || error.response.statusText || 'Something went wrong';
            }
        } else if (error.request) {
            console.log("error-2");
            // The request was made but no response was received
            errorMessage = 'No Response , Server Down !';
        } else {
            console.log("error-3");
            // Something happened in setting up the request that triggered an Error
            errorMessage = error.message || 'An unknown error occurred';
        }
        return Promise.reject(new Error(errorMessage));
    }
);

export default axiosInstance;