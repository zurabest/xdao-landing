'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
    { icon: "⛓️", value: 45, suffix: "+", label: "Blockchains supported" },
    { icon: "🏛️", value: 32000, suffix: "+", label: "DAOs created across the ecosystem" },
    { icon: "💰", value: 110, suffix: "M+", label: "Total digital asset turnover" },
    { icon: "🚀", value: 55, suffix: "M+", label: "Raised via crowdfunding module" }
]

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!start) return

        let startTime: number | null = null
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration, start])

    return count
}

function StatCard({ icon, value, suffix, label, index, isVisible }: {
    icon: string
    value: number
    suffix: string
    label: string
    index: number
    isVisible: boolean
}) {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    const count = useCountUp(value, 2000, shouldAnimate)

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setShouldAnimate(true)
            }, index * 150) // Stagger animation
            return () => clearTimeout(timer)
        }
    }, [isVisible, index])

    const formatNumber = (num: number) => {
        if (num >= 1000) {
            return num.toLocaleString()
        }
        return num.toString()
    }

    return (
        <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#003bb9]/10 to-[#e6ff01]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-[#003bb9] mb-2">
                    {formatNumber(count)}{suffix}
                </div>
                <p className="text-sm text-gray-600">{label}</p>
            </div>
        </div>
    )
}

export function AboutStats() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} id="stats" className="py-16 md:py-24 bg-gray-50 scroll-mt-32">
            <div className="container-bt">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-black mb-12 text-center">
                    XDAO in Numbers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            {...stat}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
