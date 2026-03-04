import { Brain, Users, Zap } from 'lucide-react'

const features = [
    {
        icon: Brain,
        title: 'Intuitive mental model',
        description: 'All DAOs are composed of members, proposals, and treasury. This framework gives teams a shared understanding.',
    },
    {
        icon: Users,
        title: 'Cross-functional collaboration',
        description: 'Developers write smart contracts. Product managers create proposals. Everyone can vote and review.',
    },
    {
        icon: Zap,
        title: 'Built for speed',
        description: 'From proposal to execution in minutes, not weeks. Automated workflows handle the rest.',
    },
]

export function FeaturesGrid() {
    return (
        <section className="py-20">
            <div className="container-bt">
                <div className="divide-y divide-bt-gray-border">
                    {features.map((feature, index) => (
                        <div key={index} className="py-12 first:pt-0 last:pb-0">
                            {/* Icon - minimalistic black icon */}
                            <div className="w-20 h-20 mb-6 flex items-center justify-center text-5xl">
                                <feature.icon className="w-12 h-12 stroke-[1.5px]" />
                            </div>

                            <h3 className="text-subhead font-semibold mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-body text-bt-gray-text max-w-xl">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
