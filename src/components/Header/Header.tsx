import { NavMenu } from "@/components/NavMenu"
import { SideMenu } from "../SideMenu"
import { FC } from "react";
import { MenuLinks } from "../types";
import { ButtonsMenu } from "../ButtonsMenu";

const navLinks: MenuLinks = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Deals',
        path: '/deals',
    },
    {
        name: 'Catalog',
        path: '/catalog',
    },
    {
        name: 'Delivery',
        path: '/delivery',
    },
    {
        name: 'About',
        path: '/about',
    },
]

export const Header: FC = () => {

    return (
        <div className='sticky top-0 left-0  bg-dark-green min-h-min z-10'>
            <header className="container mx-auto text-primary-white my-4 px-1 w-full flex justify-between">
                <SideMenu navLinks={navLinks} />
                <div className="flex justify-end lg:justify-between w-full">
                    <div className="w-1/5 lg:flex hidden">
                        CG
                    </div>
                    <NavMenu navLinks={navLinks} />
                    <ButtonsMenu />
                </div>
            </header>
        </div>
    )
}