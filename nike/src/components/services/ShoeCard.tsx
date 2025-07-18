import Image from "next/image";
import { StaticImageData } from "next/image";

interface ShoeImageProps {
    thumbnail: StaticImageData;
    bigShoe: StaticImageData;
}

type TProps = {
    imgURL: ShoeImageProps;
    changeBigShoeImage: (newBigShoeImage: StaticImageData) => void;
    bigShoeImg: StaticImageData;
}

export default function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }: TProps) {
    const HandleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    }

    return (
        <>
            <div
                className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe
                    ? "border-red-400"
                    : "border-transparent"
                    } cursor-pointer max-sm:flex-1`}
                onClick={HandleClick}
            >
                <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                    <Image
                        src={imgURL.thumbnail}
                        alt='shoe Collection'
                        width={127}
                        height={103.34}
                        className='object-contain'
                    />
                </div>
            </div>
        </>
    )

}