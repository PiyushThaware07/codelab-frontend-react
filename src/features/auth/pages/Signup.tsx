import { RiUserSmileLine } from "react-icons/ri";
import { RiLoader5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useSignupHook from "../hooks/useSignupHook";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { showToast } from "../../../components/toast/reducer/toastSlice";
import { useEffect } from "react";
import { fetchGoogleAuth } from "./GoogleAuthCallback";

const Signup: React.FC = () => {
    const dispatch = useAppDispatch();
    const { handleChange, handleSubmit, formData } = useSignupHook();
    const { data, error, loading } = useAppSelector((state: any) => state.auth.signup);


    function googleAuth() {
        dispatch(fetchGoogleAuth());
    }


    useEffect(() => {
        if (error) dispatch(showToast({ message: error, type: 'error' }));
        if (data) dispatch(showToast({ message: "Signup Successfully!", type: "success" }));
    }, [dispatch, error, data]);
    return (
        <div className="auth-signup">
            <button className="text-red-600" onClick={googleAuth}>google auth</button>
            <div className="h-screen max-w-7xl mx-auto flex flex-nowrap items-center justify-center p-5">
                <form onSubmit={handleSubmit} className="w-full sm:w-[500px] md:w-[470px] bg-white p-4 md:p-7 rounded-xl">
                    <div className="flex flex-nowrap items-center justify-center gap-2 text-gray-700">
                        <h1 className="text-[16px] font-medium capitalize text-center">Registration Form</h1>
                        <RiUserSmileLine className="text-xl text-red-600" />
                    </div>
                    <div className="flex flex-col gap-4 mt-6">
                        <Input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="focus:outline-none text-xs font-medium border-[1.4px] border-gray-200 w-full p-4 tracking-wide" />
                        <Input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="focus:outline-none text-xs font-medium border-[1.4px] border-gray-200 w-full p-4 tracking-wide" />
                        <Input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="focus:outline-none text-xs font-medium border-[1.4px] border-gray-200 w-full p-4 tracking-wide" />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="focus:outline-none text-xs font-medium border-[1.4px] border-gray-200 w-full p-4 tracking-wide" />
                        <Input type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange} className="focus:outline-none text-xs font-medium border-[1.4px] border-gray-200 w-full p-3 tracking-wide" />
                        <Button type="submit" className={` ${loading ? "cursor-not-allowed bg-gray-900/50" : "bg-gray-900 hover:bg-gray-950"} flex flex-nowrap items-center justify-center h-10 w-full  text-xs font-semibold tracking-wide text-white capitalize`}>
                            {loading ? <RiLoader5Line className="text-xl animate-spin" /> : "Sign up"}
                        </Button>
                    </div>
                    <div className="flex flex-nowrap items-center gap-3 justify-center mt-6">
                        <h1 className="text-xs font-medium text-gray-400">Already have an account ? </h1>
                        <Link to="/auth/signin" className="text-xs font-medium text-red-600">Signin here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;