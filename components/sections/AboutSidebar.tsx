'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

const sections = [
    { id: 'story', label: 'The Story' },
    { id: 'vision', label: 'Our Vision' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'board', label: 'Board' },
    { id: 'structure', label: 'Structure' },
    { id: 'roadmap', label: 'Roadmap' },
]

export function AboutSidebar() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 24 })
    const linksContainerRef = useRef<HTMLDivElement>(null)
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

    const updateIndicator = useCallback((index: number) => {
        const link = linkRefs.current[index]
        const container = linksContainerRef.current

        if (link && container) {
            const linkTop = link.offsetTop
            const linkHeight = link.offsetHeight

            setIndicatorStyle({
                top: linkTop + 6,
                height: linkHeight - 12
            })
        }
    }, [])

    useEffect(() => {
        // Initial position
        updateIndicator(activeIndex)
    }, [activeIndex, updateIndicator])

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        sections.forEach(({ id }, index) => {
            const element = document.getElementById(id)
            if (!element) return

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveIndex(index)
                        }
                    })
                },
                {
                    rootMargin: '-20% 0px -60% 0px',
                    threshold: 0
                }
            )

            observer.observe(element)
            observers.push(observer)
        })

        return () => {
            observers.forEach((observer) => observer.disconnect())
        }
    }, [])

    return (
        <aside className="hidden lg:block w-48 shrink-0 ml-auto">
            <nav className="sticky top-40 pl-8">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-4">On this page</p>
                <div ref={linksContainerRef} className="relative">
                    {/* Single animated yellow indicator */}
                    <span
                        className="absolute left-0 w-1 rounded-full bg-[#e6ff01] transition-all duration-500 ease-out"
                        style={{
                            top: indicatorStyle.top,
                            height: indicatorStyle.height
                        }}
                    />

                    {sections.map(({ id, label }, index) => (
                        <a
                            key={id}
                            ref={(el) => { linkRefs.current[index] = el }}
                            href={`#${id}`}
                            className={`relative block py-2 pl-4 text-body transition-all duration-300 ${
                                activeIndex === index
                                    ? 'text-black font-medium'
                                    : 'text-[#003bb9] hover:text-bt-gray-text'
                            }`}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </nav>
        </aside>
    )
}
