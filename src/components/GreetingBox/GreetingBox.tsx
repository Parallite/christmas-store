'use client'

import Image from "next/image"
import { hennyPennyFont } from "@/fonts/fonts"
import { motion } from "framer-motion"
import deer from '@/images/deer.jpg'
import { ScrollDown } from "@/components/ScrollDown"

export const GreetingBox = () => {
    return (
        <div className="relative">
            <div className="min-h-screen bg-primary-green">
                <Image src={deer} alt={"greetingImg"} className="min-h-screen w-full object-cover object-center" />
            </div>
            <div className="container mx-auto">
                <div className={hennyPennyFont.className}>
                    <div className="w-full h-[80%] absolute top-40 left-0 font-semibold flex flex-col justify-between text-center text-9xl">
                        <div>
                            <motion.span
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 1 }}
                                className="text-primary-pink p-5 opacity-0 block">Christmas</motion.span>
                            <motion.span
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7, duration: 1 }}
                                className="text-primary-green p-5 opacity-0 block">Gifts</motion.span>
                        </div>
                        <ScrollDown />
                    </div>
                </div>
            </div>
        </div>
    )
}