
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Spotlight Card ---
export const SpotlightCard = ({
    children,
    className = "",
    spotlightColor = "rgba(255, 255, 255, 0.25)",
}: {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative border border-slate-200 bg-white overflow-hidden rounded-xl",
                className
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};

// --- Neon Gradient Card ---
export const NeonGradientCard = ({
    children,
    className = "",
    containerClassName = "",
    innerClassName = "", // Optional alias for clarity if needed, but we'll use className for inner to match standard props often used for "content" in wrappers
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    innerClassName?: string;
}) => {
    return (
        <div className={cn("relative group rounded-xl p-[2px] overflow-hidden", containerClassName)}>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#C0392B] via-[#FFD700] to-[#C0392B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
            />
            <div className={cn("relative h-full bg-white rounded-[10px] z-10", className, innerClassName)}>{children}</div>
        </div>
    );
};

// --- Hover Border Gradient Card ---
export const HoverBorderGradientCard = ({
    children,
    className = "",
    containerClassName = "",
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    return (
        <div className={cn("relative p-[1px] group overflow-hidden rounded-xl", containerClassName)}>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0392B] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-md"
                animate={{
                    x: ["-100%", "100%"]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear"
                }}
            />
            <div className={cn("relative h-full bg-slate-50 rounded-xl p-6 border-2 border-transparent group-hover:border-transparent transition-all z-10", className)}>
                {children}
            </div>
        </div>
    );
};
