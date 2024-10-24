import React from "react";
import ReactDOM from "react-dom";

const Loader: React.FC = () => {
    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 z-50">
            <div className="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-gray-900" />
        </div>,
        document.getElementById("root")!
    );
}

export default Loader;
