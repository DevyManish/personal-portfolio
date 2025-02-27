import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShinyButton } from "./magicui/shiny-button";

export default function Contact() {
    return (
        <div className="flex flex-col px-12 md:w-2/3 mt-10 py-10 text-white md:px-24">
            <div className="md:items-start md:justify-start">
                <p className="text-purple-400 mb-2">Let's talk</p>

                <h1 className="text-6xl font-bold mb-6">Contact</h1>

                <p className="text-gray-300 text-lg mb-8">
                    Have a question or a project in mind? Feel free to reach out.
                </p>

                <div className="mb-8">
                    <p className="text-gray-300">
                        Location: <span className="text-white">Kolkata, India</span>
                    </p>
                </div>

                <div className="items-center justify-center md:ml-10 md:pl-20  space-y-6 md:w-4/5">
                    <Input
                        type="text"
                        placeholder="Name"
                        className="bg-zinc-900 border-zinc-800 text-white h-12 rounded-md"
                    />

                    <Input
                        type="email"
                        placeholder="Email"
                        className="bg-zinc-900 border-zinc-800 text-white h-12 rounded-md"
                    />

                    <Textarea
                        placeholder="Message"
                        className="bg-zinc-900 border-zinc-800 text-white min-h-32 rounded-md"
                    />

                    {/* <Button className="bg-zinc-800 hover:bg-zinc-700 text-white w-full h-12 rounded-md">

                    </Button> */}
                    <ShinyButton>Submit</ShinyButton>

                </div>
            </div>
        </div>
    );
}