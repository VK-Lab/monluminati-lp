/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-southeast-1.amazonaws.com',
        // hostname: 'keystone-test.s3.ap-southeast-1.amazonaws.com',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: "cdn.discordapp.com"
      }
    ],
  },
};

export default nextConfig;
