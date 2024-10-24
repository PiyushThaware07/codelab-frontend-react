import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Button from "../button/Button";
import { hideToast } from "./reducer/toastSlice";

const Toast: React.FC = () => {
    const dispatch = useAppDispatch();
    const { message, type, duration, show } = useAppSelector((state: any) => state.toast);


    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                dispatch(hideToast());
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [show, duration, dispatch]);

    const getToastStyles = () => {
        switch (type) {
            case "success":
                return "bg-green-100 border-green-300 border text-green-600";
            case "error":
                return "bg-red-50 text-red-600 border-red-300 border";
            default:
                return "bg-gray-100 border-gray-300 border text-gray-600";
        }
    };

    const handleClose = () => {
        dispatch(hideToast());
    };

    return ReactDOM.createPortal(
        <div
            className={`toast-container fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-nowrap items-center gap-4 rounded-md px-5 py-2 shadow-md ${getToastStyles()} transition-transform duration-300 ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-[13px] font-medium tracking-wide">{message}</h1>
            <Button type="button" onClick={handleClose}>
                <IoClose className="text-xl" />
            </Button>
        </div>,
        document.getElementById("root") as HTMLElement
    );
};

export default Toast;
