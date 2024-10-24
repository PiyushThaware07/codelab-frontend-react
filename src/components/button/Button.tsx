import React from "react";

interface IButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
    onClick,
    children,
    className,
    type = "button",
    disabled = false,
}) => {
    return (
        <button onClick={onClick} className={className} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
