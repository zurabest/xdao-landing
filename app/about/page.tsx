import { Header } from '@/components/Header'
import { Footer } from '@/components/sections/Footer'
import { BoardSection } from '@/components/sections/BoardSection'
import { GlobalStructure } from '@/components/sections/GlobalStructure'
import { Roadmap } from '@/components/sections/Roadmap'
import { TokenSection } from '@/components/sections/TokenSection'
import { AboutSidebar } from '@/components/sections/AboutSidebar'
import { Tweet } from 'react-tweet'
import PixelBlast from '@/components/ui/PixelBlast'

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="relative z-10">
                {/* PixelBlast Banner */}
                <div className="w-full h-48 md:h-60 relative overflow-hidden opacity-70">
                    <PixelBlast
                        variant="square"
                        pixelSize={2}
                        color="#003bb9"
                        patternScale={1.2}
                        patternDensity={1.3}
                        pixelSizeJitter={0.15}
                        enableRipples
                        rippleSpeed={0.6}
                        rippleThickness={0.15}
                        rippleIntensityScale={1.8}
                        liquid={false}
                        liquidStrength={0.12}
                        liquidRadius={1.2}
                        liquidWobbleSpeed={5}
                        speed={2.5}
                        edgeFade={0.1}
                        transparent
                        logoSrc="/xdao-icon.svg"
                        logoStrength={1.2}
                        logoCycleSeconds={4}
                        className="absolute inset-0"
                    />
                </div>

                <section className="pt-12 md:pt-16 bg-white overflow-x-clip">
                    <div className="container-bt overflow-visible">
                        <div className="flex gap-12 overflow-visible">
                            {/* Main Content */}
                            <div className="flex-1 max-w-3xl overflow-visible">
                                <h1 id="story" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-black mb-8 scroll-mt-32">
                                    The Story of XDAO
                                </h1>

                                <div className="space-y-9 text-lg text-[#000000] leading-relaxed overflow-visible">
                            <p>
                                XDAO began in <strong>2020</strong> as a bold experiment — a self-funded bet on a simple but powerful idea: <em>make it effortless for anyone, anywhere, to create and manage a digital organization.</em>
                            </p>

                            <p>
                                On <strong>April 21, 2021</strong>, the first version launched on BNB Chain. The response was immediate — XDAO won the <a href="https://dorahacks.io/grant/ree/winners" target="_blank" rel="noopener noreferrer" className="text-[#003bb9] underline hover:opacity-80 transition-opacity">Binance Hackathon</a> and proved the concept had real demand. By <strong>November 2021</strong>, version 2.0 was unveiled at a launch event in <em>Palo Alto, California</em>, marking the project's arrival on the global stage.
                            </p>

                            <p>
                                From there, growth came fast. XDAO ran educational campaigns on Polygon and BNB Chain, becoming the <strong>fastest-growing protocol</strong> in each ecosystem.
                            </p>

                            <div className="bg-[#e6ff01] p-6 my-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                    <Tweet id="1551601055334539265" />
                                    <Tweet id="1591050445904302080" />
                                </div>
                            </div>

                            <p>
                                <strong>Over 20 grants and awards</strong> followed — from BNB Chain, Polygon, NEAR Foundation, TRON, Astar, Optimism, Avalanche, and more.
                            </p>

                            <p>
                                Today, XDAO is a full-scale international ecosystem supporting <strong>over 45 blockchains</strong>, with more than <strong>32,000 organizations</strong> created on the platform. Through our Telegram-based educational program, <strong>over 12 million users</strong> have completed onboarding training and been guided to start using XDAO TON — making it <em>one of the largest DAO adoption initiatives in Web3</em>.
                            </p>

                            <div className="bg-[#e6ff01] p-6 my-8">
                                <a
                                    href="https://cointelegraph.com/news/xdao-labs-ton-telegram-dao-legal-status-367k"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow no-underline bg-white"
                                >
                                    <img
                                        src="https://s3.cointelegraph.com/uploads/2025-03/0195a8d6-5eac-7452-b4a3-874dc273c84f"
                                        alt="TON-based XDAO protocol grants legal status to 367k DAOs"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Cointelegraph</p>
                                        <h3 className="text-lg font-semibold text-black mb-2">TON-based XDAO protocol grants legal status to 367k DAOs</h3>
                                        <p className="text-sm text-gray-600">XDAO Labs has enabled over 367,000 decentralized autonomous organizations to achieve legal recognition through its DAO creation protocol built on The Open Network.</p>
                                    </div>
                                </a>
                            </div>

                            <h2 id="vision" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-black !mt-24 mb-8 scroll-mt-32">
                                Our Vision
                            </h2>

                            <p>
                                At XDAO, we believe the future of finance and coordination is <strong>transparent, borderless, and collectively owned</strong>. The tools that once required armies of lawyers, accountants, and intermediaries should be accessible to <em>anyone with an internet connection</em> — whether they're managing a crypto treasury in New York, building a charitable foundation in Lagos, or launching a community fund in São Paulo.
                            </p>

                            <blockquote className="border-l-4 border-[#003bb9] pl-6 pr-6 py-4 my-8 bg-gray-50">
                                <p className="text-xl italic text-black leading-relaxed mb-4">
                                    "It's time to rethink what 'DAO' actually means. Not <em>Decentralized</em> Autonomous Organizations — because decentralization alone, as the industry has learned, is not enough. Without structure and autonomy, it becomes noise. But <strong>Digital Autonomous Organizations</strong>: structured, reliable, and purposeful entities that operate on-chain with the same discipline you'd expect from any serious institution."
                                </p>
                                <footer className="flex items-center gap-3">
                                    <img
                                        src="/avatars/vladislav.png"
                                        alt="Vladislav Shavlidze"
                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-[#003bb9]"
                                    />
                                    <div>
                                        <cite className="not-italic font-semibold text-[#000000]">Vladislav Shavlidze</cite>
                                        <p className="text-sm text-[#000000]">Co-Founder & CEO, XDAO</p>
                                    </div>
                                </footer>
                            </blockquote>

                            <p>
                                DAOs are the infrastructure for that future. They enable people to <strong>pool resources, govern shared assets, and operate at scale</strong> — without trusting a single person, institution, or intermediary. That's why XDAO goes beyond governance frameworks to focus on what organizations actually need: <em>secure, cross-chain treasury management</em> with the reliability and simplicity that real teams demand.
                            </p>

                            <h2 id="mission" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-black !mt-24 mb-8 scroll-mt-32">
                                Our Mission
                            </h2>

                            <p className="font-semibold text-black">
                                We're building toward a world where:
                            </p>

                            <div className="space-y-5">
                                <div className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 w-8 h-8 bg-[#003bb9] rounded-full flex items-center justify-center">
                                        <span className="w-3 h-3 bg-[#e6ff01] rounded-full"></span>
                                    </span>
                                    <p><strong>Any group of people</strong> can form a digital organization in minutes, with no legal overhead and full on-chain accountability</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 w-8 h-8 bg-[#003bb9] rounded-full flex items-center justify-center">
                                        <span className="w-3 h-3 bg-[#e6ff01] rounded-full"></span>
                                    </span>
                                    <p><strong>Treasuries are managed intelligently</strong> — with AI-powered tooling that reduces operational complexity and human error</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 w-8 h-8 bg-[#003bb9] rounded-full flex items-center justify-center">
                                        <span className="w-3 h-3 bg-[#e6ff01] rounded-full"></span>
                                    </span>
                                    <p><strong>Real-world activities</strong> — from charitable initiatives to tokenized physical assets — can be anchored in transparent, decentralized infrastructure</p>
                                </div>
                            </div>

                            <p className="text-xl mt-8 text-black font-medium">
                                This isn't just a product roadmap. It's a bet on a <em>fundamental shift</em> in how humans organize, collaborate, and build wealth together.
                            </p>

                            <BoardSection />

                            <GlobalStructure />

                            <Roadmap />

                            <TokenSection />
                                </div>
                            </div>

                            {/* Sticky Sidebar Navigation */}
                            <AboutSidebar />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
