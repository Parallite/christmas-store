import Link from "next/link"

export const Header = () => {
    return (
        <header className="flex justify-between px-4 my-2">
            <Link href='/'>Home</Link>
            <Link href='/deals'>Deals</Link>
            <Link href='/catalog'>Catalog</Link>
            <Link href='/delivery'>Delivery</Link>
            <Link href='/about'>About</Link>
        </header>
    )
}