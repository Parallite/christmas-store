import Link from "next/link"
import { FC } from "react"
import { MenuLinks } from "../types"

interface NavMenuProps {
    navLinks: MenuLinks
}

export const NavMenu: FC<NavMenuProps> = ({ navLinks }) => {
    return (
        <nav className="hidden lg:flex justify-between font-extrabold lg:text-lg 2xl:text-3xl tracking-widest items-center">
            <ul className="flex text-center uppercase">
                {navLinks.map((link) => (
                    <li key={link.name} className="px-4">
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}