/** @type {import('next').NextConfig} */
const isStaticExport =
  process.env.OUTPUT_EXPORT === 'true' ||
  process.env.NEXT_EXPORT === 'true' ||
  process.env.GITHUB_ACTIONS === 'true' ||
  process.env.npm_lifecycle_event === 'build:export';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: isStaticExport ? 'export' : undefined,
  images: {
    unoptimized: isStaticExport,
    formats: ['image/avif', 'image/webp'],
  },
  // Security headers are active during server execution (Vercel, Netlify, Render)
  // Static export does not support custom headers in next.config
  ...(isStaticExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [
                {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff',
                },
                {
                  key: 'X-Frame-Options',
                  value: 'DENY',
                },
                {
                  key: 'X-XSS-Protection',
                  value: '1; mode=block',
                },
                {
                  key: 'Referrer-Policy',
                  value: 'strict-origin-when-cross-origin',
                },
                {
                  key: 'Permissions-Policy',
                  value: 'camera=(), microphone=(), geolocation=()',
                },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
