'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { XdaoLogo } from '@/components/ui/XdaoLogo'
import { MegaMenu } from '@/components/ui/mega-menu'

const aboutSubmenu = [
    { label: 'The Story', href: '/about#story' },
    { label: 'Our Vision', href: '/about#vision' },
    { label: 'Our Mission', href: '/about#mission' },
    { label: 'Board', href: '/about#board' },
    { label: 'Structure', href: '/about#structure' },
    { label: 'Roadmap', href: '/about#roadmap' },
    { label: 'Token', href: '/about#token' },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="relative z-40 bg-transparent border-b border-transparent transition-all duration-200">
            <div className="container-bt flex items-center justify-between py-8" style={{ maxWidth: '1400px' }}>
                {/* Logo */}
                <Link href="/" className="flex items-center shrink-0">
                    <XdaoLogo className="h-12 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <MegaMenu
                        label="About"
                        href="/about"
                        items={aboutSubmenu}
                    />
                    <Link href="/pricing" className="text-body hover:text-bt-gray-text transition-colors">
                        Pricing
                    </Link>
                    <Link href="/docs" className="text-body hover:text-bt-gray-text transition-colors">
                        Docs
                    </Link>
                    <Link href="/blog" className="text-body hover:text-bt-gray-text transition-colors">
                        Blog
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white border-b border-bt-gray-border md:hidden p-6 shadow-lg">
                    <nav className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <Link href="/about" className="text-body font-medium mb-2" onClick={() => setIsOpen(false)}>
                                About
                            </Link>
                            <div className="pl-4 flex flex-col gap-2 border-l-2 border-[#003bb9]/20">
                                {aboutSubmenu.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-sm text-black/70 hover:text-[#003bb9] transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Link href="/pricing" className="text-body font-medium" onClick={() => setIsOpen(false)}>
                            Pricing
                        </Link>
                        <Link href="/docs" className="text-body font-medium" onClick={() => setIsOpen(false)}>
                            Docs
                        </Link>
                        <Link href="/blog" className="text-body font-medium" onClick={() => setIsOpen(false)}>
                            Blog
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
