import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import WhyUsSection from '@/components/WhyUsSection';
import MenuGrid from '@/components/MenuGrid';
import ClientLogos from '@/components/ClientLogos';
import TestimonialSlider from '@/components/TestimonialSlider';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WA_LINK, SITE_URL, PHONE_E164, EMAIL, COMPANY, SERVICE_AREAS, SERVICE_AREAS_TEXT } from '@/lib/site';


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: `${COMPANY.brand} - ${COMPANY.legalName}`,
  legalName: COMPANY.legalName,
  description: `Jasa catering perusahaan bersertifikat Halal MUI, SLHS, dan teruji lab di ${SERVICE_AREAS_TEXT}`,
  url: SITE_URL,
  logo: `${SITE_URL}/logo/retaba-logo.png`,
  image: `${SITE_URL}/opengraph-image`,
  telephone: `+${PHONE_E164}`,
  email: EMAIL,
  foundingDate: COMPANY.foundingYear,
  servesCuisine: ['Indonesian', 'Japanese', 'Chinese', 'Korean', 'Indian'],
  areaServed: SERVICE_AREAS.map((a) => ({ '@type': 'City', name: a.city })),
  address: SERVICE_AREAS.map((a) => ({
    '@type': 'PostalAddress',
    addressLocality: a.city,
    addressRegion: a.province,
    addressCountry: 'ID',
  })),
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'Sertifikasi Halal MUI', credentialCategory: 'Halal Certification', identifier: COMPANY.halalCertNo },
    { '@type': 'EducationalOccupationalCredential', name: 'SLHS - Sertifikat Laik Higiene Sanitasi' },
  ],
};

export const metadata: Metadata = {
  title: 'Beranda',
  description: `RETABA — Jasa catering perusahaan terpercaya, bersertifikat Halal MUI & SLHS, teruji lab. Menu bervariasi untuk karyawan Anda di ${SERVICE_AREAS_TEXT}.`,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <main id="main">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <HeroSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Certifications */}
      <section id="sertifikasi" className="py-14 lg:py-16 bg-surface/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
            <div>
              <span className="text-[72px] sm:text-[88px] font-black text-green leading-none">2</span>
              <p className="text-ink font-black text-2xl sm:text-3xl mt-1">Sertifikasi Resmi</p>
              <p className="text-ink/60 text-sm mt-2 max-w-sm">
                Bisa dicek langsung. Bukan pajangan di dinding.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: 'Halal MUI',
                number: `No. ${COMPANY.halalCertNo}`,
                image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144131/retaba/certification-images/2.png',
                desc: 'Sertifikat Halal resmi dari Majelis Ulama Indonesia. Nomor bisa diverifikasi langsung di website MUI.',
                color: 'yellow',
              },
              {
                title: 'SLHS',
                number: 'Sertifikat Laik Higiene Sanitasi',
                image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144132/retaba/certification-images/1.png',
                desc: 'Lolos pemeriksaan higiene dan sanitasi pangan dari pemerintah. Dapur kami diperiksa berkala.',
                color: 'teal',
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className={`p-5 rounded-3xl border-2 text-center transition-all duration-300 hover:-translate-y-1 ${
                  cert.color === 'yellow'
                    ? 'bg-brand/10 border-brand/30'
                    : cert.color === 'teal'
                    ? 'bg-teal/10 border-teal/30'
                    : 'bg-green/10 border-green/30'
                }`}
              >
                <div className="relative w-full aspect-[4/3] mb-5 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <Image
                    src={getCloudinaryUrl(cert.image, { width: 800 })}
                    alt={`Sertifikat ${cert.title}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="font-black text-2xl mb-2 text-ink">{cert.title}</div>
                <div className="text-ink/60 text-xs mb-4 font-mono">{cert.number}</div>
                <p className="text-ink/60 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <WhyUsSection />

      {/* Menu Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-14">
            <p className="text-green font-bold text-sm uppercase tracking-widest mb-3">100+ Pilihan</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-tight">
              Menu dari 6<br />ragam cita rasa.
            </h2>
            <p className="text-ink/60 mt-4 text-lg max-w-lg">
              Nusantara, Jepang, Korea, India, China, dan menu kustom. Tiap minggu bergilir — karyawan nggak akan bosan.
            </p>
          </div>
          <MenuGrid preview />
          <div className="text-center mt-10">
            <Link href="/menu" className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-ink px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-brand/30">
              Lihat Semua Menu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <ClientLogos />

      {/* YouTube Social Proof Strip */}
      <section className="py-6 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
            <span className="text-white/70 text-xs uppercase tracking-widest font-bold">Our Review</span>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <span className="text-white font-bold text-sm">ShantyDenny</span>
              <span className="text-white/70 text-xs">3,38 juta subscriber</span>
              <span className="text-white/70 hidden sm:inline">·</span>
              <span className="text-white font-bold text-sm">EnjoyAja</span>
              <span className="text-white/70 text-xs">444 rb subscriber</span>
              <span className="text-white/70 hidden sm:inline">·</span>
              <span className="text-white font-bold text-sm">Street Foods Village</span>
              <span className="text-white/70 text-xs">938 rb subscriber</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* CTA Banner */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand/5 via-transparent to-teal/5" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink mb-4 leading-tight">
            Mulai Bermitra<br />
            dengan{' '}
            <span className="text-green">RETABA</span>
          </h2>

          {/* Price anchor */}
          <div className="inline-flex items-center gap-3 bg-brand/20 border border-brand/40 rounded-2xl px-6 py-3 mb-6">
            <span className="text-ink font-bold text-sm">Paket Catering Corporate Harian</span>
            <span className="text-ink/30">·</span>
            <span className="text-green font-black text-sm">
              Harga disesuaikan kebutuhan
            </span>
          </div>

          <p className="text-ink/60 text-lg mb-10 max-w-2xl mx-auto">
            Kirim pesan sekarang. Kami akan balas dalam 1×24 jam dengan penawaran yang pas buat jumlah karyawan dan lokasi perusahaan Anda.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green hover:bg-green/90 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-green/30 hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Minta Penawaran via WhatsApp
          </a>

          <p className="mt-4 text-ink/60 text-base">
            Atau kirim email ke{' '}
            <a href={`mailto:${EMAIL}`} className="text-green hover:underline font-semibold">
              {EMAIL}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
