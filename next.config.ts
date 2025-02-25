import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: process.env.BASE_PATH ? 'export' : undefined,
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
