/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: ''
  },
  assetPrefix: '/profile-ritesh-next'
};

export default nextConfig;
