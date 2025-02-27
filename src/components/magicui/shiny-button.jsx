"use client";;
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },

  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  }
};

export const ShinyButton = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div className="flex justify-center items-center p-4 bg-black min-h-20">
      <motion.button
        ref={ref}
        className={cn(
          "relative rounded-md px-6 py-2 font-medium transition-all duration-300",
          "rounded-2xl border border-gray-700 bg-black",
          "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
          className
        )}
        {...animationProps}
        {...props}
      >
        <span
          className="relative block text-white text-sm uppercase tracking-wide font-medium"
          style={{
            maskImage:
              "linear-gradient(-75deg, rgba(255,255,255,1) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), rgba(255,255,255,1) calc(var(--x) + 100%))",
            WebkitMaskImage:
              "linear-gradient(-75deg, rgba(255,255,255,1) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), rgba(255,255,255,1) calc(var(--x) + 100%))"
          }}
        >
          {children || "SHINY BUTTON"}
        </span>
        <span
          style={{
            mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor"
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(255,255,255,0.1)_calc(var(--x)+20%),rgba(255,255,255,0.6)_calc(var(--x)+25%),rgba(255,255,255,0.1)_calc(var(--x)+100%))] p-px"
        ></span>
      </motion.button>
    </div>
  );
});


ShinyButton.displayName = "ShinyButton";
