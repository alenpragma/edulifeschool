// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // eslint: {
//   //   ignoreDuringBuilds: true,
//   // },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "**",
//       },
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },
// };

// export default nextConfig;

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "api.edulifeitschool.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
