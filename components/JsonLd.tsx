export function JsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "XDAO",
        "url": "https://xdao.app",
        "logo": "https://xdao.app/logo.svg",
        "description": "Multi-chain DAO builder for creating and managing Decentralized Autonomous Organizations across 45+ blockchains.",
        "foundingDate": "2021",
        "sameAs": [
            "https://twitter.com/xdaoapp",
            "https://t.me/xdaoapp",
            "https://discord.com/invite/xdaoapp"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "url": "https://xdao.app"
        }
    }

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "XDAO",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Create and manage Decentralized Autonomous Organizations across 45+ blockchains. Instant deployment, on-chain governance, DeFi integration."
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is XDAO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "XDAO is a multi-chain DAO framework that allows anyone to create and manage blockchain organizations without any coding skills. It enables groups of people to form Digital Autonomous Organizations, deposit crypto assets, manage them through voting, sell DAO shares, and directly interact with DeFi protocols."
                }
            },
            {
                "@type": "Question",
                "name": "How do I create a DAO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Creating a DAO on XDAO takes under 60 seconds. Simply connect your wallet, set your organization's name and governance rules, invite members, and deploy. No legal paperwork or technical setup required."
                }
            },
            {
                "@type": "Question",
                "name": "Which blockchains does XDAO support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "XDAO operates across 45+ blockchains including Ethereum, BNB Chain, Polygon, Avalanche, Arbitrum, Optimism, TON, and many more."
                }
            },
            {
                "@type": "Question",
                "name": "Is XDAO secure?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "XDAO has been independently audited by industry-leading security firms including Quantstamp, CertiK, Hacken, and Pessimistic."
                }
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    )
}
