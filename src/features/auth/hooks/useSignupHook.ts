import { useState } from "react";
import { SignupType } from '../types/signupType';
import { useAppDispatch } from "../../../store/store";
import { fetchSignup } from "../reducers/signupSlice";


const useSignupHook = () => {
    const dispatch = useAppDispatch();

    const initialFormData: SignupType = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone: "",
    };

    // Define the form state
    const [formData, setFormData] = useState<SignupType>(initialFormData);

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
        const result = await dispatch(fetchSignup(formData));
        if (fetchSignup.fulfilled.match(result)) setFormData(initialFormData);
    };

    // Return the form data and handlers
    return {
        formData,
        handleChange,
        handleSubmit,
    };
};

export default useSignupHook;
