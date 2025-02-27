// Mark this as a Client Component
"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ShinyButton } from "./magicui/shiny-button"
import { toast } from "sonner"

// Define the form schema using Zod
const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required")
})

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = async data => {
        setIsSubmitting(true)

        try {
            // Send form data to the API route
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                // Show success toast
                toast.success("Your message has been sent.")
                reset() // Reset the form
            } else {
                throw new Error("Failed to submit form")
            }
        } catch (error) {
            // Show error toast
            toast.error("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

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

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="items-center justify-center md:ml-10 md:pl-20 space-y-6 md:w-4/5"
                >
                    <div>
                        <Input
                            type="text"
                            placeholder="Name"
                            className="bg-zinc-900 border-zinc-800 text-white h-12 rounded-md"
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <Input
                            type="email"
                            placeholder="Email"
                            className="bg-zinc-900 border-zinc-800 text-white h-12 rounded-md"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <Textarea
                            placeholder="Message"
                            className="bg-zinc-900 border-zinc-800 text-white min-h-32 rounded-md"
                            {...register("message")}
                        />
                        {errors.message && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <ShinyButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </ShinyButton>
                </form>
            </div>
        </div>
    )
}
