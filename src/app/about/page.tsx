import type { Metadata } from 'next';
import Image from 'next/image';

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
  },
  {
    title: 'Halal & Terpercaya',
    description: 'Bersertifikat Halal MUI resmi (No. ID33110014801751123) dan SLHS untuk memastikan ketenangan seluruh pelanggan.',
    icon: '☪',
  },
  {
    title: 'Inovasi Berkelanjutan',
    description: 'Program pembelian produk klien yang unik menciptakan ekosistem bisnis yang saling menguntungkan.',
    icon: '💡',
  },
  {
    title: 'Kemitraan Jangka Panjang',
    description: 'Kami membangun hubungan yang saling menguntungkan dan jangka panjang dengan setiap klien kami.',
    icon: '🤝',
  },
];

const milestones = [
  { year: '2023', title: 'Pendirian RETABA', desc: 'PT. Receh Tapi Banyak resmi berdiri dan memulai operasional catering di Jawa Tengah.' },
  { year: '2023', title: 'Sertifikasi Halal', desc: 'Mendapatkan sertifikasi Halal MUI dengan nomor ID33110014801751123.' },
  { year: '2023', title: 'Klien Pertama', desc: 'Mulai melayani perusahaan-perusahaan besar di wilayah Jawa Tengah.' },
  { year: '2024', title: 'Ekspansi Program', desc: 'Program pembelian produk klien berhasil diimplementasikan dan mendapat respons positif.' },
  { year: '2024', title: 'Ekspansi Tangerang', desc: 'Membuka layanan di Tangerang untuk melayani lebih banyak perusahaan.' },
  { year: '2025', title: 'Pertumbuhan Pesat', desc: 'Melayani 6+ perusahaan besar termasuk Indofood dan Wipro Unza Vitalis.' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden bg-white pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=800&fit=crop"
            alt="Tim dapur RETABA"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-espresso/80 to-espresso/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green text-sm font-medium">Tentang Kami</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-ink mb-4">
            Kami adalah <span className="text-green">RETABA</span>
          </h1>
          <p className="text-ink/60 text-xl max-w-2xl">
            PT. Receh Tapi Banyak — mitra catering terpercaya untuk perusahaan Anda.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
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
                  Kini RETABA telah melayani lebih dari 6 perusahaan besar termasuk PT Indofood Sukses Makmur,
                  PT Wipro Unza Vitalis Indonesia, PT Konimex, dan beberapa klien bergengsi lainnya. Kami
                  beroperasi di tiga kota: Tangerang, Salatiga, dan Solo.
                </p>
                <p>
                  Yang membedakan kami adalah program inovatif pembelian produk klien, yang menciptakan ekosistem
                  bisnis win-win antara RETABA, klien perusahaan, dan karyawan mereka.
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
              <div className="absolute -bottom-6 -left-6 bg-brand text-ink p-6 rounded-2xl shadow-2xl">
                <div className="text-3xl font-black">Est.</div>
                <div className="text-5xl font-black leading-none">2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface/80 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">
              Nilai <span className="text-green">Kami</span>
            </h2>
            <p className="text-ink/50 max-w-xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi operasional dan pelayanan RETABA setiap harinya.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-ink/5 border border-border hover:border-brand/30 transition-all hover:-translate-y-1">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-ink font-bold mb-3">{value.title}</h3>
                <p className="text-ink/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">
              Perjalanan <span className="text-green">RETABA</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-ink/8" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-8">
                  <div className="relative flex-shrink-0 w-16 flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full border-2 z-10 mt-1 ${
                      i % 2 === 0 ? 'bg-brand border-brand' : 'bg-green border-green'
                    }`} />
                    <div className="text-ink/30 text-xs mt-1 font-mono">{m.year}</div>
                  </div>
                  <div className="pb-8">
                    <h3 className="text-ink font-bold mb-1">{m.title}</h3>
                    <p className="text-ink/50 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand/5 border-t border-brand/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">
            Mari Berkolaborasi Bersama RETABA
          </h2>
          <p className="text-ink/60 mb-8">
            Jadilah bagian dari keluarga besar klien RETABA dan rasakan perbedaan kualitas catering kami.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-ink px-8 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-brand/30"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>
    </main>
  );
}
