import Image from "next/image"
import { Code, ArrowUpRight, Github } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function Projects() {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-purple-500 mb-2 text-lg">My work</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
                    Projects
                </h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* StockIn Project Card */}
                    <Card className="bg-[#4169E1]/10 border-0 rounded-3xl overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative h-[300px] md:h-[400px]">
                                <Image
                                    src="/profile.jpg"
                                    alt="StockIn Dashboard"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center p-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-1">StockIn</h3>
                                <p className="text-gray-400">In Development</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-3 bg-black/20 rounded-xl hover:bg-black/30 transition-colors">
                                    <Code className="w-5 h-5" />
                                </button>
                                <button className="p-3 bg-black/20 rounded-xl hover:bg-black/30 transition-colors">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>
                        </CardFooter>
                    </Card>

                    {/* Svgl.app Project Card */}
                    <Card className="bg-[#9333EA]/10 border-0 rounded-3xl overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative h-[300px] md:h-[400px]">
                                <Image
                                    src="/profile.jpg"
                                    alt="Svgl.app Interface"
                                    fill
                                    className="object-cover object-right"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center p-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-1">Svgl.app</h3>
                                <p className="text-gray-400">Contributor</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-3 bg-black/20 rounded-xl hover:bg-black/30 transition-colors">
                                    <Code className="w-5 h-5" />
                                </button>
                                <button className="p-3 bg-black/20 rounded-xl hover:bg-black/30 transition-colors">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>

                <Link
                    href="#"
                    className="mt-16 flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors py-4 px-8 rounded-full border border-gray-800 hover:border-gray-600 max-w-md mx-auto"
                >
                    <span>More projects on</span>
                    <Github className="w-5 h-5" />
                </Link>
            </div>
        </div>
    )
}
