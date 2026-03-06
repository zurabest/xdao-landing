'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FadeIn } from '@/components/ui/FadeIn'

type FeatureItem = {
    title: string
    description: string
}

const featureItems: FeatureItem[] = [
    {
        title: "Instant DAO Deployment",
        description: "Create a fully functional digital organization in under 60 seconds. No legal paperwork, no technical setup, no intermediaries — just your team and your treasury, live on-chain.",
    },
    {
        title: "Multi-Chain Management",
        description: "Manage digital assets across 45+ blockchains. One organization, every chain — EVM, TON, Solana (soon), and beyond. Operate across multiple networks simultaneously.",
    },
    {
        title: "Capital Raising",
        description: "Launch a fundraising campaign and accept contributions directly into your DAO treasury. Set caps, whitelists, and management fees — your investors receive LP tokens automatically.",
    },
    {
        title: "On-Chain Governance",
        description: "Every decision — from fund transfers to member management — goes through a transparent voting process. No single point of control. Full accountability on-chain.",
    },
    {
        title: "DeFi Integration",
        description: "Connect your DAO treasury to any DeFi protocol. Yield strategies, liquidity pools, token swaps — all executable through a single organizational wallet with multi-sig protection.",
    },
    {
        title: "Legal Infrastructure",
        description: "Sign binding agreements inside Telegram, register your organization as a legal entity, and operate with full compliance — bridging on-chain governance with real-world enforceability.",
    },
]

export function Features() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [sectionVisible, setSectionVisible] = useState(false)

    useEffect(() => {
        if (!sectionRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSectionVisible(true)
                    }
                })
            },
            {
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1
            }
        )

        observer.observe(sectionRef.current)

        return () => observer.disconnect()
    }, [])

    // Pair items: left (0,1,2) with right (3,4,5)
    const rows = [
        { left: featureItems[0], right: featureItems[3] },
        { left: featureItems[1], right: featureItems[4] },
        { left: featureItems[2], right: featureItems[5] },
    ]

    return (
        <section id="features" className="py-16 md:py-24" style={{ backgroundColor: '#003bb9' }}>
            <div className="container-bt" style={{ maxWidth: '1400px' }}>
                <div ref={sectionRef}>
                    <table className="hidden md:table w-full border-collapse">
                        <tbody>
                            {rows.map((row, rowIndex) => (
                                <React.Fragment key={rowIndex}>
                                    <tr>
                                        <td className="w-1/2 align-top py-10 pr-12">
                                            <FadeIn delay={0.1 * rowIndex}>
                                                <div>
                                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                                                        {row.left.title}
                                                    </h3>
                                                    <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                                                        {row.left.description}
                                                    </p>
                                                </div>
                                            </FadeIn>
                                        </td>
                                        <td className="w-1/2 align-top py-10 pl-12">
                                            <FadeIn delay={0.1 * rowIndex + 0.05}>
                                                <div>
                                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
                                                        {row.right.title}
                                                    </h3>
                                                    <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                                                        {row.right.description}
                                                    </p>
                                                </div>
                                            </FadeIn>
                                        </td>
                                    </tr>
                                    {rowIndex < rows.length - 1 && (
                                        <tr>
                                            <td className="pr-12 py-4">
                                                <FadeIn delay={0.1 * rowIndex + 0.15}>
                                                    <div className="h-0.5 bg-white mt-8" />
                                                </FadeIn>
                                            </td>
                                            <td className="pl-12 py-4">
                                                <FadeIn delay={0.1 * rowIndex + 0.2}>
                                                    <div className="h-0.5 bg-white mt-8" />
                                                </FadeIn>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>

                    {/* Mobile Layout */}
                    <div className="md:hidden">
                        {featureItems.map((item, index) => (
                            <div key={index} className={index < featureItems.length - 1 ? 'pb-8 mb-8 border-b border-white/30' : ''}>
                                <FadeIn delay={0.1 * index}>
                                    <div>
                                        <h3 className="text-2xl font-normal text-white mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg text-white leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
