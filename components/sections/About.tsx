'use client'

import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'

const auditors = [
    { name: 'Quantstamp', logo: '/auditors/quantstamp.svg' },
    { name: 'CertiK', logo: '/auditors/certik.svg' },
    { name: 'Hacken', logo: '/auditors/hacken.svg' },
    { name: 'Pessimistic', logo: '/auditors/pessimistic.svg' },
]

export function About() {
    return (
        <section className="py-24" style={{ backgroundColor: '#e6ff01' }}>
            <div className="container-bt" style={{ maxWidth: '1400px' }}>
                <FadeIn>
                    <p className="text-[24px] md:text-[29px] lg:text-[38px] text-black font-normal text-center" style={{ lineHeight: 1.2 }}>
                        Independently audited by the industry's leading security firms:
                    </p>
                </FadeIn>

                <div className="mt-20 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
                    {auditors.map((auditor, index) => (
                        <FadeIn key={auditor.name} delay={0.1 * (index + 1)}>
                            <div className="h-10">
                                <Image
                                    src={auditor.logo}
                                    alt={auditor.name}
                                    width={120}
                                    height={40}
                                    className="h-full w-auto object-contain brightness-0"
                                />
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
