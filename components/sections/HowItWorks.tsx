"use client"

import { PlusCircle, Users, Vote } from "lucide-react"

export function HowItWorks() {
    const steps = [
        {
            icon: <PlusCircle className="w-10 h-10 text-primary" />,
            title: "Create",
            description: "Define your DAO's parameters, tokenomics, and governance model in minutes."
        },
        {
            icon: <Users className="w-10 h-10 text-secondary" />,
            title: "Invite",
            description: "Onboard your community members and distribute governance tokens securely."
        },
        {
            icon: <Vote className="w-10 h-10 text-accent" />,
            title: "Govern",
            description: "Create proposals, vote on-chain, and manage your organization's treasury."
        }
    ]

    return (
        <section className="py-24 relative">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">How It Works</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">From idea to on-chain in 3 steps</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 -z-10" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 shadow-xl backdrop-blur-sm group-hover:-translate-y-2 transition-transform duration-300">
                                {step.icon}
                            </div>
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-sm font-bold mb-4">
                                {idx + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
