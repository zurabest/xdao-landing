'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const tabs = [
    { id: 'create', label: 'CREATE', title: 'Launch your DAO in minutes', image: '/screens/create.png' },
    { id: 'govern', label: 'GOVERN', title: 'Proposal and voting made simple', image: '/screens/govern.png' },
    { id: 'treasury', label: 'TREASURY', title: 'Manage assets with multi-sig', image: '/screens/treasury.png' },
]

export function FeatureTabs() {
    const [activeTab, setActiveTab] = useState('create')
    const currentTab = tabs.find(t => t.id === activeTab)!

    return (
        <section className="py-20 bg-bt-blue text-white">
            <div className="container-bt">
                {/* Tabs */}
                <div className="flex gap-2 mb-12 overflow-x-auto pb-4 md:pb-0">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-bt-lg text-small font-medium transition-colors whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-white text-bt-blue'
                                    : 'text-white/70 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        {/* Screenshot container - dark green like Braintrust */}
                        <div className="bg-bt-dark-green rounded-bt-lg p-6 md:p-10 border border-white/10 shadow-2xl">
                            <div className="mb-6">
                                <span className="text-bt-lime text-small font-medium block mb-1">
                                    {currentTab.label}
                                </span>
                                <p className="text-white text-subhead">
                                    {currentTab.title}
                                </p>
                            </div>

                            {/* Screenshot */}
                            <div className="relative aspect-[16/10] bg-white/5 rounded-bt-md overflow-hidden border border-white/10">
                                <Image
                                    src={currentTab.image}
                                    alt={currentTab.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
