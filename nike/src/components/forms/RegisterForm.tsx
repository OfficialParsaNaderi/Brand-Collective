"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

import Image from "next/image";

import Input from "../ui/Input";

import { headerLogo } from "@/public/assets/ts/images";

export default function RegisterForm() {

    const router = useRouter();

    const [FirstName, setFirstName] = useState(' ');
    const [LastName, setLastName] = useState(' ');
    const [Email, setEmail] = useState(' ');
    const [Password, setPassword] = useState(' ');

    function HandleRegistration() {

        const UserData: object = {
            FirstName,
            LastName,
            Email,
            Password
        };

        console.log(`First Name : ${FirstName} \nLast Name : ${LastName} \nEmail : ${Email} \nPassword : ${Password}`);

        console.log(`Don't worry, We have OBJECT form .! 😎💀`);
        console.log(UserData);

        router.push("/");

    };

    return (
        <>
            <>
                <div className="Container w-full mx-auto flex justify-center items-center bg-gray-200 mt-30">
                    <div className="Content p-8">
                        <div className="Logo flex justify-center items-center mb-5">
                            <Image src={headerLogo} alt="NikeLogo" title="NikeLogo" width={150} height={100} />
                        </div>
                        <div className="Title text-start">
                            <h1 className="text-[20px] font-bold text-gray-800">Register</h1>
                            <p className="text-gray-500">Create your account & start the journey with us ...</p>
                        </div>
                        <div className="Inputs grid gap-5 pt-5 pb-3">
                            <div className="row lg:flex gap-5 sm:grid">
                                <div className="FirstName grid gap-1">
                                    <label htmlFor="firstName">
                                        FirstName
                                    </label>
                                    <Input type="email" placeholder="Parsa" className="bg-transparent p-2 border-2 border-gray-400 rounded-2xl ml-3" onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="LastName grid gap-1">
                                    <label htmlFor="lastName">
                                        LastName
                                    </label>
                                    <Input type="password" placeholder="Naderi" className="bg-transparent p-2 border-2 border-gray-400 rounded-2xl ml-3" onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="Email grid gap-1">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <Input type="email" placeholder="ParsaNaderi1387.programmer@gmail.com" className="bg-transparent p-2 border-2 border-gray-400 rounded-2xl ml-3" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="Password grid gap-1">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <Input type="password" placeholder="Sudo passwd" className="bg-transparent p-2 border-2 border-gray-400 rounded-2xl ml-3" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="Button grid grid-cols-1 gap-2 justify-center items-center pt-5 pb-3">
                            <button className="bg-red-400 rounded-2xl text-white border-red-400  w-full py-2 px-4 transition duration-500 hover:bg-red-500" onClick={HandleRegistration}>Register</button>

                            <span className="rounded-2xl text-gray-500 border-red-400  w-full py-2 px-4 transition duration-500 text-center">Do you have account ?
                                <Link href={"/Login"} className="pl-2 underline text-black transition duration-300 hover:text-gray-500">
                                    Login
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};