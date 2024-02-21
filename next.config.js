/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['fjhtbcfchytcjimrvlxt.supabase.co'],
  },
};

module.exports = nextConfig;
