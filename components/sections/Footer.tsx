import Link from 'next/link'
import { XdaoLogo } from '@/components/ui/XdaoLogo'

const columns = [
    {
        title: 'PRODUCT',
        links: [
            { label: 'EVM', href: '/1' },
            { label: 'TON (Telegram)', href: 'https://app.xdao.app/1/vesting' },
            { label: 'Docs', href: 'https://docs.xdao.app/' },
            { label: 'Vesting', href: '/1/vesting' },
        ],
    },
    {
        title: 'COMPANY',
        links: [
            { label: 'About', href: '/about' },
            { label: 'Terms of Use', href: '/1/terms' },
            { label: 'Privacy Policy', href: '/1/privacy' },
        ],
    },
    {
        title: 'COMMUNITY',
        links: [
            { label: 'Telegram', href: 'https://t.me/xdaoapp' },
            { label: 'X (Twitter)', href: 'https://x.com/xdaoapp' },
            { label: 'Discord', href: 'https://discord.com/invite/xdaoapp' },
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
                        <Link href="/" className="block pointer-events-none">
                            <XdaoLogo className="h-12 w-auto brightness-0 invert opacity-60" />
                        </Link>
                    </div>

                    {/* Link columns */}
                    {columns.map((column, index) => (
                        <div key={index}>
                            <h4 className="text-xl font-normal text-white/60 mb-12 uppercase tracking-widest">
                                {column.title}
                            </h4>
                            <ul className="space-y-4">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="text-base text-white/60 hover:text-white transition-colors"
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
                <div className="mt-20 pt-8 border-t border-white/10">
                    <p className="text-sm text-white/40">
                        Copyright © 2021-2026 XDAO, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
