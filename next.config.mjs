// next.config.js
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['images.unsplash.com', 'example.com', 'another-example.com'], // Add all necessary domains here
  },
}

const withMDX = createMDX({})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
