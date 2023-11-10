'use client'

import Link from "next/link";
import { FC, useState } from "react";
import { MenuLinks } from "../types";
import Image from "next/image"
import Logo from '../../../public/images/logo.png'

interface NavMenuProps {
    navLinks: MenuLinks
}

export const SideMenu: FC<NavMenuProps> = ({ navLinks }) => {
    const [burgerOpen, setBurgerOpen] = useState<boolean>();
    const toggleBurgerMenu = () => {
        setBurgerOpen(!burgerOpen);
    };

    return (
        <div className="lg:hidden">
            <div className="h-full flex w-10 relative z-10">
                <button onClick={toggleBurgerMenu} className="text-center w-full">
                    X
                </button>
            </div>
            {burgerOpen && (
                <div onClick={toggleBurgerMenu}>
                    <nav className="bg-primary-blue w-screen h-screen text-center uppercase p-5 absolute top-0 left-0 flex justify-center items-center flex-col">
                        <ul onClick={(e: React.MouseEvent<HTMLElement>) =>
                            e.stopPropagation()
                        } >
                            {navLinks.map((link) => (
                                <li key={link.name} className="m-10">
                                    <Link href={link.path}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-20">
                            <Image src={Logo} alt={"Logo"} width={150} />
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
};