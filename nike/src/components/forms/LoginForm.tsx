"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import Image from "next/image"
import Input from "../ui/Input"
import Link from "next/link"
import { headerLogo } from "@/public/assets/ts/images"

export default function LoginForm() {

    const router = useRouter();

    const [Email, setEmail] = useState(' ');
    const [Password, setPassword] = useState(' ');

    function HandleLogin() {
        const UserData = {
            Email: Email,
            Password: Password
        }

        console.log(`Email : ${Email} \nPassword : ${Password}`)

        console.log(`Don't worry again, We have OBJECT form .! 😎💀`)
        console.log(UserData)

        router.push("/")
    }

    return (
        <>
            <div className="Container w-full mx-auto flex justify-center items-center bg-gray-200 mt-35">
                <div className="Content p-8">
                    <div className="Logo flex justify-center items-center mb-5">
                        <Image src={headerLogo} alt="NikeLogo" title="NikeLogo" width={150} height={100} />
                    </div>
                    <div className="Title text-start">
                        <h1 className="text-[20px] font-bold text-gray-800">Login</h1>
                        <p className="text-gray-500">Login & continue the journey ...</p>
                    </div>
                    <div className="Inputs grid gap-5 pt-5 pb-3">
                        <div className="Email grid gap-1 w-95">
                            <label htmlFor="email">
                                Email
                            </label>
                            <Input type="email" placeholder="ParsaNaderi1387.programmer@gmail.com" className="bg-transparent p-2 border-2 border-gray-400 rounded-2xl ml-3 w-full" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="Password grid gap-1">
                            <label htmlFor="password">
                                Password
                            </label>
                            <Input type="password" placeholder="Sudo passwd" className="bg-transparent p-2 border-2 border-gray-400 rounded-2xl ml-3 w-full" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="Button grid grid-cols-1 gap-2 justify-center items-center pt-5 pb-3">
                        <button className="bg-red-400 rounded-2xl text-white border-red-400  w-full py-2 px-4 transition duration-500 hover:bg-red-500 ml-3" onClick={HandleLogin}>Login</button>

                        <span className="rounded-2xl text-gray-500 border-red-400  w-full py-2 px-4 transition duration-500 text-center">Don&apos;t you have account ?
                            <Link href={"/Register"} className="pl-2 underline text-black transition duration-300 hover:text-gray-500">
                                Register
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}