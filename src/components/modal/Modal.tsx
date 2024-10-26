import React from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import Button from "../button/Button";


interface IModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ isOpen = false, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className="modal h-screen w-full bg-black/40 fixed top-0 left-0 z-10 flex items-center justify-center p-2"
            onClick={onClose}>
            <div
                className="modal-form bg-white rounded-xl p-3 w-[500px] mx-auto"
                onClick={(e) => e.stopPropagation()}>
                <Button type="button" className="h-9 w-9 border-[1.5px] border-slate-300 hover:bg-gray-200 text-gray-600/70 hover:text-gray-700 transition-all duration-300 rounded-md p-2 flex flex-nowrap items-center justify-center ms-auto">
                    <IoClose className="text-3xl " />
                </Button>

                <div className="content">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById("root") as HTMLElement
    );
};

export default Modal;
