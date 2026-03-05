'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface MenuItem {
    label: string
    href: string
}

interface MegaMenuProps {
    label: string
    href: string
    items: MenuItem[]
    className?: string
}

export function MegaMenu({ label, href, items, className = '' }: MegaMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <Link
                href={href}
                className="flex items-center gap-1 text-body hover:text-bt-gray-text transition-colors"
            >
                {label}
                <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </Link>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full left-0 pt-2"
                    >
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] overflow-hidden">
                            {items.map((item, index) => {
                                const isExternal = item.href.startsWith('http')
                                return (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.03, duration: 0.15 }}
                                    >
                                        <Link
                                            href={item.href}
                                            target={isExternal ? '_blank' : undefined}
                                            rel={isExternal ? 'noopener noreferrer' : undefined}
                                            className="block px-4 py-2.5 text-sm text-black hover:bg-[#003bb9]/5 hover:text-[#003bb9] transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
