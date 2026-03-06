import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
    title: "XDAO — Treasury Infrastructure for Digital Organizations",
    description: "Create and manage Decentralized Autonomous Organizations across 45+ blockchains. Instant deployment, on-chain governance, DeFi integration, and legal infrastructure. No coding required.",
    keywords: ["DAO", "decentralized autonomous organization", "blockchain", "crypto", "treasury management", "governance", "DeFi", "multi-chain", "Ethereum", "TON", "web3", "smart contracts"],
    authors: [{ name: "XDAO" }],
    creator: "XDAO",
    publisher: "XDAO, Inc.",
    metadataBase: new URL("https://xdao.app"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://xdao.app",
        siteName: "XDAO",
        title: "XDAO — Treasury Infrastructure for Digital Organizations",
        description: "Create and manage Decentralized Autonomous Organizations across 45+ blockchains. Instant deployment, on-chain governance, DeFi integration, and legal infrastructure.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "XDAO - Treasury Infrastructure for Digital Organizations",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@xdaoapp",
        creator: "@xdaoapp",
        title: "XDAO — Treasury Infrastructure for Digital Organizations",
        description: "Create and manage DAOs across 45+ blockchains. No coding required.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
    category: "technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="icon" href="/xdao-logo.png" type="image/png" />
                <link rel="apple-touch-icon" href="/xdao-logo.png" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className={cn(
                "min-h-screen bg-white text-black font-sans antialiased",
                inter.variable,
                mono.variable
            )}>
                {children}
            </body>
        </html>
    );
}
