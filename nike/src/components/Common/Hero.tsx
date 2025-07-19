"use client"

import { useState } from 'react';

import Image from 'next/image';

import Button from "@/src/components/ui/Button";
import ShoeCard from "@/src/components/services/ShoeCard";

import { arrowRight } from "@/public/assets/ts/icons";
import { shoes, statistics } from "@/src/constant";

import { bigShoe1 } from "@/public/assets/ts/images";

export default function Hero() {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <>
            <section id="Home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10">
                <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-15">
                    <p className="text-xl font-montserrat text-red-400">Our Summer Collection</p>
                    <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
                        <span className="xl:bg-white xl:whitespace-nowrap relative z-5 pr-10 ">The New Arrival</span>
                        <br />
                        <span className="text-red-400 inline-block mt-3">Nike</span> Shoes
                    </h1>

                    <p className="font-montserrat text-gray-500 text-lg text-leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality, comfort and innovation for your active life.</p>

                    <div className='w-96'>
                        <Button label="Shop now" iconURL={arrowRight} />
                    </div>

                    <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                        {statistics.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                                <p className="leading font-montserrat text-gray-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-gray-200 bg-hero bg-cover bg-center">
                    <Image src={bigShoeImg} className="object-container relative z-5" width={610} height={500} alt="ShoeImage1" title="ShoeImage1" />

                    <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                        {shoes.map((shoe) => (
                            <div key={shoe.bigShoe.src}>
                                <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImg={bigShoeImg} />
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
};