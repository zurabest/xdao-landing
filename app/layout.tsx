import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import '@rainbow-me/rainbowkit/styles.css';
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
    title: "XDAO - Create your DAO in minutes",
    description: "The platform for creating and managing Decentralized Autonomous Organizations.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={cn(
                "min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary",
                inter.variable,
                mono.variable
            )}>
                <Providers>
                    <div className="relative flex min-h-screen flex-col">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
