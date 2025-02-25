import React from "react";

const Marquee = () => {
    return (
        <section className="flex items-center justify-center w-full md:w-4/6">
            <div className="relative flex w-4/5 max-w-5xl overflow-hidden">
                {/* Duplicated content for smooth looping */}
                <div className="flex items-center gap-x-10 py-12 animate-marquee whitespace-nowrap">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <img src="/svg/bash.svg" alt="Bash" className="w-10 h-10" />
                            <img src="/svg/CSS3.svg" alt="CSS3" className="w-10 h-10" />
                            <img src="/svg/git.svg" alt="Git" className="w-10 h-10" />
                            <img src="/svg/HTML5.svg" alt="HTML5" className="w-10 h-10" />
                            <img src="/svg/javaScript.svg" alt="JavaScript" className="w-10 h-10" />
                            <img src="/svg/mysql.svg" alt="MySQL" className="w-10 h-10" />
                            <img src="/svg/nodejs.svg" alt="Node.js" className="w-10 h-10" />
                            <img src="/svg/react.svg" alt="React" className="w-10 h-10" />
                            <img src="/svg/supabase.svg" alt="Supabase" className="w-10 h-10" />
                            <img src="/svg/tailwindcss.svg" alt="Tailwind CSS" className="w-10 h-10" />
                            <img src="/svg/typeScript.svg" alt="TypeScript" className="w-10 h-10" />
                            <img src="/svg/vercel.svg" alt="Vercel" className="w-10 h-10" />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
