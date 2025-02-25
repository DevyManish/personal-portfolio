import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import LetterGlitch from './ui/GlitchText';
import { CodeXml, CircleSmall, Palette } from 'lucide-react';
import { LiaAndroid } from "react-icons/lia";

const Skills = () => {
    return (
        <div className="flex flex-col px-8 md:w-[60%] md:px-8 py-6 mt-12 text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold items-start w-full">Areas of Expertise</h2>
            <div className="flex flex-col md:flex-row w-full md:items-center justify-between">
                <Accordion type="single" collapsible className="w-full md:w-2/3 md:pr-8">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <span className="flex items-start text-start gap-4 text-lg"><CodeXml size={20} color='white' className="mt-1" /> Web Development</span></AccordionTrigger>
                        <AccordionContent>
                            <span className="flex items-center justify-start text-start gap-2 ml-3"><CircleSmall size={10} color='white' className='mt-1' />Single Page Applications,</span>
                        </AccordionContent>
                        <AccordionContent>
                            <span className="flex items-center justify-start text-start gap-2 ml-3"><CircleSmall size={10} color='white' className='mt-1' />Progressive Web Apps,</span>
                        </AccordionContent>
                        <AccordionContent>
                            <span className="flex items-center justify-start text-start gap-2 ml-3"><CircleSmall size={10} color='white' className='mt-1' />Server-Side Rendering</span>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger><span className="flex items-start text-start gap-4 text-lg"><LiaAndroid size={20} color='white' className="mt-1" /> Android Development</span></AccordionTrigger>
                        <AccordionContent>
                            React Native for mobile applications.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger><span className="flex items-start text-start gap-4 text-lg"><Palette size={20} color='white' className="mt-1" /> UI/UX & Prototyping</span></AccordionTrigger>
                        <AccordionContent>
                            Pixel perfect design and prototyping.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="w-full mt-12 md:mt-0 md:w-1/2 md:px-8">
                    <LetterGlitch
                        glitchSpeed={50}
                        centerVignette={true}
                        outerVignette={false}
                        smooth={true}
                    />
                </div>
            </div>
        </div >
    )
}

export default Skills
