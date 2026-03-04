import Link from 'next/link'

const columns = [
    {
        title: 'RESOURCES',
        links: [
            { label: 'Documentation', href: '/docs' },
            { label: 'Integrations', href: '/integrations' },
            { label: 'Templates', href: '/templates' },
            { label: 'Changelog', href: '/changelog' },
            { label: 'For DAOs', href: '/for-daos' },
            { label: 'Articles', href: '/articles' },
        ],
    },
    {
        title: 'COMPANY',
        links: [
            { label: 'Pricing', href: '/pricing' },
            { label: 'Blog', href: '/blog' },
            { label: 'Careers', href: '/careers' },
            { label: 'Contact us', href: '/contact' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Trust center', href: '/trust' },
        ],
    },
    {
        title: 'COMMUNITY',
        links: [
            { label: 'GitHub', href: 'https://github.com/xdao' },
            { label: 'Discord', href: 'https://discord.gg/xdao' },
            { label: 'Newsletter', href: '/newsletter' },
            { label: 'X', href: 'https://x.com/xdao' },
            { label: 'YouTube', href: 'https://youtube.com/xdao' },
            { label: 'LinkedIn', href: 'https://linkedin.com/company/xdao' },
        ],
    },
]

export function Footer() {
    return (
        <footer className="py-16 bg-black text-white border-t border-white/10">
            <div className="container-bt">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Logo */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="w-10 h-10 bg-white rounded-lg mb-8 flex items-center justify-center font-display font-bold text-black text-xl">
                            X
                        </div>
                        <Link href="/" className="font-display font-semibold text-2xl hover:opacity-80 transition-opacity">
                            xdao
                        </Link>
                    </div>

                    {/* Link columns */}
                    {columns.map((column, index) => (
                        <div key={index}>
                            <h4 className="text-label text-white/60 mb-6 font-mono">
                                {column.title}
                            </h4>
                            <ul className="space-y-4">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="text-body text-white/60 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <p className="text-small text-white/40 uppercase tracking-widest font-mono">
                        COPYRIGHT ©2025 XDAO, INC.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="text-small text-white/40 hover:text-white transition-colors uppercase tracking-widest font-mono">Terms</Link>
                        <Link href="/privacy" className="text-small text-white/40 hover:text-white transition-colors uppercase tracking-widest font-mono">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
