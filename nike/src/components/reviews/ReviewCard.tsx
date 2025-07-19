import Image from "next/image";
import { StaticImageData } from "next/image";

import { star } from "@/public/assets/ts/icons";

type TProps = {
    imgURL: StaticImageData,
    customerName: string,
    rating: number,
    feedback: string
}

export default function ReviewCard({ imgURL, customerName, rating, feedback }: TProps) {
    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <Image src={imgURL} alt={customerName} title={customerName} className="rounded-full object-cover w-[120px] h-[120px]" />
                <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
                <div className="mt-3 flex justify-center items-center gap-2.5">
                    <Image src={star} width={24} height={24} alt="star" title="star" className="object-contain m-0 " />
                    <p className="text-xl font-montserrat text-gray-400 ">({rating})</p>
                </div>
                <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
            </div>
        </>
    );
};