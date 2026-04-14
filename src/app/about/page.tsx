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
    description: 'Setiap bahan dipilih dengan teliti, diproses secara higienis, dan telah melalui uji laboratorium keamanan pangan.',
    icon: '⭐',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
  },
  {
    title: 'Halal & Terpercaya',
    description: 'Bersertifikat Halal MUI resmi (No. ID33110014801751123) dan SLHS untuk memastikan ketenangan seluruh pelanggan.',
    icon: '☪',
    image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144131/retaba/certification-images/1.png',
    isLogo: true,
  },
  {
    title: 'Fleksibel & Responsif',
    description: 'Menu dan paket disesuaikan dengan kebutuhan dan anggaran perusahaan Anda. Tim kami mudah dihubungi dan cepat merespons perubahan mendadak.',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
  },
  {
    title: 'Kemitraan Jangka Panjang',
    description: 'Kami membangun hubungan yang saling menguntungkan dan jangka panjang dengan setiap klien kami.',
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop',
  },
];



export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pb-12 overflow-hidden bg-white pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=800&fit=crop"
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
            PT. Receh Tapi Banyak — mitra catering terpercaya untuk perusahaan Anda.
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
                  RETABA lahir dari keinginan sederhana: menyediakan makanan berkualitas, halal, dan terjangkau
                  untuk para pekerja di industri. Kami percaya bahwa makan siang yang baik adalah hak setiap karyawan.
                </p>
                <p>
                  Berdiri pada tahun 2023 di Jawa Tengah, RETABA (singkatan dari PT. Receh Tapi Banyak) memulai
                  perjalanannya dengan melayani beberapa perusahaan lokal. Dengan komitmen pada kualitas dan
                  kepercayaan, kami berhasil mendapatkan sertifikasi Halal MUI dan SLHS di tahun yang sama.
                </p>
                <p>
                  Kini RETABA telah melayani lebih dari 20 perusahaan aktif termasuk PT Indofood Sukses Makmur,
                  PT Wipro Unza Vitalis Indonesia, PT Konimex, dan perusahaan-perusahaan lainnya. Kami
                  beroperasi di empat kota: Tangerang, Semarang, Salatiga, dan Solo.
                </p>
                <p>
                  Yang membedakan kami adalah komitmen pada kualitas yang dapat diverifikasi — bukan sekadar
                  klaim. Halal MUI bersertifikat resmi, SLHS dari pemerintah, dan uji laboratorium pangan
                  independen menjadi standar operasional kami setiap hari.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
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
                    <Image src={getCloudinaryUrl('https://res.cloudinary.com/dr62jpnos/image/upload/v1776144131/retaba/certification-images/1.png', { width: 200 })} alt="Halal MUI" fill className="object-contain p-0.5" />
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
              Prinsip-prinsip yang menjadi fondasi operasional dan pelayanan RETABA setiap harinya.
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
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=600&fit=crop"
            alt="Jabat tangan kolaborasi"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">
            Hubungi Kami
          </h2>
          <p className="text-ink/60 mb-8">
            Jadilah bagian dari keluarga besar klien RETABA dan rasakan perbedaan kualitas catering kami.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green hover:bg-green/90 text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-green/30"
          >
            Minta Penawaran via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
