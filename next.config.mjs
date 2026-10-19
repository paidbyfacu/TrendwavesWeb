/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    // La página vive en /ramma-campana; la URL que se comparte es con ñ.
    return [
      { source: '/ramma-campa%C3%B1a', destination: '/ramma-campana' },
      { source: '/ramma-campaña', destination: '/ramma-campana' },
    ]
  },
}

export default nextConfig
