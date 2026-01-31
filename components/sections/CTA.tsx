"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden text-center">
            <div className="absolute inset-0 mesh-gradient opacity-20" />

            <div className="container px-4 md:px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl md:leading-tight font-bold tracking-tight mb-6 max-w-4xl mx-auto">
                    Ready to build the future of organization?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Join thousands of communities managing their future on-chain.
                    Get started today without writing a single line of code.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                        Start for free
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto bg-transparent border-white/20 hover:bg-white/5">
                        Talk to sales
                    </Button>
                </div>
            </div>
        </section>
    )
}
