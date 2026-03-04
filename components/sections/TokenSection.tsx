'use client'

import { useEffect, useRef, useState } from 'react'

const utilityCards = [
    {
        title: "Access & Deployment",
        description: "Staking required to create and operate a DAO on the XDAO platform."
    },
    {
        title: "Reputation & Visibility",
        description: "Token holdings determine your DAO's rank and reach within the ecosystem."
    },
    {
        title: "Feature Unlocks",
        description: "Access legal modules, crowdfunding, and advanced infrastructure."
    },
    {
        title: "Better Terms",
        description: "Token holders get improved conditions and reduced fees across the platform."
    }
]

export function TokenSection() {
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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
        <section
            id="token"
            className="relative mt-24 scroll-mt-32"
        >
            {/* Background extends to left edge only, aligned with content on right */}
            <div
                className="absolute bg-[#003bb9] rounded-t-3xl"
                style={{
                    top: 0,
                    bottom: 0,
                    left: 'calc(-50vw + 50%)',
                    right: 0
                }}
            />
            <div className="relative z-10 text-base py-12 md:py-16 pb-20 md:pb-28 pr-6 md:pr-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight !text-white mb-8">
                    Built Into Everything We Build
                </h2>

                <p className="!text-white/90 text-lg leading-relaxed mb-6 max-w-2xl">
                    The native token is the functional layer of the XDAO ecosystem — not an add-on, but a core part of how the platform operates.
                </p>

                <p className="!text-white/90 text-lg leading-relaxed mb-6 max-w-2xl">
                    XDAO will launch its token at the right time. We believe tokens should be built on products, not the other way around. Our focus is on creating fundamental infrastructure that gives a future token real utility, real users, and a long lifecycle. When the foundation is strong enough, the token will reflect it.
                </p>

                <p className="!text-white/90 text-lg leading-relaxed mb-12 max-w-2xl">
                    We always rely on our users, our community of like-minded people, and those who believe in our product. Their trust and support are the foundation of everything we build.
                </p>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
                    {utilityCards.map((card, index) => (
                        <div
                            key={card.title}
                            ref={(el) => { cardRefs.current[index] = el }}
                            className={`
                                group relative rounded-2xl p-6 bg-white shadow-lg
                                transition-all duration-500 ease-out
                                ${visibleCards.has(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                }
                            `}
                            style={{
                                transitionDelay: visibleCards.has(index) ? `${index * 100}ms` : '0ms'
                            }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e6ff01]/10 via-transparent to-[#003bb9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Shimmer effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6ff01]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="font-bold text-xl text-black mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
