import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface PillProps {
    children: React.ReactNode
    href?: string
    icon?: React.ReactNode
}

export function Pill({ children, href, icon }: PillProps) {
    const content = (
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-bt-gray-border rounded-full text-small font-medium text-bt-gray-text hover:text-black transition-colors">
            {children}
            {icon || <ArrowRight className="w-4 h-4" />}
        </span>
    )

    if (href) {
        return (
            <Link href={href} className="inline-block hover:opacity-80 transition-opacity">
                {content}
            </Link>
        )
    }

    return content
}
