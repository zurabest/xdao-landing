import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const posts = [
    { title: 'How Compound builds next-generation governance tools', href: '/blog/compound' },
    { title: 'Webinar: DAO best practices', href: '/blog/webinar' },
    { title: 'How Uniswap manages multi-chain treasury', href: '/blog/uniswap' },
    { title: 'XDAO: the platform designed for DAOs', href: '/blog/xdao' },
]

export function BlogLinks() {
    return (
        <section className="py-20 border-t border-bt-gray-border">
            <div className="container-bt">
                <span className="section-label text-bt-gray-text">
                    FROM THE BLOG
                </span>

                <div className="mt-8 divide-y divide-bt-gray-border">
                    {posts.map((post, index) => (
                        <Link
                            key={index}
                            href={post.href}
                            className="flex items-center justify-between py-6 group hover:bg-gray-50/50 transition-colors -mx-4 px-4 rounded-bt-md"
                        >
                            <h3 className="text-heading font-normal group-hover:text-bt-gray-text transition-colors max-w-2xl leading-tight">
                                {post.title}
                            </h3>
                            <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 text-bt-gray-text" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
