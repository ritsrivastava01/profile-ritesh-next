/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: process.env.BASE_PATH ? 'export' : undefined,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars3.githubusercontent.com',
      },
    ],
  },
};

export default nextConfig;
//avatars3.githubusercontent.com
