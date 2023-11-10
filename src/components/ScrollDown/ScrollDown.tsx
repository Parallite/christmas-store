'use client'

import { motion } from "framer-motion"
import { IconScrollDown } from "@/components/Icons/IconScrollDown"

export const ScrollDown = ({}) => {
    return (
        <>
            <div
                className="flex flex-col"
            >   
            <motion.div
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="block m-auto mb-10 opacity-0">
                <IconScrollDown fill="rgb(253 232 216)" width="125px" height="125px"/>
            </motion.div>
            <motion.p 
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="text-primary-white text-4xl opacity-0">Scroll down</motion.p>
            </div>
        </>
    )
}