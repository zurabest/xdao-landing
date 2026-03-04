"use client";

interface Logo {
    id: string;
    description: string;
    image: string;
    className?: string;
    soon?: boolean;
}

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

const Logos3 = ({
    heading = "Trusted by these companies",
    logos = [],
}: Logos3Props) => {
    return (
        <section>
            <div className="container-bt pb-5">
                <h1 className="text-label text-bt-gray-text uppercase tracking-wider font-medium mb-4 text-center">
                    {heading}
                </h1>
            </div>
            <div
                className="relative flex overflow-hidden pt-2 pb-8"
                style={{
                    // @ts-ignore
                    "--animation-duration": "10s",
                    "--animation-direction": "normal",
                }}
            >
                <div
                    className="flex min-w-full shrink-0 flex-nowrap gap-12 items-center justify-start pr-12 will-change-transform"
                    style={{
                        animation: "marquee 60s linear infinite",
                    }}
                >
                    {logos.map((logo, idx) => (
                        <div key={`${logo.id}-${idx}`} className="relative flex flex-col items-center justify-center">
                            <img
                                src={logo.image}
                                alt={logo.description}
                                className={logo.className}
                            />
                            {logo.soon && (
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                                    SOON
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                <div
                    aria-hidden="true"
                    className="flex min-w-full shrink-0 flex-nowrap gap-12 items-center justify-start pr-12 will-change-transform"
                    style={{
                        animation: "marquee 60s linear infinite",
                    }}
                >
                    {logos.map((logo, idx) => (
                        <div key={`${logo.id}-duplicate-${idx}`} className="relative flex flex-col items-center justify-center">
                            <img
                                src={logo.image}
                                alt={logo.description}
                                className={logo.className}
                            />
                            {logo.soon && (
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                                    SOON
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent dark:from-background"></div>
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent dark:from-background"></div>
            </div>
        </section>
    );
};

export { Logos3 };
