"use client"

import { motion } from "framer-motion"

export function Stats() {
    const stats = [
        { label: "Treasury managed", value: "$2.5B+" },
        { label: "DAOs created", value: "5,000+" },
        { label: "Members", value: "100K+" },
        { label: "Chains supported", value: "15+" },
    ]

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-purple-900/40 to-background z-0" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-2"
                            >
                                {stat.value}
                            </motion.span>
                            <span className="text-muted-foreground font-medium uppercase tracking-wide text-sm md:text-base">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
