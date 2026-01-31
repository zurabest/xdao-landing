"use client"

export function LogoCloud() {
    const logos = [
        "Coinbase", "Binance", "Polygon", "Aave", "Uniswap", "Gnosis"
    ]

    return (
        <section className="py-20 border-y border-white/5 bg-black/20">
            <div className="container px-4 md:px-6 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
                    Trusted by leading DAOs and Protocols
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo) => (
                        <div key={logo} className="text-xl font-bold font-mono text-white/60 hover:text-white transition-colors cursor-default">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
