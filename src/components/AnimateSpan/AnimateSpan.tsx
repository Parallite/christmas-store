import { FC } from "react"

interface AnimateSpan {
    text: string,
    color: string,
    delay: number,
    duration: number,
    size: number,
    className: string
}

export const AnimateSpan: FC<AnimateSpan> = ({text, color, delay, duration, size, className}) => {
    return (
        <p className="text-primary-pink p-5 opacity-0 block"></p>
    )
}