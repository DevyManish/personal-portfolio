import { Avatar, AvatarImage, AvatarFallback } from "./avatar"
import { Badge } from "./badge"
import Link from "next/link"

export function ExperienceCard({
    title,
    description,
    dates,
    location,
    image,
    links
}) {
    return (
        <li className="relative ml-10 py-4 text-white">
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                <Avatar className="border size-12 m-auto">
                    <AvatarImage src={image} alt={title} className="object-cover" />
                    <AvatarFallback>{title[0]}</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
                {dates && (
                    <time className="text-xs text-muted-foreground">{dates}</time>
                )}
                <h2 className="font-semibold leading-none">{title}</h2>
                {location && (
                    <p className="text-sm text-muted-foreground">{location}</p>
                )}
                {description && (
                    <span className="prose dark:prose-invert text-sm text-muted-foreground">
                        {description}
                    </span>
                )}
            </div>
        </li>
    )
}
