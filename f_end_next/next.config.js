/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1"],
  },
  reactStrictMode: true,
  output: "standalone",
};

module.exports = nextConfig;
