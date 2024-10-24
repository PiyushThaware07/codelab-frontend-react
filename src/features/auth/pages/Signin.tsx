import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/input/Input";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import useSigninHook from "../hooks/useSigninHook";
import { showToast } from "../../../components/toast/reducer/toastSlice";
import { useEffect } from "react";
import Button from './../../../components/button/Button';
import { RiLoader5Line } from "react-icons/ri";


const Signin: React.FC = () => {
    const dispatch = useAppDispatch();
    const { handleChange, handleSubmit, formData } = useSigninHook();
    const { data, error, loading } = useAppSelector((state) => state.auth.signin);
    const navigate = useNavigate();

    useEffect(() => {
        if (error) dispatch(showToast({ message: error, type: 'error' }));
        if (data) {
            dispatch(showToast({ message: "Signin Successfully!", type: "success" }));
            navigate('/');
        }
    }, [dispatch, error, data]);
    return (
        <div className="auth-signin">
            <div className="h-screen max-w-7xl mx-auto flex flex-nowrap items-center justify-center p-5 ">
                <form className="w-full sm:w-[500px] md:w-[450px] bg-white border p-4 md:p-7 rounded-xl" onSubmit={handleSubmit}>
                    <div className="flex flex-nowrap items-center justify-center gap-2 text-gray-700">
                        <h1 className="text-[16px] font-medium capitalize text-center">Sign in</h1>
                    </div>
                    <div className="flex flex-col gap-4 mt-6">
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="focus:outline-none text-xs font-medium border-[1.4px] border-gray-200 w-full p-3 tracking-wide" />
                        <Input type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange} className="focus:outline-none text-xs font-medium border-[1.4px] border-gray-200 w-full p-3 tracking-wide" />
                        <Link to={"/auth/forget-password"} className="text-[12px] text-gray-400 font-medium tracking-wide text-end -mt-3 hover:text-red-600">Lost Password</Link>
                        <Button type="submit" className={` ${loading ? "cursor-not-allowed bg-gray-900/50" : "bg-gray-900 hover:bg-gray-950"} flex flex-nowrap items-center justify-center h-10 w-full  text-xs font-semibold tracking-wide text-white capitalize`}>
                            {loading ? <RiLoader5Line className="text-xl animate-spin" /> : "Sign in"}
                        </Button>
                    </div>
                    <div className="flex flex-nowrap items-center gap-3 justify-center mt-6">
                        <h1 className="text-xs font-medium text-gray-400">Don't have an account ? </h1>
                        <Link to="/auth/signup" className="text-xs font-medium text-red-600">Signup here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin;