import { useState } from "react";
import { useAppDispatch } from "../../../store/store";
import { SigninType } from "../types/signinType";
import { fetchSignin } from "../reducers/signinSlice";


const useSigninHook = () => {
    const dispatch = useAppDispatch();


    const initialFormData: SigninType = {
        email: "",
        password: ""
    };


    // Define the form state
    const [formData, setFormData] = useState<SigninType>(initialFormData);

    // Handle input changes
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await dispatch(fetchSignin(formData));
    };

    // Return the form data and handlers
    return {
        formData,
        handleChange,
        handleSubmit,
    };
};

export default useSigninHook;
