/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    WEBSITE_URL:process.env.WEBSITE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
    domains: [
      "industrie.rstheme.com",
      "kostevo.com",
      "kostevobck.demo-web.live",
      "backend.kostevo.com",
      "ydbvalves.com",
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
