/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: 'files.stripe.com' },
      { hostname: 'github.com' },
    ],
  },
}

export default nextConfig
