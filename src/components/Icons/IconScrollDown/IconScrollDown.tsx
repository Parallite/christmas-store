import { FC } from "react"
import { IconProps } from "@/components/Icons/types"

export const IconScrollDown: FC<IconProps> = ({ fill, height, width, ...props }) => {
    return (
        <>
            <svg
                viewBox="0 0 16 16"
                fill={fill}
                height={height}
                width={width}
                {...props}
            >
                <path d="M8 3a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 3zm4 8a4 4 0 01-8 0V5a4 4 0 118 0v6zM8 0a5 5 0 00-5 5v6a5 5 0 0010 0V5a5 5 0 00-5-5z" />
            </svg>
        </>
    )
}