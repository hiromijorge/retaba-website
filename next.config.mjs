/** @type {import('next').NextConfig} */

// Script/style need 'unsafe-inline' because the pages are fully static (no per-request nonce)
// and Next.js hydration + Framer Motion rely on inline scripts/styles.
// Google Analytics 4 and Microsoft Clarity hosts follow each vendor's CSP guidance.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://*.googletagmanager.com https://*.clarity.ms",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://res.cloudinary.com https://images.unsplash.com https://*.google-analytics.com https://*.googletagmanager.com https://*.clarity.ms https://c.bing.com",
  "font-src 'self' data:",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.clarity.ms https://c.bing.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://wa.me https://api.whatsapp.com",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Permanent apex -> www so the canonical host never answers with a temporary redirect.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'retaba.co.id' }],
        destination: 'https://www.retaba.co.id/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
