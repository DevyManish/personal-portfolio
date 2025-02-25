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


export const items = [
    {
        icon: <IoHomeOutline
            size={18} color={'white'} />, label: 'Home'
    },
    { icon: <GoProjectSymlink size={18} color={'white'} />, label: 'Archive' },
    { icon: <IoHomeOutline size={18} color={'white'} />, label: 'Profile' },
    { icon: <IoHomeOutline size={18} color={'white'} />, label: 'Settings' },
];

