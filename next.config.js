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
}
module.exports = nextConfig
