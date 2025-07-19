import { ChangeEvent } from "react";

type TProps = {
    type: string,
    placeholder: string,
    className: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
};

export default function Input({ type, placeholder, className, onChange }: TProps) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className={className}
                onChange={onChange}
            />
        </>
    );
};