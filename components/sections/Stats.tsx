'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
    { value: '$2.5B+', label: 'Treasury managed' },
    { value: '5,000+', label: 'DAOs created' },
    { value: '100K+', label: 'Active members' },
    { value: '15+', label: 'Chains supported' },
]

export function Stats() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="py-24 bg-bt-dark-maroon text-white">
            <div className="container-bt">
                <span className="section-label text-bt-orange">
                    UNPRECEDENTED SCALE
                </span>

                <h2 className="text-display text-bt-orange mt-4">
                    Built for DAO data
                </h2>

                <div
                    ref={ref}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                        >
                            <div className="text-4xl md:text-5xl font-semibold text-bt-orange tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-small text-white/60 mt-2 uppercase tracking-wider font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
