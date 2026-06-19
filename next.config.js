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
        {
          source: '/blog/implementation-timeline',
          destination: '/blog/ai-implementation-timeline',
          permanent: true,
        },
      ]
    },
}
module.exports = nextConfig
