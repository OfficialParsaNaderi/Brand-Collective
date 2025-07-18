type TProps = {
    type: string,
    placeholder: string,
    className: string
}

export default function Input({ type, placeholder, className }: TProps) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className={className}
            />
        </>
    )
}