'use client'

import { useEffect, useRef, useState } from 'react'

type CardSize = 'large' | 'medium' | 'small'
type CardStatus = 'completed' | 'in-progress' | 'upcoming' | 'vision'

type BentoCard = {
    year: string
    title: string
    description: string
    status: CardStatus
    size: CardSize
}

// Flattened data with editorial size assignments based on milestone importance
const bentoCards: BentoCard[] = [
    // 2021 - Genesis
    {
        year: "2021",
        title: "XDAO v1 — First Deployment",
        description: "Launched on BNB Chain as a self-funded experiment. Won the Binance Hackathon and proved that demand for accessible DAO infrastructure was real.",
        status: "completed",
        size: "large"
    },
    {
        year: "2021",
        title: "XDAO v2 — EVM Infrastructure",
        description: "Rebuilt from the ground up on Ethereum, BNB Chain, and Polygon with native multi-chain support. Expanded to 40+ EVM blockchains — the broadest deployment coverage in the category.",
        status: "completed",
        size: "medium"
    },
    // 2022 - Financial Primitives
    {
        year: "2022",
        title: "Crowdfunding Module",
        description: "Enabled communities to raise capital directly into DAO treasuries through LP token issuance — turning DAOs into full-cycle financial instruments, not just governance structures.",
        status: "completed",
        size: "medium"
    },
    {
        year: "2022",
        title: "DeFi Integration via WalletConnect",
        description: "Opened DAO treasuries to the entire DeFi ecosystem. Any protocol, any chain, managed from a single organizational layer.",
        status: "completed",
        size: "small"
    },
    {
        year: "2022",
        title: "Polygon & BNB Chain Education Programs",
        description: "Structured onboarding campaigns that introduced tens and hundreds of thousands of users to DAO treasury management. XDAO became the fastest-growing protocol in both ecosystems.",
        status: "completed",
        size: "small"
    },
    // 2023 - Product Maturity
    {
        year: "2023",
        title: "XDAO Interface v3",
        description: "A complete redesign focused on simplicity. Reduced time-to-DAO and made the product accessible to founders with no blockchain background.",
        status: "completed",
        size: "medium"
    },
    // 2024 - Legal Infrastructure
    {
        year: "2024",
        title: "TONxDAO — Gamified Onboarding",
        description: "Launched a Telegram Mini App combining education and community engagement. Over 12 million users experienced DAO concepts in an accessible, native Telegram format.",
        status: "completed",
        size: "large"
    },
    {
        year: "2025",
        title: "Legal Module in Telegram",
        description: "Introduced binding agreement functionality inside Telegram chats — the first step toward making DAO participation legally enforceable in the real world.",
        status: "completed",
        size: "medium"
    },
    {
        year: "2025",
        title: "XDAO Labs Network",
        description: "Established a structured network of DAO cells operating under a unified parent organization, creating the blueprint for federated digital entities.",
        status: "completed",
        size: "small"
    },
    // 2025 - TON Ecosystem
    {
        year: "2025",
        title: "XDAO TON — On-Chain DAO Builder",
        description: "Deployed full treasury management infrastructure natively on TON, making it available to Telegram's global user base without leaving the messenger.",
        status: "completed",
        size: "medium"
    },
    {
        year: "2025",
        title: "TON Crowdfunding Module",
        description: "Merged social coordination with on-chain capital operations — communities can now raise, manage, and deploy funds collectively inside Telegram.",
        status: "completed",
        size: "small"
    },
    // 2026 - In Progress
    {
        year: "2026",
        title: "XDAO on Solana — US Market Entry",
        description: "Building compliant DAO infrastructure for the US market. Solana brings XDAO to organizations that require institutional-grade security, upgradable architecture, and regulatory alignment for digital asset management.",
        status: "in-progress",
        size: "large"
    },
    {
        year: "2026",
        title: "Compliance-Grade Crowdfunding",
        description: "A capital-raising module designed specifically to meet US regulatory standards — enabling investment clubs, family offices, and emerging funds to raise capital on-chain with legal confidence.",
        status: "in-progress",
        size: "medium"
    },
    {
        year: "2026",
        title: "Cross-Chain Architecture — Foundation",
        description: "Beginning the architectural work for a unified management layer across all major blockchain ecosystems. The goal: a single interface where any organization can manage any digital asset, regardless of which chain it lives on.",
        status: "in-progress",
        size: "small"
    },
    {
        year: "2026",
        title: "Compliance Stack On-Chain",
        description: "Full US regulatory infrastructure built into the protocol from day one — identity verification, transaction monitoring, tax attestation, and legally binding agreement signing, all on-chain.",
        status: "in-progress",
        size: "medium"
    },
    {
        year: "2026",
        title: "Regulation-Compliant Crowdfunding",
        description: "Capital raising under US securities exemptions with access control, soft/hard caps, investor whitelisting, and automatic refund mechanics built into the smart contract layer.",
        status: "in-progress",
        size: "small"
    },
    // 2027-2028 - Upcoming
    {
        year: "2027–2028",
        title: "Unified Cross-Chain Dashboard",
        description: "One interface for every blockchain. Organizations stop thinking in terms of chains and start thinking in terms of strategy. XDAO handles the complexity underneath.",
        status: "upcoming",
        size: "large"
    },
    {
        year: "2027–2028",
        title: "Enterprise Treasury Layer",
        description: "Dedicated infrastructure for large organizations: family offices, investment funds, and corporate treasury teams. Automated compliance, multi-signature governance, and white-label deployment for institutions that need digital asset operations at scale.",
        status: "upcoming",
        size: "medium"
    },
    {
        year: "2027–2028",
        title: "Embedded Legal Infrastructure",
        description: "Deep integration of legal and compliance tooling directly into the DAO layer — so that forming and operating a digital organization becomes as straightforward as opening a bank account.",
        status: "upcoming",
        size: "small"
    },
    {
        year: "2027–2028",
        title: "Merchant & Payments Infrastructure",
        description: "On-chain invoicing, payment processing, recurring subscriptions, and storefront capabilities — DAOs operating as fully functional business entities.",
        status: "upcoming",
        size: "medium"
    },
    {
        year: "2027–2028",
        title: "Distribution Module",
        description: "Automated dividend distribution to token holders with round-based payouts, tax compliance enforcement, and fully transparent on-chain claim records.",
        status: "upcoming",
        size: "small"
    },
    // 2029-2031 - Vision
    {
        year: "2029–2031",
        title: "DAOs as Standard Corporate Infrastructure",
        description: "The same way organizations adopted cloud computing, they will adopt digital treasury management. XDAO is building toward a world where every serious organization — from a two-person fund to a multinational — operates part of its financial life through a DAO.",
        status: "vision",
        size: "large"
    },
    // 2032-2035 - Vision
    {
        year: "2032–2035",
        title: "From Tool to Ecosystem",
        description: "XDAO evolves from a platform into foundational infrastructure: open, composable, and interoperable with the broader digital economy. The organizations built on XDAO today are the early nodes of a much larger network.",
        status: "vision",
        size: "medium"
    },
    {
        year: "2032–2035",
        title: "Digital Sovereignty for Every Organization",
        description: "Ultimately, XDAO's mission is simple: any group of people, anywhere in the world, should be able to pool resources, govern them transparently, and act collectively — without depending on banks, intermediaries, or borders.",
        status: "vision",
        size: "medium"
    },
]

