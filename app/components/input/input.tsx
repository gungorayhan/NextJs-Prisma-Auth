'use client'

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form"

type InputProps = {
    id: string;
    type: string;
    placeholder: string;
    required: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}
const Input: React.FC<InputProps> = ({
    id,
    type,
    placeholder,
    required,
    register,
    errors
}) => {
    return (
        <div className="mb-3">
            <input
                className={`${errors[id] ? "border border-red-500" : "border border-gray-500 "} p-2 rounded-md w-full h-12 text-lg`}
                {...register(id, { required })}
                type={type}
                placeholder={placeholder}
                id={id}
            />
        </div>
    )
}

export default Input