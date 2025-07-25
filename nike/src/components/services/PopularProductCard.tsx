import Image from "next/image";
import { StaticImageData } from "next/image";

import { star } from "@/public/assets/ts/icons";

type TProps = {
    imgURL: StaticImageData,
    name: string,
    price: string,
};

export default function PopularProductCard ({ imgURL, name, price }: TProps){
    return (
        <div className='flex flex-1 flex-col w-full'>
            <Image src={imgURL} alt={name} className='w-[282px] h-[282px]' />
            <div className='mt-8 flex justify-start gap-2.5'>
                <Image src={star} alt='rating icon' width={24} height={24} />
                <p className='font-montserrat text-xl leading-normal text-gray-400'>
                    (4.5)
                </p>
            </div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
                {name}
            </h3>
            <p className='mt-2 font-semibold font-montserrat text-red-400 text-2xl leading-normal'>
                {price}
            </p>
        </div>
    );
};