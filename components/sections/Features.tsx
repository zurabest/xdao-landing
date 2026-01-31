"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
    {
        id: "create",
        label: "Create",
        title: "Launch your organization instantly",
        description: "Define your governance structure, tokenomics, and membership rules with a few clicks. No coding required.",
        points: ["Multi-chain deployment", "Modular architecture", "Custom voting rules"],
        color: "from-blue-500 to-cyan-400"
    },
    {
        id: "govern",
        label: "Govern",
        title: "Decision making made simple",
        description: "Create proposals, debate, and vote on-chain. Transparent and verifiable governance for your community.",
        points: ["Gasless voting", "Delegation support", "Quadratic voting"],
        color: "from-indigo-500 to-purple-400"
    },
    {
        id: "treasury",
        label: "Treasury",
        title: "Secure asset management",
        description: "Manage your DAO's assets with enterprise-grade security. Multi-sig support and connection to DeFi protocols.",
        points: ["Gnosis Safe integration", "Asset streaming", "Portfolio dashboard"],
        color: "from-emerald-500 to-green-400"
    },
    {
        id: "execute",
        label: "Execute",
        title: "Trustless execution",
        description: "Automatically execute passed proposals on-chain. Remove centralized intermediaries from the process.",
        points: ["Timelock controllers", "Cross-chain execution", "Automated transactions"],
        color: "from-orange-500 to-amber-400"
    }
]

export function Features() {
    const [activeTab, setActiveTab] = React.useState("create")
    const activeFeature = features.find(f => f.id === activeTab) || features[0]

    return (
        <section className="py-24 bg-black/40 relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Platform</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Everything your DAO needs</h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Tabs Navigation */}
                    <div className="lg:col-span-4 flex flex-col gap-2">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveTab(feature.id)}
                                className={cn(
                                    "text-left px-6 py-4 rounded-xl transition-all duration-300 border border-transparent",
                                    activeTab === feature.id
                                        ? "bg-white/5 border-white/10 shadow-lg text-white"
                                        : "text-muted-foreground hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <span className="text-lg font-semibold">{feature.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Panel */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-card/50 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
                            >
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">{activeFeature.title}</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {activeFeature.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {activeFeature.points.map((point) => (
                                                <li key={point} className="flex items-center gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                        <Check size={12} />
                                                    </div>
                                                    <span className="text-sm font-medium">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={cn(
                                        "aspect-square rounded-xl bg-gradient-to-br p-1",
                                        activeFeature.color
                                    )}>
                                        <div className="w-full h-full bg-black/90 rounded-lg flex items-center justify-center">
                                            <span className="text-white/20 font-mono">Feature Preview</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
