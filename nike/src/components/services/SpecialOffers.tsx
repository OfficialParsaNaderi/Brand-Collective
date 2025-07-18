import Button from "@/src/components/ui/Button";

import { arrowRight } from "@/public/assets/ts/icons";
import { offer } from "@/public/assets/ts/images";
import Image from "next/image";

export default function SpecialOffers() {
    return (
        <>
            <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
                <div className="flex-1">
                    <Image src={offer} className="object-contain w-full" width={773} height={687} alt="offerIMG" title="offerIMG" />
                </div>

                <div className="flex flex-1 flex-col">
                    <div className="relative  flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pr-20">
                        <h2 className="font-palanquin mb-5 text-5xl capitalize font-bold lg:max-w-lg">
                            <span className="text-red-400 inline-block mt-3">Special</span> Offer
                        </h2>

                        <p className="mt-4 mb-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to
                            incredible savings, we offer unparalleled value that sets us part .!
                        </p>

                        <p className="mt-6 lg:max-w-lg info-text">
                            Navigate a realm of possibilities designed to fulfill your unique desires,
                            surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
                        </p>

                        <div className="mt-11 flex flex-wrap gap-4 w-3xs">
                            <Button label="Shop now" iconURL={arrowRight} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}