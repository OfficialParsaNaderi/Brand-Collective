import Image from "next/image";
import { StaticImageData } from "next/image";

type TProps = {
    imgURL: StaticImageData,
    label: string,
    subtext: string,
}

const ServiceCard = ({ imgURL, label, subtext }: TProps) => {
    return (
        <>
            <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] bg-white mr-20 shadow-2xl px-10 py-16">
                <div className="w-11 h-11 flex justify-center items-center bg-red-400 rounded-full">
                    <Image src={imgURL} width={24} height={24} alt={label} title={label} />
                </div>

                <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
                <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate">{subtext}</p>
            </div>
        </>
    )
}

export default ServiceCard