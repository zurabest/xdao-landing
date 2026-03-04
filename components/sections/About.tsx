import Link from 'next/link'

export function About() {
    return (
        <section className="py-16 bg-white">
            <div className="container-bt" style={{ maxWidth: '1400px' }}>
                <p className="text-[24px] md:text-[29px] lg:text-[38px] text-black font-normal max-w-5xl" style={{ lineHeight: 1.2 }}>
                    XDAO is a no-code platform for creating digital treasuries, setting governance rules, and managing payroll — for teams of any size. <span className="text-[#003bb9]">Live in under 1 minute.</span>
                </p>
                <Link
                    href="https://docs.xdao.app/"
                    target="_blank"
                    className="inline-block mt-8 px-6 py-3 bg-[#003bb9] text-white font-medium rounded-full hover:bg-[#002d8f] transition-colors"
                >
                    Documentation
                </Link>
            </div>
        </section>
    )
}
