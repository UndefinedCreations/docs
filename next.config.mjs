import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ["img.shields.io"],
    dangerouslyAllowSVG: true
  },
};

export default withMDX(config);
