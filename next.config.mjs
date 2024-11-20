/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Allows build to succeed even with ESLint warnings
      ignoreDuringBuilds: true,
    },
    // Optional: Add any other Next.js configurations you might need
    reactStrictMode: true,
  };
  
  export default nextConfig;

 