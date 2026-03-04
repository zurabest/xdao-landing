"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TypewriterProps {
    text: string | string[];
    speed?: number; // Treat as delay in ms between revealing characters
    cursor?: string;
    loop?: boolean;
    deleteSpeed?: number;
    delay?: number;
    className?: string;
}

export function Typewriter({
    text,
    speed = 30, // By default 30ms per character
    cursor = "",
    loop = false,
    delay = 3000,
    className,
}: TypewriterProps) {
    const textArray = Array.isArray(text) ? text : [text];
    const [textArrayIndex, setTextArrayIndex] = React.useState(0);

    const currentText = textArray[textArrayIndex] || "";

    // speed is in ms. stagger is in seconds.
    const staggerTime = Math.max(0.002, speed / 1000);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerTime,
            },
        },
        exit: {
            opacity: 1,
            transition: {
                // Stagger the exit as well so they disappear character by character
                staggerChildren: staggerTime,
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    React.useEffect(() => {
        if (!loop && textArray.length <= 1) return;

        // Calculate time it takes to fully type the current string
        const typingDuration = currentText.length * speed;

        // Total time the string is on screen (typing + delay waiting)
        const visibleDuration = typingDuration + delay;

        // Automatically trigger the next string
        const timer = setTimeout(() => {
            setTextArrayIndex((prev) => (prev + 1) % textArray.length);
        }, visibleDuration);

        return () => clearTimeout(timer);
    }, [loop, currentText, delay, speed, textArray.length]);

    return (
        <span className={`relative block w-full text-left ${className || ""}`}>
            {/* 
              Remove mode="wait" to allow components to exist simultaneously.
              They will overlap while the old one fades out and the new one fades in.
            */}
            <AnimatePresence>
                <motion.span
                    // Use index + the string itself to guarantee a unique key for AnimatePresence
                    key={`${textArrayIndex}-${currentText}`}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    // Absolute positioning allows them to stack on top of each other
                    className="absolute top-0 left-0 w-full"
                    style={{ whiteSpace: "pre-wrap" }}
                >
                    {currentText.split("").map((char, index) => (
                        <motion.span key={index} variants={childVariants}>
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            </AnimatePresence>

            {/* 
              Invisible element to establish the height/width of the container
              so absolute positioning doesn't collapse the parent
            */}
            <span className="invisible whitespace-pre-wrap block w-full" aria-hidden="true">
                {currentText}
            </span>

            {cursor && <span className="animate-pulse absolute bottom-0">{cursor}</span>}
        </span>
    );
}
