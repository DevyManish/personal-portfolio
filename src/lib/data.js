import {
    IconBrandGithub,
    IconBrandX,
    IconSend,
    IconHome,
    IconBriefcase,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Github } from "lucide-react";

export const links = [
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Experience",
        href: "#experience",
    },
    {
        name: "Contact",
        href: "#contact",
    },
]

export const links2 = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#home",
    },

    {
        title: "Projects",
        icon: (
            <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#projects",
    },
    {
        title: "Experience",
        icon: (
            <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#experience",
    },
    {
        title: "Contact",
        icon: (
            <IconSend className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#contact",
    },
    {
        title: "Twitter",
        icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://twitter.com/l_m_manish",
    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.github.com/devymanish",
    },
];

export const experience = [
    {
        title: "B.Tech in CSE",
        dates: "2022-2026 ",
        location: "JIS University",
        description:
            "Pursuing B.Tech in Computer Science and Engineering. Represented my college in Smart India Hackathon Finals 2025. Won 2024 Innovation award. Served as AICTE and Ideometer Amabassador for 2024-2025.",
        image:
            "/jisulogo.png",
    }, {
        title: "Web Mentor",
        dates: "2023-2025",
        location: "Google Developer Student Clubs",
        description:
            "Served as web mentor for Google Developer Student Clubs. Conducted workshops on web development and cloud computing. Organized hackathons and coding competitions.",
        image:
            "gdg.jpg",

    }, {
        title: "Software Developer Intern",
        dates: "Feb 2025 - April 2025",
        location: "Taleniq Technologies Pvt Ltd.",
        description:
            "Worked as a software developer intern at Taleniq Technologies Pvt Ltd. Developed backend for android applications using firebase. Worked on serverless computing and cloud functions.",
        image:
            "taleniq.png",
    },
]


