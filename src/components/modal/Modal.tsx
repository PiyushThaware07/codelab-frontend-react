import React from "react";
import ReactDOM from "react-dom";

interface IModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ isOpen = false, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className="modal h-screen w-full bg-black/40 fixed top-0 left-0 flex items-center justify-center"
            onClick={onClose}>
            <div
                className="modal-form bg-white rounded-xl p-3 max-w-lg mx-auto"
                onClick={(e) => e.stopPropagation()}>
                {children}
                {onClose && (
                    <button
                        className="close-button mt-3 p-2 bg-red-500 text-white rounded"
                        onClick={onClose}>
                        Close
                    </button>
                )}
            </div>
        </div>,
        document.getElementById("root") as HTMLElement
    );
};

export default Modal;
