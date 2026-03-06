'use client'

import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'

export function DashboardPreview() {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container-bt" style={{ maxWidth: '1400px' }}>
                <FadeIn>
                    <p className="text-[24px] md:text-[29px] lg:text-[38px] text-[#000000] font-normal max-w-5xl mx-auto text-center" style={{ lineHeight: 1.2 }}>
                        Create a digital treasury, set governance rules, and manage payroll — no code required.
                    </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <p className="text-[24px] md:text-[29px] lg:text-[38px] text-[#003bb9] font-normal max-w-5xl mx-auto text-center mt-6" style={{ lineHeight: 1.2 }}>
                        Live in under 1 minute.
                    </p>
                </FadeIn>
                <div className="relative flex justify-center items-end mt-16">
                    <FadeIn delay={0.2} className="w-full max-w-5xl">
                        <Image
                            src="/dashboard-mockup.png"
                            alt="XDAO Dashboard Interface"
                            width={4340}
                            height={2860}
                            className="w-full h-auto"
                            priority
                        />
                    </FadeIn>
                    <FadeIn delay={1.0} direction="right" className="w-56 md:w-64 lg:w-80 -ml-32 md:-ml-40 lg:-ml-56 mb-12 md:mb-16 lg:mb-24 flex-shrink-0">
                        <Image
                            src="/iphone-mockup.png"
                            alt="XDAO Mobile App"
                            width={1530}
                            height={3036}
                            className="w-full h-auto"
                        />
                    </FadeIn>
                </div>

                <FadeIn delay={1.2}>
                    <p className="text-[18px] md:text-[20px] lg:text-[24px] text-[#000000] font-normal max-w-4xl mx-auto text-center mt-12" style={{ lineHeight: 1.4 }}>
                        Available on desktop and mobile — including as a Telegram Mini App.
                    </p>
                </FadeIn>
            </div>
        </section>
    )
}
