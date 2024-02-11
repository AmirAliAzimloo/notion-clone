/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'fjhtbcfchytcjimrvlxt.supabase.co',
            },
          ],
      }
};

export default nextConfig;
