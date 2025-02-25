/**
 * @type {import('next').NextConfig}
 */
// const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: process.env.BASE_PATH ? 'export' : undefined
};

export default nextConfig;
