import React from 'react'
import { experience } from '@/lib/data';
import { ExperienceCard } from './ui/ExperienceCard';
import { BlurFade } from './magicui/blur-fade';

const BLUR_FADE_DELAY = 0.04;
const Experience = () => {
    return (
        <div className="px-12 md:w-2/3 md:px-24 py-4" id='experience'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-white">
                Experience
            </h1>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
                <ul className="mb-4 ml-4  border-l ">
                    {experience.map((project, id) => (
                        <BlurFade
                            key={project.title + project.dates}
                            delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                        >
                            <ExperienceCard
                                title={project.title}
                                description={project.description}
                                location={project.location}
                                dates={project.dates}
                                image={project.image}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </ul>
            </BlurFade>
        </div>
    )
}

export default Experience
