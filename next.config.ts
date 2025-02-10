/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: '.dist',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ritsrivastava01.github.io',
        port: '',
        pathname: '/profile-ritesh-next/**',
        search: ''
      }
    ]
  }
};

export default nextConfig;
