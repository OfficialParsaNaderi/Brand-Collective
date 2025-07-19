"use client";

import { useState } from "react";

import Link from "next/link";

import Image from "next/image";

import { headerLogo } from "@/public/assets/ts/images";
import { hamburger } from "@/public/assets/ts/icons";
import { navLinks } from "@/src/constant/index";

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className="Header">
                <nav className="flex justify-between items-center max-container">
                    <Link href="/">
                        <Image src={headerLogo} className="m-0 w-[129px] h-[29px]" width={129} height={29} alt="HeaderLogo" title="HeaderLogo" />
                    </Link>

                    <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className="font-montserrat leading-normal text-lg text-gray-500">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 pr-20">
                        <Link href="./Login">Sign in</Link>
                        <span>/</span>
                        <Link href="./Register">Sign up</Link>
                    </div>

                    <div className="hidden max-lg:block padding-x pr-15 cursor-pointer" onClick={toggleSidebar}>
                        <Image src={hamburger} width={25} height={25} alt="HamBurger" title="Hamburger" />
                    </div>
                </nav>
            </header>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 ease-in-out"
                    onClick={toggleSidebar}
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col items-start p-8 gap-6">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="font-montserrat leading-normal text-lg text-gray-800 hover:text-coral-red" onClick={toggleSidebar}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li className="mt-4">
                        <Link href="./Login" className="font-montserrat leading-normal text-lg text-gray-800 hover:text-coral-red" onClick={toggleSidebar}>
                            Sign in
                        </Link>
                    </li>
                    <li>
                        <Link href="./Register" className="font-montserrat leading-normal text-lg text-gray-800 hover:text-coral-red" onClick={toggleSidebar}>
                            Sign up
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};