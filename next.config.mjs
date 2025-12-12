import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.shields.io" },
      { protocol: "https", hostname: "cdn.discordapp.com" },
      { protocol: "https", hostname: "cdn.undefinedcreations.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" }
    ],
    dangerouslyAllowSVG: true
  }
};

export default withMDX(config);
