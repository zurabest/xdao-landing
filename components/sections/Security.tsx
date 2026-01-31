"use client"

import { ShieldCheck, Lock, Eye } from "lucide-react"

export function Security() {
    const features = [
        {
            icon: <ShieldCheck className="w-10 h-10 text-emerald-400" />,
            title: "Audited Smart Contracts",
            description: "Our contracts have been rigorously audited by top-tier security firms."
        },
        {
            icon: <Lock className="w-10 h-10 text-blue-400" />,
            title: "Non-Custodial",
            description: "You maintain full control of your assets. We never access your treasury."
        },
        {
            icon: <Eye className="w-10 h-10 text-purple-400" />,
            title: "Open Source",
            description: "Our codebase is fully open source and verified on Etherscan."
        }
    ]

    return (
        <section className="py-24 bg-slate-900 border-t border-white/10">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:max-w-md">
                        <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Security First</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Enterprise-grade security</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Security is not an afterthought. We implement the highest standards of safety to ensure your DAO's treasury and governance processes are protected against threats.
                        </p>
                    </div>

                    <div className="grid gap-6 w-full md:w-auto">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-black/20 border border-white/5 hover:border-white/10 transition-colors">
                                <div className="shrink-0 p-2 rounded-lg bg-white/5">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
