/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.aichanjimate.com',
        pathname: '/assets/img/**',
      },
      {
        protocol: 'https',
        hostname: 'aichanjimate.com',
        pathname: '/assets/img/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
