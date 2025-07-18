import Image from "next/image";

type TProps = {
    label: string,
    iconURL?: string,
    backgroundColor?: string,
    textColor?: string,
    borderColor?: string,
    fullWidth?: boolean,
}

export default function Button({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }: TProps) {
    return (
        <>
            <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border-none 
                ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} ${fullWidth} ` : 'bg-red-400 rounded-full text-white border-red-400  w-full transition duration-500 hover:bg-red-500'}`}>
                {label}

                {iconURL && <Image src={iconURL} className="ml-2 rounded-full w-5 h-5" alt="IconURL" title="IconURL" />}
            </button>
        </>
    );
}
