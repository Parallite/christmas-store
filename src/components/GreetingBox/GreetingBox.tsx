'use client'

import Image from "next/image"
import dear from '../../../public/images/dear.jpg'
import { motion } from "framer-motion"
import { hennyPennyFont } from "../../../public/fonts/fonts"


export const GreetingBox = () => {
    return (
        <div className="relative">
            <div className="min-h-screen bg-primary-green">
                <Image src={dear} alt={"greetingImg"} className="min-h-screen w-full object-cover object-center" />
            </div>
            <div className="container mx-auto">
                <motion.button
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="absolute opacity-0 top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 p-8 uppercase text-primary-white
            border-4 border-revert lg:text-lg 2xl:text-3xl backdrop-blur-sm font-semibold tracking-wider bg-primary-white rounded-md bg-clip-padding backdrop-filter bg-opacity-40">
                    Explore the store
                </motion.button>
                <div className={hennyPennyFont.className}>
                    <div className="w-full absolute top-60 left-0 font-semibold flex flex-col text-center text-9xl">
                        <motion.span
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-primary-pink p-5 opacity-0">Christmas</motion.span>
                        <motion.span
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 1 }}
                            className="text-primary-green p-5 opacity-0">Gifts</motion.span>
                    </div>
                </div>
            </div>
        </div>
    )
}