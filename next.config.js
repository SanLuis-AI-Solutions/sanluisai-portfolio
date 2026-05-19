/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/case-studies',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sanluisai.com',
          },
        ],
        destination: '/coming-soon',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sanluisai.com',
          },
        ],
        destination: '/coming-soon',
      },
    ]
  },
}
module.exports = nextConfig
