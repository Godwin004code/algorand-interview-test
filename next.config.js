/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['algorand-wallet-mainnet.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
