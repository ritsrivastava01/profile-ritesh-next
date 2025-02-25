/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: process.env.BASE_PATH ? 'export' : undefined
};

export default nextConfig;
