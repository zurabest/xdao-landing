import Image from 'next/image'

export function Testimonial() {
    return (
        <section className="py-24">
            <div className="container-bt">
                <div className="divider mb-16" />

                <blockquote className="text-center">
                    <p className="text-heading md:text-display font-normal italic max-w-4xl mx-auto leading-tight">
                        &quot;I&apos;ve never seen a governance transformation like the one
                        that incorporates XDAO into &apos;mainstream DAO&apos; processes before.
                        It&apos;s astonishing.&quot;
                    </p>

                    <footer className="mt-12 flex flex-col items-center">
                        <div className="relative w-12 h-12 mb-4">
                            <Image
                                src="/avatars/testimonial-1.png"
                                alt="Sarah Chen"
                                fill
                                className="rounded-full object-cover grayscale"
                            />
                        </div>
                        <cite className="not-italic text-center">
                            <span className="text-body font-medium block">SARAH CHEN</span>
                            <span className="text-small text-bt-gray-text tracking-wider uppercase mt-1 block">
                                ENGINEERING LEAD AT COMPOUND
                            </span>
                        </cite>
                    </footer>
                </blockquote>

                <div className="divider mt-16" />
            </div>
        </section>
    )
}
