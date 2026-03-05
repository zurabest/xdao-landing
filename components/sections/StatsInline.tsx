'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Counter from '@/components/ui/Counter'

const stats: {
    numericValue: number
    places: (number | '.')[]
    suffix: string
    prefix: string
    label: string
    description: string
}[] = [
        {
            numericValue: 32000,
            places: [10000, 1000, 100, 10, 1],
            suffix: '+',
            prefix: '',
            label: 'DAOs Created',
            description: 'Digital organizations launched on XDAO since inception',
        },
        {
            numericValue: 55,
            places: [10, 1],
            suffix: 'M+',
            prefix: '$',
            label: 'Raised Under Management',
            description: 'Total funds raised by DAOs via the crowdfunding module',
        },
        {
            numericValue: 45,
            places: [10, 1],
            suffix: '+',
            prefix: '',
            label: 'Blockchains Supported',
            description: 'EVM-compatible networks and TON for Telegram Mini Apps',
        },
    ]

export function StatsInline() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section style={{ backgroundColor: '#E6FF00' }}>
            <div
                ref={ref}
                className="grid grid-cols-1 md:grid-cols-3"
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col px-10 py-[86px]"
                    >
                        {/* Animated number */}
                        <div className="flex items-center text-black" style={{ letterSpacing: '-1px' }}>
                            {stat.prefix && (
                                <span style={{ fontSize: 72, fontWeight: 400, lineHeight: 1 }}>
                                    {stat.prefix}
                                </span>
                            )}
                            <Counter
                                value={stat.numericValue}
                                places={stat.places}
                                fontSize={72}
                                padding={0}
                                gap={0}
                                horizontalPadding={0}
                                textColor="black"
                                fontWeight={400}
                                active={isInView}
                            />
                            {stat.suffix && (
                                <span style={{ fontSize: 72, fontWeight: 400, lineHeight: 1 }}>
                                    {stat.suffix}
                                </span>
                            )}
                        </div>

                        <div className="text-base font-bold uppercase tracking-widest text-[#000000] mt-3 mb-2">
                            {stat.label}
                        </div>
                        <div className="text-[#000000] text-xl font-light leading-snug">
                            {stat.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
