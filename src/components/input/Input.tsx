import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    className?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    type = 'text',
    className,
    placeholder,
    onChange,
    ...rest
}) => {
    return (
        <input
            type={type}
            className={`border border-gray-300 rounded-md px-4 py-2 ${className}`}
            placeholder={placeholder}
            onChange={onChange}
            {...rest}
        />
    );
};

export default Input;
