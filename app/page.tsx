import { Header } from '@/components/Header'
import { Hero } from '@/components/sections/Hero'
import { LogoCloud } from '@/components/sections/LogoCloud'
import { StatsInline } from '@/components/sections/StatsInline'
import { About } from '@/components/sections/About'
import { DashboardPreview } from '@/components/sections/DashboardPreview'
import { Features } from '@/components/sections/Features'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'
import { JsonLd } from '@/components/JsonLd'

export default function Home() {
    return (
        <>
            <JsonLd />
            <Header />
            <main className="relative z-10">
                <Hero />
                <LogoCloud />
                <StatsInline />
                <DashboardPreview />
                <Features />
                <FAQ />
                <About />
            </main>
            <Footer />
        </>
    )
}
