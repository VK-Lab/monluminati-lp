/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-southeast-1.amazonaws.com',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'keystone-test.s3.ap-southeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: "cdn.discordapp.com"
      },
      {
        protocol: 'https',
        hostname: "pbs.twimg.com",
      }
    ],
  },
};

export default nextConfig;
