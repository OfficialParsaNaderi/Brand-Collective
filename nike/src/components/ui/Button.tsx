import { MouseEvent } from "react";

import Image from "next/image";

type TProps = {
    label: string,
    iconURL?: string,
    backgroundColor?: string,
    textColor?: string,
    borderColor?: string,
    fullWidth?: boolean,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
};

export default function Button({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth, onClick }: TProps) {
    return (
        <>
            <button
                className={`
                    flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full
                    ${fullWidth ? 'w-full' : ''} /* Apply w-full if fullWidth is true */
                    ${backgroundColor && textColor && borderColor
                        ? `${backgroundColor} ${textColor} ${borderColor}`
                        : 'bg-red-400 text-white border-red-400 hover:bg-red-500'
                    }
                    ${borderColor ? `border ${borderColor}` : 'border-none'} 
                    transition duration-500
                `}
                onClick={onClick}
            >
                {label}

                {iconURL && (
                    <Image
                        src={iconURL}
                        className="ml-2 rounded-full w-5 h-5"
                        alt="IconURL"
                        title="IconURL"
                        width={20}
                        height={20}
                    />
                )}
            </button>
        </>
    );
};