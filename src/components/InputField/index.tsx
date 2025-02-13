import React, { InputHTMLAttributes } from "react"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputField: React.FC<InputFieldProps> = ({ className, ...props }) => {
    return (
        <input
            {...props}
            className={`w-full h-10.5 p-3 rounded-s border-1 border-[#E6E5E5] gap-1 bg-[#EDEDED] ${className}`}
        />
    )
}

export default InputField
