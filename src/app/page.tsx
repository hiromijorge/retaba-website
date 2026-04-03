import type { Metadata } from 'next';
import Image from 'next/image';
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

const weeklyMenu = [
  { day: 'Senin', items: ['Ayam Rendang', 'Tumis Kangkung', 'Tempe Orek', 'Sambal', 'Buah'] },
  { day: 'Selasa', items: ['Chicken Teriyaki', 'Tumis Buncis', 'Tahu Goreng', 'Sambal', 'Buah'] },
  { day: 'Rabu', items: ['Ikan Nila Goreng', 'Sayur Asem', 'Perkedel', 'Sambal', 'Buah'] },
  { day: 'Kamis', items: ['Beef Teriyaki', 'Tumis Capcay', 'Tempe Goreng', 'Sambal', 'Buah'] },
  { day: 'Jumat', items: ['Ayam Goreng', 'Urap', 'Telur Balado', 'Sambal', 'Buah'] },
];

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

      {/* Why Us */}
      <WhyUsSection />

      {/* Weekly Menu Preview */}
      <section className="py-24 bg-surface/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-green text-sm font-medium">Jadwal Mingguan</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-ink mb-5">
              Contoh Menu <span className="text-green">Minggu Ini</span>
            </h2>
            <p className="text-ink/50 text-lg max-w-xl mx-auto">
              Setiap paket makan siang lengkap dengan nasi putih, lauk utama, sayur, sambal, buah, dan kerupuk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {weeklyMenu.map((day, i) => (
              <div
                key={day.day}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  i === 4
                    ? 'bg-brand/10 border-brand/30'
                    : 'bg-ink/5 border-border hover:border-border'
                }`}
              >
                <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${i === 4 ? 'text-green' : 'text-ink/40'}`}>
                  {day.day}
                </div>
                <ul className="space-y-2">
                  {day.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 4 ? 'bg-brand' : 'bg-white/30'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-ink px-8 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-brand/30"
            >
              Lihat Semua Menu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Preview Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-ink mb-4">
              Pilihan <span className="text-green">Menu Kami</span>
            </h2>
            <p className="text-ink/50">Sebagian dari koleksi menu lengkap kami</p>
          </div>
          <MenuGrid preview />
          <div className="text-center mt-10">
            <Link href="/menu" className="inline-flex items-center gap-2 border border-border hover:border-brand/40 hover:text-green text-ink/70 px-6 py-3 rounded-full text-sm font-medium transition-all">
              Lihat Semua Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Our Program */}
      <section className="py-24 bg-surface/80 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-green text-sm font-medium">Program Inovatif</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-ink mb-6 leading-tight">
                Program{' '}
                <span className="text-green">Pembelian</span>
                <br />
                Produk Klien
              </h2>
              <p className="text-ink/60 leading-relaxed mb-6">
                RETABA tidak hanya menyediakan catering. Kami juga membeli produk dari perusahaan klien kami,
                kemudian mendistribusikannya kepada karyawan perusahaan klien lainnya.
              </p>
              <p className="text-ink/60 leading-relaxed mb-8">
                Program ini sudah berjalan sukses di Jawa Tengah dan memberikan manfaat ganda:
                perusahaan mendapat saluran distribusi baru, karyawan mendapat akses produk berkualitas.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  'Perusahaan klien mendapatkan saluran distribusi baru',
                  'Karyawan klien mendapat akses produk pilihan',
                  'Win-win solution untuk semua pihak',
                  'Sudah terbukti sukses di Jawa Tengah',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green/20 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-ink/70 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-green hover:bg-green/90 text-ink px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-green/30"
              >
                Pelajari Program Ini
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-brand/10 border border-brand/20 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-black text-green mb-1">B2B</div>
                    <div className="text-ink/50 text-xs">Business to Business</div>
                  </div>
                  <div className="relative h-40 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop"
                      alt="Distribusi produk RETABA"
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                    <div className="absolute inset-0 bg-ink/40" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-40 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"
                      alt="Katering berkualitas RETABA"
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                    <div className="absolute inset-0 bg-ink/40" />
                  </div>
                  <div className="bg-green/10 border border-green/20 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-black text-green mb-1">Win</div>
                    <div className="text-ink/50 text-xs">Win Solution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <ClientLogos />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Certifications */}
      <section className="py-20 bg-surface/80 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-green text-sm font-medium">Sertifikasi Kami</span>
          </div>
          <h2 className="text-3xl font-black text-ink mb-4">Terjamin & Bersertifikat</h2>
          <p className="text-ink/50 mb-12 max-w-xl mx-auto">
            Kami memegang sertifikasi resmi yang memastikan setiap produk catering RETABA aman dan halal dikonsumsi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: 'Halal MUI',
                number: 'ID33110014801751123',
                icon: '☪',
                desc: 'Sertifikasi Halal resmi dari Majelis Ulama Indonesia',
                color: 'yellow',
              },
              {
                title: 'SLHS',
                number: 'Sertifikat Laik Higiene Sanitasi',
                icon: '🏅',
                desc: 'Memenuhi standar higiene dan sanitasi pangan nasional',
                color: 'teal',
              },
              {
                title: 'Uji Lab',
                number: 'Laboratory Tested',
                icon: '🔬',
                desc: 'Setiap produk diuji keamanannya di laboratorium pangan',
                color: 'white',
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className={`p-6 rounded-2xl border text-left ${
                  cert.color === 'yellow'
                    ? 'bg-brand/10 border-brand/30'
                    : cert.color === 'teal'
                    ? 'bg-green/10 border-green/30'
                    : 'bg-ink/5 border-border'
                }`}
              >
                <div className="text-3xl mb-4">{cert.icon}</div>
                <div className={`font-black text-xl mb-1 ${cert.color === 'yellow' ? 'text-green' : cert.color === 'teal' ? 'text-green' : 'text-white'}`}>
                  {cert.title}
                </div>
                <div className="text-ink/30 text-xs mb-3 font-mono">{cert.number}</div>
                <p className="text-ink/50 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-green/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink mb-6 leading-tight">
            Siap Bermitra dengan{' '}
            <span className="text-green">RETABA?</span>
          </h2>
          <p className="text-ink/60 text-lg mb-10 max-w-2xl mx-auto">
            Konsultasikan kebutuhan catering perusahaan Anda dengan tim kami. Respon cepat, harga kompetitif, kualitas terjamin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand/90 text-ink px-8 py-4 rounded-2xl font-bold text-base transition-all hover:shadow-2xl hover:shadow-brand/30 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hubungi via WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-border hover:border-border text-ink px-8 py-4 rounded-2xl font-semibold text-base transition-all hover:-translate-y-1"
            >
              Lihat Kontak Lengkap
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
