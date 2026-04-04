import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import WhyUsSection from '@/components/WhyUsSection';
import MenuGrid from '@/components/MenuGrid';
import ClientLogos from '@/components/ClientLogos';
import TestimonialSlider from '@/components/TestimonialSlider';

const siteUrl = 'https://retaba.co.id';
const WA_LINK = 'https://wa.me/6208887888808?text=Halo%20RETABA%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20catering%20Anda.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RETABA - PT. Receh Tapi Banyak',
  description: 'Jasa catering perusahaan bersertifikat Halal MUI, SLHS, dan teruji lab di Tangerang, Salatiga, Solo',
  url: siteUrl,
  telephone: '+6208887888808',
  email: 'info@retaba.co.id',
  foundingDate: '2023',
  servesCuisine: ['Indonesian', 'Japanese', 'Chinese', 'Korean', 'Indian'],
  areaServed: ['Tangerang', 'Salatiga', 'Solo'],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Tangerang',
      addressRegion: 'Banten',
      addressCountry: 'ID',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Salatiga',
      addressRegion: 'Jawa Tengah',
      addressCountry: 'ID',
    },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'Sertifikasi Halal MUI', credentialCategory: 'Halal Certification', identifier: 'ID33110014801751123' },
    { '@type': 'EducationalOccupationalCredential', name: 'SLHS - Sertifikat Laik Higiene Sanitasi' },
  ],
  sameAs: [`https://wa.me/6208887888808`],
};

export const metadata: Metadata = {
  title: 'Beranda',
  description: 'RETABA — Jasa catering perusahaan terpercaya, bersertifikat Halal MUI & SLHS, teruji lab. Menu bervariasi untuk karyawan Anda di Tangerang, Salatiga, dan Solo.',
  alternates: { canonical: siteUrl },
};

export default function HomePage() {
  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <HeroSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Certifications — moved up: first thing B2B procurement checks */}
      <section className="py-14 lg:py-16 bg-surface/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stat-led header — big number anchors the section */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
            <div>
              <span className="text-[72px] sm:text-[88px] font-black text-green leading-none">3</span>
              <p className="text-ink font-black text-2xl sm:text-3xl mt-1">Sertifikasi Resmi</p>
              <p className="text-ink/50 text-sm mt-2 max-w-sm">
                Dapat diverifikasi secara independen — bukan sekadar klaim di brosur.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white border border-border rounded-2xl px-5 py-3 self-start lg:self-auto">
              <div className="w-2 h-2 rounded-full bg-green" />
              <span className="text-ink/60 text-sm font-medium">Halal MUI · SLHS · Lab Tested</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Halal MUI',
                number: 'No. ID33110014801751123',
                icon: '☪',
                desc: 'Sertifikasi Halal resmi dari Majelis Ulama Indonesia — dapat diverifikasi online',
                color: 'yellow',
              },
              {
                title: 'SLHS',
                number: 'Sertifikat Laik Higiene Sanitasi',
                icon: '🏅',
                desc: 'Memenuhi standar higiene dan sanitasi pangan nasional dari pemerintah',
                color: 'teal',
              },
              {
                title: 'Uji Lab',
                number: 'Laboratory Tested',
                icon: '🔬',
                desc: 'Setiap produk diuji keamanannya di laboratorium pangan independen',
                color: 'green',
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className={`p-7 rounded-3xl border-2 text-center transition-all duration-300 hover:-translate-y-1 ${
                  cert.color === 'yellow'
                    ? 'bg-brand/10 border-brand/30'
                    : cert.color === 'teal'
                    ? 'bg-teal/10 border-teal/30'
                    : 'bg-green/10 border-green/30'
                }`}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <div className="font-black text-2xl mb-2 text-ink">{cert.title}</div>
                <div className="text-ink/50 text-xs mb-4 font-mono">{cert.number}</div>
                <p className="text-ink/60 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <WhyUsSection />

      {/* Menu Preview — single entry point */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left-aligned editorial header — breaks center pattern */}
          <div className="mb-10 lg:mb-14">
            <p className="text-green font-bold text-sm uppercase tracking-widest mb-3">100+ Pilihan</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-tight">
              Menu dari 6<br />kuliner dunia.
            </h2>
            <p className="text-ink/50 mt-4 text-lg max-w-lg">
              Nusantara, Jepang, Korea, India, China, dan menu kustom — jadwal berganti tiap minggu.
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
            <span className="text-white/50 text-xs uppercase tracking-widest font-bold">Ditampilkan di YouTube</span>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <span className="text-white font-bold text-sm">ShantyDenny</span>
              <span className="text-white/40 text-xs">3,38 juta subscriber</span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-white font-bold text-sm">EnjoyAja</span>
              <span className="text-white/40 text-xs">444 rb subscriber</span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-white font-bold text-sm">Street Foods Village</span>
              <span className="text-white/40 text-xs">938 rb subscriber</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* CTA Banner — single primary action + price anchor */}
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
            <span className="text-ink font-bold text-sm">Paket makan siang harian</span>
            <span className="text-ink/30">·</span>
            <span className="text-green font-black text-sm">
              {/* TODO: ganti dengan harga aktual Anda */}
              Hubungi kami untuk penawaran harga
            </span>
          </div>

          <p className="text-ink/60 text-lg mb-10 max-w-2xl mx-auto">
            Respon dalam 1×24 jam. Penawaran disesuaikan dengan jumlah karyawan dan lokasi perusahaan Anda.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green hover:bg-green/90 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-green/30 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Minta Penawaran via WhatsApp
          </a>

          <p className="mt-4 text-ink/40 text-sm">
            Atau kirim email ke{' '}
            <a href="mailto:info@retaba.co.id" className="text-green hover:underline font-medium">
              info@retaba.co.id
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
