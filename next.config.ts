/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // tells Next.js to export static HTML
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;