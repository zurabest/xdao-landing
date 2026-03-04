import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
    title: "XDAO — Manage Digital Assets at Any Scale",
    description: "The platform for creating and managing Decentralized Autonomous Organizations.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
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
