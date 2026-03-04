'use client'

import { useState } from 'react'

type RoadmapPhase = {
    phase: string
    title: string
    status: 'completed' | 'in-progress' | 'upcoming'
    items: {
        title: string
        description: string
        status: 'completed' | 'in-progress' | 'upcoming'
    }[]
}

const roadmapData: RoadmapPhase[] = [
    {
        phase: "Phase 1",
        title: "Foundation",
        status: "completed",
        items: [
            {
                title: "Open Mining of $XDAO Token",
                description: "Millions of users mining the token in our Telegram Mini App to ensure fair distribution",
                status: "completed"
            },
            {
                title: "TONxDAO Project Launch",
                description: "Engagement through simplified game mechanics showcasing DAO potential",
                status: "completed"
            }
        ]
    },
    {
        phase: "Phase 2",
        title: "Scale",
        status: "in-progress",
        items: [
            {
                title: "1 Million DAOs in TONxDAO",
                description: "Building foundational infrastructure for large-scale DAO ecosystem on TON",
                status: "in-progress"
            },
            {
                title: "Telegram DAO Creation Product",
                description: "Simplified process for creating DAOs directly in the messenger with minimal costs",
                status: "in-progress"
            },
            {
                title: "Smart Contract Transition",
                description: "Migration of in-game DAOs to operate via TON blockchain smart contracts",
                status: "upcoming"
            }
        ]
    },
    {
        phase: "Phase 3",
        title: "Infrastructure",
        status: "upcoming",
        items: [
            {
                title: "DAO Builder Launch on TON",
                description: "Core infrastructure for professional DAO creation and management",
                status: "upcoming"
            },
            {
                title: "Legal Framework Development",
                description: "Automatic official registration of DAOs in DAO-friendly jurisdictions",
                status: "upcoming"
            },
            {
                title: "Crowdfunding Module",
                description: "Collective fundraising capabilities integrated with Telegram",
                status: "upcoming"
            }
        ]
    },
    {
        phase: "Phase 4",
        title: "Expansion",
        status: "upcoming",
        items: [
            {
                title: "Token Generation Event (TGE)",
                description: "$XDAO token distribution via airdrop and official launch",
                status: "upcoming"
            },
            {
                title: "Telegram Chat Tokenization",
                description: "Marketplace for digital organizations with purchasable access to DAO-chats",
                status: "upcoming"
            }
        ]
    }
]

function StatusBadge({ status }: { status: 'completed' | 'in-progress' | 'upcoming' }) {
    const styles = {
        'completed': 'bg-[#003bb9] text-white border-[#003bb9]',
        'in-progress': 'bg-[#e6ff01] text-black border-[#c4d400] shadow-sm',
        'upcoming': 'bg-white text-gray-500 border-gray-300'
    }

    const labels = {
        'completed': 'Completed',
        'in-progress': 'In Progress',
        'upcoming': 'Upcoming'
    }

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
            {status === 'in-progress' && (
                <span className="w-1.5 h-1.5 bg-black rounded-full mr-1.5 animate-pulse" />
            )}
            {status === 'completed' && (
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            )}
            {labels[status]}
        </span>
    )
}

function PhaseCard({ phase, isActive, onClick }: { phase: RoadmapPhase; isActive: boolean; onClick: () => void }) {
    const getStatusStyles = (status: string, active: boolean) => {
        if (active) {
            return {
                dot: status === 'completed' ? 'bg-white' : status === 'in-progress' ? 'bg-[#e6ff01]' : 'bg-white/50',
                ring: status === 'in-progress' ? 'ring-2 ring-[#e6ff01]/50' : ''
            }
        }
        return {
            dot: status === 'completed' ? 'bg-[#003bb9]' : status === 'in-progress' ? 'bg-[#e6ff01] ring-2 ring-[#c4d400]' : 'bg-gray-300',
            ring: ''
        }
    }

    const styles = getStatusStyles(phase.status, isActive)

    return (
        <button
            onClick={onClick}
            className={`relative flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                isActive
                    ? 'bg-[#003bb9] text-white shadow-lg scale-105'
                    : 'bg-white border border-gray-200 hover:border-[#003bb9] hover:shadow-md'
            }`}
        >
            <div className={`w-4 h-4 rounded-full mb-2 ${styles.dot} ${styles.ring}`} />
            <span className={`text-xs font-medium uppercase tracking-wider ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                {phase.phase}
            </span>
            <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-black'}`}>
                {phase.title}
            </span>
        </button>
    )
}

export function Roadmap() {
    const [activePhase, setActivePhase] = useState(1) // Start with Phase 2 (in-progress)

    const currentPhase = roadmapData[activePhase]

    // Calculate progress based on completed phases
    const completedCount = roadmapData.filter(p => p.status === 'completed').length
    const inProgressCount = roadmapData.filter(p => p.status === 'in-progress').length
    const progressPercent = ((completedCount + inProgressCount * 0.5) / roadmapData.length) * 100

    return (
        <>
            <h2 id="roadmap" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-black !mt-24 mb-8 scroll-mt-32">
                Roadmap
            </h2>

            <p className="mb-10">
                XDAO is building the <strong>future of digital organizations</strong> — one milestone at a time. Our roadmap reflects our commitment to delivering real value through continuous innovation on the TON blockchain and beyond.
            </p>

            {/* Phase Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {roadmapData.map((phase, index) => (
                    <PhaseCard
                        key={phase.phase}
                        phase={phase}
                        isActive={activePhase === index}
                        onClick={() => setActivePhase(index)}
                    />
                ))}
            </div>

            {/* Progress Line */}
            <div className="relative h-3 bg-gray-200 rounded-full mb-8 overflow-hidden">
                <div
                    className="absolute left-0 top-0 h-full bg-[#003bb9] rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                />
            </div>

            {/* Active Phase Details */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <span className="text-[#003bb9] text-sm font-semibold uppercase tracking-wider">
                            {currentPhase.phase}
                        </span>
                        <h3 className="text-2xl font-bold text-black">
                            {currentPhase.title}
                        </h3>
                    </div>
                    <StatusBadge status={currentPhase.status} />
                </div>

                <div className="space-y-4">
                    {currentPhase.items.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-xl p-5 border transition-all duration-300 ${
                                item.status === 'completed'
                                    ? 'bg-[#003bb9]/5 border-[#003bb9]/20'
                                    : item.status === 'in-progress'
                                    ? 'bg-[#e6ff01]/10 border-[#e6ff01]'
                                    : 'bg-gray-50 border-gray-200'
                            } hover:shadow-md`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-3 h-3 rounded-full ${
                                            item.status === 'completed' ? 'bg-[#003bb9]' :
                                            item.status === 'in-progress' ? 'bg-[#e6ff01] ring-2 ring-[#c4d400]' : 'bg-gray-300'
                                        }`} />
                                        <h4 className="font-semibold text-black">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <p className="text-sm text-gray-600 ml-6">
                                        {item.description}
                                    </p>
                                </div>
                                <StatusBadge status={item.status} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
