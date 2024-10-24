import { Link } from "react-router-dom";

const ForgetPassword: React.FC = () => {
    return (
        <div className="auth-forget">
            <div className="h-screen max-w-7xl mx-auto flex flex-nowrap items-center justify-center p-5">
                <form className="w-full sm:w-[500px] md:w-[500px] bg-white border p-4">
                    <div className="flex flex-nowrap items-center justify-center gap-2 text-gray-700">
                        <h1 className="text-[16px] font-medium capitalize text-center">Forget Password</h1>
                    </div>
                    <div className="flex flex-col gap-4 mt-6">
                        <input type="text" placeholder="Email Address" className="focus:outline-none text-xs font-medium border-[1.4px] border-gray-200 w-full p-3 tracking-wide" />
                        <button type="button" className="h-10 w-full bg-gray-900 hover:bg-gray-950 text-xs font-semibold tracking-wide text-white capitalize">Submit</button>
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

export default ForgetPassword;