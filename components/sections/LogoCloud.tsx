import { Logos3 } from '@/components/ui/logos3'

const logos = [
    { id: 'moonriver', description: 'Moonriver', image: '/chains/moonriver.svg', className: 'h-[19px] w-auto grayscale' },
    { id: 'sapphire', description: 'Sapphire', image: '/chains/sapphire.svg', className: 'h-[30px] w-auto grayscale' },
    { id: 'ethereum', description: 'Ethereum', image: '/chains/ethereum.svg', className: 'h-[31px] w-auto grayscale brightness-75 contrast-125' },
    { id: 'bitcoin', description: 'Bitcoin', image: '/chains/bitcoin.png', className: 'h-[23px] w-auto grayscale', soon: true },
    { id: 'bnb-chain', description: 'BNB Chain', image: '/chains/bnb-chain.svg', className: 'h-[25px] w-auto grayscale brightness-50 contrast-125' },
    { id: 'polygon', description: 'Polygon', image: '/chains/polygon.svg', className: 'h-[25px] w-auto grayscale' },
    { id: 'ton', description: 'TON', image: '/chains/ton.svg', className: 'h-[28px] w-auto grayscale' },
    { id: 'solana', description: 'Solana', image: '/chains/solana.png', className: 'h-[19px] w-auto grayscale', soon: true },
    { id: 'arbitrum', description: 'Arbitrum', image: '/chains/arbitrum-one.svg', className: 'h-[29px] w-auto grayscale' },
    { id: 'optimism', description: 'Optimism', image: '/chains/optimism.svg', className: 'h-[17px] w-auto grayscale' },
    { id: 'base', description: 'Base', image: '/chains/base.svg', className: 'h-[23px] w-auto grayscale' },
    { id: 'hyperliquid', description: 'Hyperliquid', image: '/chains/hyperliquid.png', className: 'h-[22px] w-auto grayscale', soon: true },
    { id: 'avalanche', description: 'Avalanche', image: '/chains/avalanche.svg', className: 'h-[26px] w-auto grayscale brightness-75 contrast-125' },
    { id: 'scroll', description: 'Scroll', image: '/chains/scroll.svg', className: 'h-[24px] w-auto grayscale' },
    { id: 'linea', description: 'Linea', image: '/chains/linea.svg', className: 'h-[22px] w-auto grayscale' },
    { id: 'tron', description: 'Tron', image: '/chains/tron.png', className: 'h-[25px] w-auto grayscale', soon: true },
    { id: 'arbitrum-nova', description: 'Arbitrum Nova', image: '/chains/arbitrum-nova.svg', className: 'h-[22px] w-auto grayscale' },
    { id: 'mantle', description: 'Mantle', image: '/chains/mantle.svg', className: 'h-[28px] w-auto grayscale' },
    { id: 'moonbeam', description: 'Moonbeam', image: '/chains/moonbeam.svg', className: 'h-[19px] w-auto grayscale' },
    { id: 'aptos', description: 'Aptos', image: '/chains/aptos.png', className: 'h-[22px] w-auto grayscale', soon: true },
    { id: 'zetachain', description: 'ZetaChain', image: '/chains/zetachain.svg', className: 'h-[25px] w-auto grayscale' },
    { id: 'aurora', description: 'Aurora', image: '/chains/aurora.svg', className: 'h-[26px] w-auto grayscale' },
    { id: 'sui', description: 'Sui', image: '/chains/sui.png', className: 'h-[25px] w-auto grayscale brightness-75 contrast-125', soon: true },
]

export function LogoCloud() {
    return (
        <section className="pt-16 pb-10 overflow-hidden bg-white">
            <Logos3
                heading="Operates across all major blockchains"
                logos={logos}
            />
        </section>
    )
}
