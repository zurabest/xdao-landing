'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ChevronDown } from 'lucide-react'

type FAQItem = {
    question: string
    answer: string
}

const faqItems: FAQItem[] = [
    {
        question: "What is XDAO?",
        answer: "XDAO is a multi-chain DAO framework that allows anyone to create and manage blockchain organizations without any coding skills. It enables groups of people to form Digital Autonomous Organizations, deposit crypto assets, manage them through voting, sell DAO shares, and directly interact with DeFi protocols. XDAO serves a wide range of use cases: venture capital funds, investment clubs, project treasuries, grant programs, charitable foundations, freelance collectives, gaming guilds, family wealth management, and any group that needs to manage shared assets with transparent governance."
    },
    {
        question: "How do I create a DAO?",
        answer: "Creating a DAO on XDAO takes under 60 seconds. Simply connect your wallet, set your organization's name and governance rules, invite members, and deploy. No legal paperwork or technical setup required — your DAO is live on-chain immediately."
    },
    {
        question: "Do I need coding or blockchain experience?",
        answer: "No. XDAO is designed to be accessible to everyone. You don't need any coding skills or deep crypto knowledge. The platform provides an intuitive interface that handles all the technical complexity for you."
    },
    {
        question: "Which blockchains does XDAO support?",
        answer: "XDAO operates across 45+ blockchains including Ethereum, BNB Chain, Polygon, Avalanche, Arbitrum, Optimism, TON, and many more. You can manage assets across multiple networks simultaneously from a single organization. XDAO is available on desktop, mobile web, and as a Telegram Mini App — manage your DAO, vote on proposals, and track your treasury from anywhere."
    },
    {
        question: "How does the voting system work?",
        answer: "XDAO offers both on-chain and off-chain (gasless) voting. Every decision — from fund transfers to member management — goes through a transparent voting process. You can customize voting thresholds, quorum requirements, and voting periods to match your organization's needs."
    },
    {
        question: "How does treasury management work?",
        answer: "Your DAO treasury operates as a multi-signature wallet with customizable governance rules. You can hold, swap, and manage digital assets across all supported blockchains. All transactions require approval through your DAO's voting mechanism, ensuring full transparency and collective control."
    },
    {
        question: "Can I raise funds through XDAO?",
        answer: "Yes. XDAO includes a full crowdfunding module that allows you to launch fundraising campaigns directly into your DAO treasury. You can set contribution caps, whitelists, and management fees. Investors automatically receive LP tokens representing their share in the organization."
    },
    {
        question: "Is XDAO secure?",
        answer: "XDAO has been independently audited by industry-leading security firms including Quantstamp, CertiK, Hacken, and Pessimistic. The platform uses battle-tested smart contracts and follows security best practices across all supported blockchains."
    },
]

function FAQItemComponent({ item, index, isOpen, onToggle }: {
    item: FAQItem
    index: number
    isOpen: boolean
    onToggle: () => void
}) {
    return (
        <FadeIn delay={0.05 * index}>
            <div className="border-b-2 border-[#003bb9]">
                <button
                    onClick={onToggle}
                    className="w-full py-6 flex items-center justify-between text-left group"
                >
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black pr-8">
                        {item.question}
                    </h3>
                    <ChevronDown
                        className={`w-6 h-6 text-[#003bb9] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>
                <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}
                >
                    <p className="text-lg md:text-xl lg:text-2xl text-black/80 leading-relaxed">
                        {item.answer}
                    </p>
                </div>
            </div>
        </FadeIn>
    )
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-16 md:py-24 bg-white">
            <div className="container-bt" style={{ maxWidth: '1400px' }}>
                {faqItems.map((item, index) => (
                    <FAQItemComponent
                        key={index}
                        item={item}
                        index={index}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    )
}
