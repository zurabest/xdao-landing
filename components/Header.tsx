'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { XdaoLogo } from '@/components/ui/XdaoLogo'

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
                    <Link href="/features" className="text-body hover:text-bt-gray-text transition-colors">
                        Features
                    </Link>
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
                        <Link href="/features" className="text-body font-medium" onClick={() => setIsOpen(false)}>
                            Features
                        </Link>
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
