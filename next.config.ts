/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/profile-ritesh-next' : '',
  images: {
    unoptimized: true // Disable default image optimization
  },
  assetPrefix: isProd ? '/profile-ritesh-next/' : ''
};

export default nextConfig;
