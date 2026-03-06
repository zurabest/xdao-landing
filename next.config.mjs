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
      {
        source: '/:chain/dao/:address',
        destination: 'https://app.xdao.app/:chain/dao/:address',
        permanent: false,
      },
    ]
  },
}

export default nextConfig