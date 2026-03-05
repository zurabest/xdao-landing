import Image from 'next/image'

const auditors = [
    { name: 'Quantstamp', logo: '/auditors/quantstamp.svg' },
    { name: 'CertiK', logo: '/auditors/certik.svg' },
    { name: 'Hacken', logo: '/auditors/hacken.svg' },
    { name: 'Pessimistic', logo: '/auditors/pessimistic.svg' },
]

export function About() {
    return (
        <section className="py-24 bg-white">
            <div className="container-bt" style={{ maxWidth: '1400px' }}>
                <p className="text-[24px] md:text-[29px] lg:text-[38px] text-[#000000] font-normal max-w-5xl" style={{ lineHeight: 1.2 }}>
                    Create a digital treasury, set governance rules, and manage payroll — no code required.</p>
                <p className="text-[24px] md:text-[29px] lg:text-[38px] text-[#003bb9] font-normal max-w-5xl mt-6" style={{ lineHeight: 1.2 }}>Live in under 1 minute.
                </p>

                <p className="mt-12 text-[#000000] text-lg">
                    Independently audited by the industry's leading security firms.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
                    {auditors.map((auditor) => (
                        <div key={auditor.name} className="h-10">
                            <Image
                                src={auditor.logo}
                                alt={auditor.name}
                                width={120}
                                height={40}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
