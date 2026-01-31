import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/sections/Hero"
import { LogoCloud } from "@/components/sections/LogoCloud"
import { Features } from "@/components/sections/Features"
import { ValuePropositions } from "@/components/sections/ValuePropositions"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Testimonials } from "@/components/sections/Testimonials"
import { Stats } from "@/components/sections/Stats"
import { Integrations } from "@/components/sections/Integrations"
import { Security } from "@/components/sections/Security"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex-1 overflow-x-hidden">
                <Hero />
                <LogoCloud />
                <Features />
                <ValuePropositions />
                <HowItWorks />
                <Testimonials />
                <Stats />
                <Integrations />
                <Security />
                <CTA />
            </main>
            <Footer />
        </>
    )
}
