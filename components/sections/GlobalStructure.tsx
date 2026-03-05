'use client'

export function GlobalStructure() {
    return (
        <>
            <h2 id="structure" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-black !mt-24 mb-8 scroll-mt-32">
                Global Structure
            </h2>

            <p className="mb-6">
                XDAO operates through a <strong>global corporate structure</strong> designed for regulatory clarity and international reach. Our headquarters in the United States provides a strong legal foundation, while our Singapore presence enables seamless operations across Asia-Pacific markets.
            </p>

            <p className="mb-12">
                This structure allows us to <strong>serve clients worldwide</strong> while maintaining compliance with local regulations and providing the stability that institutional partners require.
            </p>

            <div className="flex flex-col items-center">
                {/* Headquarters - USA - Full Width */}
                <div className="group relative w-full  p-8 text-white text-center overflow-hidden  transition-all duration-500">
                    {/* Base background */}
                    <div className="absolute inset-0 bg-[#003bb9] transition-opacity duration-500"></div>

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#003bb9] via-[#0052cc] to-[#003bb9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6ff01]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-2">
                            Headquarters
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            XDAO, Inc.
                        </h3>
                        <p className="text-white/70 text-sm">
                            Delaware C Corporation · United States
                        </p>
                    </div>
                </div>

                {/* Connecting line */}
                <div className="w-0.5 h-10 bg-[#003bb9]"></div>

                {/* Representative Office - Singapore - Centered, smaller */}
                <div className="group relative w-full max-w-sm  p-6 text-center overflow-hidden  transition-all duration-500">
                    {/* Base background */}
                    <div className="absolute inset-0 bg-white transition-opacity duration-500"></div>

                    {/* Border */}
                    <div className="absolute inset-0  border-2 border-[#003bb9]"></div>

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#003bb9]/5 via-transparent to-[#e6ff01]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden ">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6ff01]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <p className="text-[#003bb9] text-xs font-semibold uppercase tracking-wider mb-2">
                            Representative Office
                        </p>
                        <h3 className="text-lg font-bold text-[#000000] mb-1">
                            XGROUP GLOBAL PTE LTD
                        </h3>
                        <p className="text-[#000000] text-sm">
                            Singapore
                        </p>
                    </div>
                </div>
            </div>

            <p className="mt-12">
                Both entities work in coordination to deliver <strong>unified treasury management solutions</strong> to organizations regardless of their geographic location. Our structure is built for growth — as XDAO expands into new markets, we will continue to establish local presences that meet the highest standards of regulatory compliance.
            </p>
        </>
    )
}
