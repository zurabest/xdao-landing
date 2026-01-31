import Link from "next/link"

export function Footer() {
    const links = {
        Product: ["Features", "Pricing", "Integrations", "Changelog"],
        Developers: ["Documentation", "API Reference", "GitHub", "SDK"],
        Resources: ["Blog", "Guides", "Community", "Support"],
        Company: ["About", "Careers", "Press", "Contact"],
        Legal: ["Privacy Policy", "Terms of Service"]
    }

    return (
        <footer className="py-12 md:py-16 border-t border-white/10 bg-black/40 text-sm">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                                <span className="font-bold text-white text-lg">X</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight">XDAO</span>
                        </Link>
                        <p className="text-muted-foreground mb-6 max-w-xs">
                            The platform for creating and managing Decentralized Autonomous Organizations.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer" />
                            <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer" />
                            <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer" />
                        </div>
                    </div>

                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="font-semibold text-foreground mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground">
                    <p>© {new Date().getFullYear()} XDAO. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-foreground">Privacy</Link>
                        <Link href="#" className="hover:text-foreground">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
