import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const siteUrl = 'https://retaba.co.id';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'RETABA Catering - Jasa Catering Bersertifikat Halal',
    template: '%s | RETABA Catering - Jasa Catering Bersertifikat Halal',
  },
  description:
    'RETABA (PT. Receh Tapi Banyak) — Jasa catering perusahaan bersertifikat Halal MUI, SLHS, dan teruji lab. Melayani catering kantor halal di Tangerang, Salatiga, dan Solo. Menu bervariasi, harga kompetitif.',
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
    url: siteUrl,
    siteName: 'RETABA Catering',
    title: 'RETABA Catering - Jasa Catering Bersertifikat Halal',
    description:
      'Catering perusahaan berkualitas, bersertifikat Halal MUI & SLHS, teruji lab. Melayani Tangerang, Salatiga, Solo.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RETABA Catering - Jasa Catering Halal Bersertifikat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RETABA Catering - Jasa Catering Bersertifikat Halal',
    description:
      'Catering perusahaan berkualitas, bersertifikat Halal MUI & SLHS. Tangerang, Salatiga, Solo.',
    images: ['/og-image.jpg'],
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
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
