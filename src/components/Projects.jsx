import Image from "next/image"
import { Code, ArrowUpRight, Github } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ProjectCard } from "./ProjectCards"
import { RainbowButton } from "./magicui/rainbow-button"

export default function Projects() {
    return (
        <div className="min-h-screen px-12 md:px-0 bg-black text-white p-4 md:p-8 lg:p-16" id="projects">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-purple-500 mb-2 text-lg">My work</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
                    Projects
                </h1>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <ProjectCard title="Dakseva" description="blah.." image="/dakseva.png" />
                    <ProjectCard title="Jobscout" description="blah.." image="/jobscout.png" />
                </div>

                <div className="flex justify-center w-full items-center py-8">
                    <Link
                        href="https://www.github.com/devymanish">
                        {/* <ShinyText /> */}
                        <RainbowButton><div className="flex gap-2 items-center text-black font-semibold">View More on {' '} <Github className="w-5 h-5" color="#020500" /></div></RainbowButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

// const ShinyText = ({ disabled = false, speed = 5, className = '' }) => {
//     const animationDuration = `${speed}s`;

//     return (
//         <div
//             className={`flex text-[#b5b5b5a4] py-1 bg-clip-text ${disabled ? '' : 'animate-shine'} ${className} px-3 items-center justify-center gap-3 border-2 border-[#b5b5b5a4] rounded-2xl`}
//             style={{
//                 backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
//                 backgroundSize: '200% 100%',
//                 WebkitBackgroundClip: 'text',
//                 animationDuration: animationDuration,
//                 fontSize: '1 rem',
//                 fontWeight: '700',
//             }}
//         >
//             <span>View More on </span> <Github className="w-5 h-5" color="#b5b5b5a4" />
//         </div>
//     );
// };
