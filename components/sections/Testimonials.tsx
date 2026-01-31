"use client"

import { Quote } from "lucide-react"

export function Testimonials() {
    return (
        <section className="py-24 bg-white/5 border-y border-white/10 relative overflow-hidden">
            <div className="absolute top-10 left-10 text-white/5 rotate-12">
                <Quote size={200} />
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed mb-10">
                        "XDAO enabled us to launch our community governance in less than a week. The modular architecture gave us exactly what we needed without the complexity."
                    </blockquote>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-accent mb-4 p-1">
                            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-xl font-bold">
                                JD
                            </div>
                        </div>
                        <div className="text-lg font-bold">John Doe</div>
                        <div className="text-muted-foreground">Founder, DeFi Protocol</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
