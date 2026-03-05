import { BraintrustButton as Button } from '@/components/ui/BraintrustButton'
import { Typewriter } from '@/components/ui/typewriter-text'
import Link from 'next/link'
import PixelBlast from '@/components/ui/PixelBlast'

export function Hero() {
    return (
        <section className="relative pt-20 pb-10 md:pt-32 md:pb-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full z-0 overflow-hidden opacity-40">
                <PixelBlast
                    variant="square"
                    pixelSize={4}
                    color="#003bb9"
                    patternScale={2}
                    patternDensity={1}
                    pixelSizeJitter={0}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid={false}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.5}
                    edgeFade={0.25}
                    transparent
                    logoSrc="/xdao-icon.svg"
                />
            </div>


            <div className="container-bt relative z-10" style={{ maxWidth: '1400px' }}>



                {/* Crowdfunding pill */}
                <a
                    href="https://t.me/xdao_ton_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold text-black"
                    style={{ backgroundColor: '#E6FF00' }}
                >
                    Crowdfunding module is live on Telegram
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 10.5L10.5 2.5M10.5 2.5H4.5M10.5 2.5V8.5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>

                {/* Heading - exact Braintrust typography */}
                <h1 className="text-display font-semibold max-w-5xl tracking-tight">
                    Treasury, Future-Ready
                </h1>

                {/* Subheading */}
                <p className="mt-4 text-subhead text-[#000000] font-light min-h-[56px] md:min-h-[64px]" style={{ maxWidth: '38.4rem' }}>
                    <Typewriter
                        text={[
                            "XDAO is digital treasury management that scales from family funds to global enterprise",
                            "XDAO is real-time visibility into every asset, every transaction, and every approval step",
                            "XDAO is the control layer between your boardroom decisions and digital asset execution",
                            "XDAO is one unified dashboard replacing fragmented tools and manual reconciliation work",
                            "XDAO is modular by design — scale from basic treasury to full financial infrastructure"
                        ]}
                        speed={33} // ~90 chars * 33ms = ~3 seconds
                        delay={3000} // 3 seconds before next phrase
                        loop={true}
                        cursor="" // remove cursor
                    />
                </p>

                {/* CTAs */}
                <div className="mt-20 flex flex-wrap gap-4">
                    <Link href="/1" passHref>
                        <Button variant="primary" className="bg-[#003bb9] text-white hover:bg-[#002f94] rounded-full border-none">
                            Desktop (40+ EVM Chains)
                        </Button>
                    </Link>
                    <Link href="https://t.me/xdao_ton_bot" target="_blank" rel="noopener noreferrer" passHref>
                        <Button variant="primary" className="bg-transparent text-[#003bb9] hover:bg-[#003bb9]/10 border-2 border-[#003bb9] rounded-full shadow-none">
                            Telegram (TON)
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    )
}
