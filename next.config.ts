/**
 * @type {import('next').NextConfig}
 */
// const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: process.env.BASE_PATH ? 'export' : undefined,
  basePath: process.env.BASE_PATH ? '/profile-ritesh-next' : '',
  assetPrefix: process.env.BASE_PATH ? '/profile-ritesh-next' : ''
};

export default nextConfig;
