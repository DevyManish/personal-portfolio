export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
]

import { IoHomeOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export const items = [
    {
        icon: <IoHomeOutline
            size={18} color={'white'} />, label: 'Home'
    },
    { icon: <GoProjectSymlink size={18} color={'white'} />, label: 'Archive' },
    { icon: <IoHomeOutline size={18} color={'white'} />, label: 'Profile' },
    { icon: <IoHomeOutline size={18} color={'white'} />, label: 'Settings' },
];

export const links2 = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },

    {
        title: "Products",
        icon: (
            <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Components",
        icon: (
            <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Aceternity UI",
        icon: (
            <Image
                src="https://assets.aceternity.com/logo-dark.png"
                width={20}
                height={20}
                alt="Aceternity Logo"
            />
        ),
        href: "#",
    },
    {
        title: "Changelog",
        icon: (
            <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },

    {
        title: "Twitter",
        icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
];