"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 mesh-gradient opacity-40" />
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[100px] rounded-full -z-10" />

            <div className="container px-4 md:px-6 relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 hover:bg-primary/20 transition-colors cursor-pointer"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    New: Multi-chain support
                    <ArrowRight className="w-4 h-4" />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
                >
                    Create your DAO <br className="hidden md:block" />
                    in minutes, not months
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    The most powerful platform to start, manage, and grow your decentralized organization.
                    Secure, modular, and gasless.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="h-12 px-8 text-base">
                        Launch App
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/10 hover:bg-white/5">
                        <Play className="mr-2 w-4 h-4 fill-current" />
                        Watch Demo
                    </Button>
                </motion.div>

                {/* Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl"
                >
                    <div className="rounded-lg overflow-hidden bg-background aspect-[16/9] relative group">
                        {/* Simulated Dashboard UI */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white/20 font-mono text-sm">
                            {/* Placeholder for actual dashboard image */}
                            <div className="text-center">
                                <div className="w-24 h-24 border-2 border-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-4xl">X</span>
                                </div>
                                <p>Dashboard Preview</p>
                            </div>
                        </div>

                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
