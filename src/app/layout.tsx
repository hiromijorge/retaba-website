import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MotionProvider from '@/components/MotionProvider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SITE_URL, SERVICE_AREAS_TEXT } from '@/lib/site';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'RETABA Catering - Jasa Catering Bersertifikat Halal',
    template: '%s | RETABA Catering - Jasa Catering Bersertifikat Halal',
  },
  description:
    `RETABA (PT. Receh Tapi Banyak) — Jasa catering perusahaan bersertifikat Halal MUI, SLHS, dan teruji lab. Melayani catering kantor halal di ${SERVICE_AREAS_TEXT}. Menu bervariasi, harga kompetitif.`,
  keywords: [
    'jasa catering perusahaan',
    'catering kantor halal',
    'catering Tangerang',
    'catering Salatiga',
    'catering Solo',
    'catering bersertifikat halal',
    'catering murah berkualitas',
    'catering pabrik',
    'catering karyawan',
    'RETABA catering',
  ],
  authors: [{ name: 'RETABA / PT. Receh Tapi Banyak' }],
  creator: 'RETABA',
  publisher: 'PT. Receh Tapi Banyak',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: 'RETABA Catering',
    title: 'RETABA Catering - Jasa Catering Bersertifikat Halal',
    description:
      `Catering perusahaan berkualitas, bersertifikat Halal MUI & SLHS, teruji lab. Melayani ${SERVICE_AREAS_TEXT}.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RETABA Catering - Jasa Catering Bersertifikat Halal',
    description:
      `Catering perusahaan berkualitas, bersertifikat Halal MUI & SLHS. ${SERVICE_AREAS_TEXT}.`,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${nunito.variable} scroll-smooth`}>
      <body className={`${nunito.className} bg-white text-ink antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-green focus:px-4 focus:py-2 focus:text-white focus:font-bold"
        >
          Langsung ke konten
        </a>
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
