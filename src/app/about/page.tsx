import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCloudinaryUrl } from '@/lib/cloudinary';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Kenali RETABA (PT. Receh Tapi Banyak) — perusahaan catering bersertifikat Halal yang berdiri sejak 2023, melayani perusahaan di Tangerang, Salatiga, dan Solo.',
  alternates: { canonical: 'https://retaba.co.id/about' },
};

const WA_LINK = 'https://wa.me/6208887888808?text=Halo%20RETABA%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20catering%20Anda.';

const values = [
  {
    title: 'Kualitas Tanpa Kompromi',
    description: 'Bahan segar, proses bersih, dan hasil uji lab rutin. Kami nggak main-main soal keamanan pangan.',
    icon: '⭐',
    image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776156297/retaba/about/cooking.jpg',
  },
  {
    title: 'Halal & Bisa Dicek',
    description: 'Sertifikat Halal MUI (No. ID33110014801751123) dan SLHS resmi. Bukan cuma pajangan, tapi bisa diverifikasi langsung.',
    icon: '☪',
    image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144131/retaba/certification-images/2.png',
    isLogo: true,
  },
  {
    title: 'Fleksibel & Responsif',
    description: 'Menu dan paket bisa disesuaikan anggaran. Ada perubahan mendadak? Tim kami siap diajak koordinasi cepat.',
    icon: '⚡',
    image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776156298/retaba/about/kitchen.jpg',
  },
  {
    title: 'Kemitraan Jangka Panjang',
    description: 'Kami percaya bisnis yang baik itu dibangun dari kepercayaan. Makanya klien kami banyak yang perpanjang kontrak bertahun-tahun.',
    icon: '🤝',
    image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776156299/retaba/about/handshake.jpg',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pb-12 overflow-hidden bg-white pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dr62jpnos/image/upload/v1776156300/retaba/about/hero-bg.jpg"
            alt="Hidangan RETABA"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand text-sm font-bold">Tentang Kami</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Kami adalah <span className="text-brand">RETABA</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            PT. Receh Tapi Banyak — mitra catering harian buat perusahaan dan pabrik di Jawa Tengah dan Banten.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-ink mb-6">
                Cerita di Balik <span className="text-green">RETABA</span>
              </h2>
              <div className="space-y-4 text-ink/60 leading-relaxed">
                <p>
                  RETABA berawal dari ide sederhana: karyawan pabrik juga pantas makan siang yang enak, halal, dan aman.
                  Bukan makanan sembarangan, tapi yang benar-benar diperhatikan dari dapurnya.
                </p>
                <p>
                  Berdiri tahun 2023 di Jawa Tengah, kami mulai dari melayani beberapa perusahaan lokal.
                  Dalam waktu singkat, kami dapat sertifikasi Halal MUI dan SLHS — bukti bahwa kami serius soal standar.
                </p>
                <p>
                  Sekarang RETABA sudah menangani lebih dari 20 perusahaan aktif, mulai dari Indofood, Wipro Unza,
                  Konimex, sampai Graphic Packaging. Operasional kami jalan di Tangerang, Semarang, Salatiga, dan Solo.
                </p>
                <p>
                  Apa yang buat kami beda? Semua klaim kami bisa dibuktikan. Sertifikat Halal bisa dicek,
                  SLHS resmi dari pemerintah, dan uji lab independen kami lakukan secara rutin.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dr62jpnos/image/upload/v1776156297/retaba/about/cooking.jpg"
                  alt="Tim RETABA sedang memasak"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
              </div>
              <Link href="/#sertifikasi" className="absolute -bottom-6 -left-6 bg-green text-white p-6 rounded-2xl shadow-2xl hover:bg-green/90 transition-colors cursor-pointer group">
                <div className="text-xs font-bold opacity-70 mb-1 uppercase tracking-widest">Halal MUI</div>
                <div className="text-2xl font-black leading-none flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 relative overflow-hidden">
                    <Image src={getCloudinaryUrl('https://res.cloudinary.com/dr62jpnos/image/upload/v1776144131/retaba/certification-images/2.png', { width: 200 })} alt="Halal MUI" fill className="object-contain p-0.5" />
                  </div>
                  Tersertifikasi
                </div>
                <div className="text-xs mt-2 opacity-80 group-hover:underline">Lihat sertifikasi lainnya →</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="keunggulan" className="py-16 bg-surface/80 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-ink mb-4">
              Keunggulan <span className="text-green">Kami</span>
            </h2>
            <p className="text-ink/50 max-w-xl mx-auto">
              Prinsip yang kami pegang teguh setiap hari, dari dapur sampai pengiriman.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-ink/5 border border-border hover:border-brand/30 transition-all hover:-translate-y-1">
                <div className="relative h-32 mb-4 rounded-xl overflow-hidden bg-white">
                  {value.isLogo ? (
                    <Image src={getCloudinaryUrl(value.image, { width: 400 })} alt={value.title} fill className="object-contain p-4" />
                  ) : (
                    <Image src={getCloudinaryUrl(value.image, { width: 600 })} alt={value.title} fill className="object-cover" />
                  )}
                </div>
                <h3 className="text-ink font-bold mb-3">{value.title}</h3>
                <p className="text-ink/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-brand/5 border-t border-brand/20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dr62jpnos/image/upload/v1776156301/retaba/about/cta-bg.jpg"
            alt="Jabat tangan kolaborasi"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">
            Tertarik Bekerja Sama?
          </h2>
          <p className="text-ink/60 mb-8">
            Mari ngobrol dulu. Kami akan dengarkan kebutuhan perusahaan Anda dan kasih penawaran yang cocok.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green hover:bg-green/90 text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-green/30"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>
    </main>
  );
}
