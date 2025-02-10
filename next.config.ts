/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: '/profile-ritesh-next',

  assetPrefix: '/profile-ritesh-next'
};

export default nextConfig;
