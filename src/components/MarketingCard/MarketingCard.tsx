import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { FC } from "react"

interface CardProps {
    img: string | StaticImport,
    title: string,
    description: string,
    width: number,
    height: number
}

export const MarketingCard: FC<CardProps> = ({ img, title, description, width, height }) => {
    return (
        <>
            <ul className="bg-secondary-pink rounded-lg">
                <li>
                    <div>
                        <div>
                            <Image src={img} alt={title} width={width} height={height}/>
                        </div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </li>
            </ul>
        </>
    )
}