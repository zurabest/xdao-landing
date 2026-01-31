"use client"

export function Integrations() {
    const tools = [
        { name: "Snapshot", category: "Voting" },
        { name: "Gnosis Safe", category: "Treasury" },
        { name: "ENS", category: "Identity" },
        { name: "Discord", category: "Community" },
        { name: "Telegram", category: "Community" },
        { name: "Github", category: "Development" },
    ]

    return (
        <section className="py-24 border-b border-white/10 bg-black/40">
            <div className="container px-4 md:px-6 text-center">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Works with your favorite tools</h2>
                    <p className="text-muted-foreground">Seamless integrations for a smooth workflow</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {tools.map((tool) => (
                        <div key={tool.name} className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20 group cursor-pointer">
                            <div className="w-12 h-12 mb-4 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-colors flex items-center justify-center">
                                <span className="text-lg font-bold text-indigo-300">{tool.name[0]}</span>
                            </div>
                            <span className="font-semibold text-sm">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
