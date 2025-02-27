"use client"

import React from "react"
import { motion } from "framer-motion"
import { links } from "@/lib/data"
import Link from "next/link"
import clsx from "clsx"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Header() {
    const {
        activeSection,
        setActiveSection,
        setTimeOfLastClick
    } = useActiveSectionContext()

    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-1/3 border shadow-lg backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full  border-gray-800/50 shadow-black/50 overflow-hidden rounded-full"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
                <div className="absolute inset-0  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-inherit" />
            </motion.div>
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.95rem] font-medium gap-2" >
                    {links.map(link => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.href}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    "flex w-full items-center justify-center px-4 py-2.5 hover:text-gray-100 transition-all relative",
                                    {
                                        "text-gray-100 font-semibold":
                                            activeSection === link.name,
                                        "text-gray-400":
                                            activeSection !== link.name
                                    }
                                )}
                                href={link.href}
                                onClick={() => {
                                    setActiveSection(link.name)
                                    setTimeOfLastClick(Date.now())
                                }}
                            >
                                {link.name}
                                {link.name === activeSection && (
                                    <motion.span
                                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-300 to-purple-400"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 26
                                        }}
                                    />
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
