import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: process.env.BASE_PATH ? 'export' : undefined,
};

export default withNextIntl(nextConfig);
