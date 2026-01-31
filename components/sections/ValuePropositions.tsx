"use client"

import { Zap, Shield, Globe } from "lucide-react"

export function ValuePropositions() {
    const cards = [
        {
            icon: <Zap className="w-8 h-8 text-amber-500" />,
            title: "Lightning Fast",
            description: "Deployed on optimized L2 networks ensuring sub-second finality and minimal costs."
        },
        {
            icon: <Shield className="w-8 h-8 text-indigo-500" />,
            title: "Secure by Default",
            description: "Audited smart contracts and rigorous security standards to protect your treasury."
        },
        {
            icon: <Globe className="w-8 h-8 text-cyan-500" />,
            title: "Global Scale",
            description: "Connect with contributors worldwide through a permissionless infrastructure."
        }
    ]

    return (
        <section className="py-24 bg-white text-black">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {cards.map((card, idx) => (
                        <div key={idx} className="flex flex-col items-start pt-8 md:pt-0 md:px-8 first:pl-0 last:pr-0">
                            <div className="mb-6 p-4 rounded-2xl bg-gray-100">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
