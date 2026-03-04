import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'outline-light'
    size?: 'sm' | 'md' | 'lg'
    withArrow?: boolean
}

export function BraintrustButton({
    children,
    variant = 'primary',
    size = 'md',
    withArrow = false,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                // Base
                'inline-flex items-center justify-center font-medium transition-all duration-150 ease-bt rounded-full active:scale-95',

                // Variants
                variant === 'primary' && 'bg-bt-blue text-white hover:bg-[#1a12b0] shadow-sm',
                variant === 'secondary' && 'bg-white text-black border border-bt-gray-border hover:bg-gray-50 shadow-sm',
                variant === 'outline' && 'bg-transparent text-black border border-bt-gray-border hover:bg-gray-50',
                variant === 'outline-light' && 'bg-transparent text-white border border-white/30 hover:bg-white/10',

                // Sizes
                size === 'sm' && 'px-4 py-2 text-small',
                size === 'md' && 'px-6 py-3 text-body',
                size === 'lg' && 'px-8 py-4 text-body',

                className
            )}
            {...props}
        >
            {children}
            {withArrow && <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />}
        </button>
    )
}
