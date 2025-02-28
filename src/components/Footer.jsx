import { IconBrandX } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font px-20 z-10">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 s sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © {new Date().getFullYear()}
                    <Link
                        href="https://twitter.com/l_m_manish"
                    >
                        - Manish Gupta
                    </Link>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
                    <Link className="ml-3 text-gray-500" href="https://twitter.com/l_m_manish" target="_blank" rel="noopener noreferrer">
                        <IconBrandX stroke={2} />
                    </Link>
                    <Link className="ml-3 text-gray-500" href="https://www.instagram.com/l_m_manish" target="_blank" rel="noopener noreferrer">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                        </svg>
                    </Link>
                    <Link className="ml-3 text-gray-500" href="https://www.linkedin.com/in/manishgupatfr" target="_blank" rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={0}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            />
                            <circle cx={4} cy={4} r={2} stroke="none" />
                        </svg>
                    </Link>
                </span>
            </div>
        </footer>

    )
}

export default Footer