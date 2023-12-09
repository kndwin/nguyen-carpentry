/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dummyimage.com",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
