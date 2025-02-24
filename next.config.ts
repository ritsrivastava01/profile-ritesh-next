/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/profile-ritesh-next' : '',

  assetPrefix: isProd ? '/profile-ritesh-next' : ''
};

export default nextConfig;
