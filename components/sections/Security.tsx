import { Shield, Lock, Eye } from 'lucide-react'

const items = [
    {
        icon: Shield,
        title: 'SOC 2 Type II',
        description: 'Third-party security certification with comprehensive security controls.',
    },
    {
        icon: Lock,
        title: 'Non-custodial',
        description: 'You always control your keys. We never have access to your funds.',
    },
    {
        icon: Eye,
        title: 'Open source',
        description: 'All smart contracts are verified and audited by leading security firms.',
    },
]

export function Security() {
    return (
        <section className="py-24 bg-bt-light-blue">
            <div className="container-bt">
                <span className="section-label text-bt-blue">
                    BUILT FOR ENTERPRISE
                </span>

                <h2 className="text-display text-bt-blue mt-4 max-w-2xl leading-tight">
                    Security and compliance at scale
                </h2>

                <div className="grid md:grid-cols-3 gap-12 mt-16">
                    {items.map((item, index) => (
                        <div key={index}>
                            <item.icon className="w-12 h-12 text-bt-blue mb-6 stroke-[1.5px]" />
                            <h3 className="text-subhead font-semibold text-bt-blue mb-3">
                                {item.title}
                            </h3>
                            <p className="text-body text-bt-blue/70 max-w-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
