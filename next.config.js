// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pages Router enable (App Router disable)
  experimental: {
    appDir: false,
  },
  
  // Image optimization allow external domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Vercel deployment optimized
  output: 'standalone',
  trailingSlash: true,
}

module.exports = nextConfig
