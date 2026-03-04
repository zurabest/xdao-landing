import { Header } from '@/components/Header'
import { Hero } from '@/components/sections/Hero'
import { LogoCloud } from '@/components/sections/LogoCloud'
import { StatsInline } from '@/components/sections/StatsInline'
import { FeatureTabs } from '@/components/sections/FeatureTabs'
import { ValueProp } from '@/components/sections/ValueProp'
import { FeaturesGrid } from '@/components/sections/FeaturesGrid'
import { Testimonial } from '@/components/sections/Testimonial'
import { Stats } from '@/components/sections/Stats'
import { About } from '@/components/sections/About'
import { Security } from '@/components/sections/Security'
import { BlogLinks } from '@/components/sections/BlogLinks'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'
import { FlickeringGrid } from '@/components/ui/flickering-grid'

export default function Home() {
    return (
        <>
            <Header />
            <main className="relative z-10">
                <Hero />
                <LogoCloud />
                <StatsInline />
                <About />
                <FeatureTabs />
                <ValueProp />
                <FeaturesGrid />
                <Testimonial />
                <Stats />
                <Security />
                <BlogLinks />
                <CTA />
            </main>
            <Footer />
        </>
    )
}
