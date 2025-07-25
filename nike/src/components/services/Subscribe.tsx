"use client";

import { useState } from "react";

import Button from "@/src/components/ui/Button";
import Input from "../ui/Input";

export default function Subscribe() {

    const [Email, setEmail] = useState("");

    function HandleEmail() {
        console.log(Email);
    };

    return (
        <section
            id='contact-us'
            className='grid justify-center items-center max-lg:flex-col gap-10'
        >
            <h3 className='text-4xl leading-[68px] font-palanquin font-bold whitespace-nowrap'>
                Sign Up for <span className='text-red-400'>Updates</span> & Newsletter
            </h3>

            <div className='lg:max-w-[100%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gray-400 rounded-full'>
                <Input
                    type='text'
                    placeholder='Enter your email address'
                    className='input flex-1 min-w-0'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                    <Button label='Sign Up' fullWidth onClick={HandleEmail} />
                </div>
            </div>
        </section>
    );
};