function BentoCardComponent({
    card,
    index,
    isVisible
}: {
    card: BentoCard
    index: number
    isVisible: boolean
}) {
    const isCompleted = card.status === 'completed'

    return (
        <div
            className={`
                inline-block w-full mb-4 break-inside-avoid
                transition-all duration-500 ease-out
                ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }
            `}
            style={{
                transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                perspective: '1000px'
            }}
        >
            <div
                className="relative w-full h-[180px] group"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Side */}
                <div
                    className={`
                        absolute inset-0 rounded-2xl border-2 p-5 md:p-6
                        flex flex-col justify-center
                        transition-transform duration-500 ease-out
                        group-hover:[transform:rotateY(180deg)]
                        ${isCompleted
                            ? 'bg-[#003bb9] border-[#003bb9]'
                            : 'bg-white border-[#003bb9]'
                        }
                    `}
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {/* In-progress indicator */}
                    {card.status === 'in-progress' && (
                        <span className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#e6ff01] text-black text-xs font-medium">
                            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                            Active
                        </span>
                    )}

                    {/* Year */}
                    <span className={`
                        text-3xl md:text-4xl font-bold mb-2
                        ${isCompleted ? 'text-white/60' : 'text-[#003bb9]/40'}
                    `}>
                        {card.year}
                    </span>

                    {/* Title */}
                    <h4 className={`
                        font-bold text-base md:text-lg leading-tight
                        ${isCompleted ? 'text-white' : 'text-black'}
                    `}>
                        {card.title}
                    </h4>
                </div>

                {/* Back Side */}
                <div
                    className={`
                        absolute inset-0 rounded-2xl border-2 p-5 md:p-6
                        flex flex-col justify-center
                        transition-transform duration-500 ease-out
                        [transform:rotateY(180deg)]
                        group-hover:[transform:rotateY(360deg)]
                        ${isCompleted
                            ? 'bg-[#003bb9] border-[#003bb9]'
                            : 'bg-white border-[#003bb9]'
                        }
                    `}
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <p className={`
                        text-sm leading-relaxed
                        ${isCompleted ? 'text-white/90' : 'text-gray-600'}
                    `}>
                        {card.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export function Roadmap() {
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    // Intersection observer for scroll animations
    useEffect(() => {
        const observers: IntersectionObserver[] = []

        cardRefs.current.forEach((cardEl, index) => {
            if (!cardEl) return

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleCards(prev => new Set([...Array.from(prev), index]))
                        }
                    })
                },
                {
                    rootMargin: '0px 0px -10% 0px',
                    threshold: 0.1
                }
            )

            observer.observe(cardEl)
            observers.push(observer)
        })

        return () => {
            observers.forEach(observer => observer.disconnect())
        }
    }, [])

    return (
        <>
            <h2 id="roadmap" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-black !mt-24 mb-4 scroll-mt-32">
                Roadmap
            </h2>

            <p className="text-lg text-gray-600 mb-12">
                Every card is a bet we made. Hover to see what's behind each one.
            </p>

            {/* Masonry Layout with CSS Columns */}
            <div className="columns-1 md:columns-2 gap-4">
                {bentoCards.map((card, index) => (
                    <div
                        key={`${card.year}-${card.title}`}
                        ref={(el) => { cardRefs.current[index] = el }}
                    >
                        <BentoCardComponent
                            card={card}
                            index={index}
                            isVisible={visibleCards.has(index)}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
