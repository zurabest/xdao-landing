/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/1',
        destination: 'https://app.xdao.app/1',
        permanent: false,
      },
      {
        source: '/1/:path*',
        destination: 'https://app.xdao.app/1/:path*',
        permanent: false,
      },
    ]
  },
}

export default nextConfig