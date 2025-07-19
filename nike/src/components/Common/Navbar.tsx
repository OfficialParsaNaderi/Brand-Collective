import Link from "next/link";
import Image from "next/image";

import { headerLogo } from "@/public/assets/ts/images";
import { hamburger } from "@/public/assets/ts/icons";
import { navLinks } from "@/src/constant/index";

export default function Navbar() {
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

                    <div className="hidden max-lg:block padding-x pr-15">
                        <Image src={hamburger} width={25} height={25} alt="HamBurger" title="Hamburger" />
                    </div>

                </nav>
            </header>
        </>
    );
};