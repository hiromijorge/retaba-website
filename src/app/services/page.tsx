import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Layanan',
  description:
    'RETABA menyediakan layanan Catering Harian untuk perusahaan/pabrik, Catering Event Korporat (Snack Box, Nasi Box, Buffet), dan Program Pembelian Produk Klien.',
  alternates: { canonical: 'https://retaba.co.id/services' },
};

const WA_LINK = 'https://wa.me/6208887888808?text=Halo%20RETABA%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20catering%20Anda.';

const services = [
  {
    title: 'Catering Harian',
    description:
      'Solusi makan siang harian untuk perusahaan dan pabrik. Jadwal menu mingguan yang terus berganti agar karyawan tidak bosan. Setiap paket lengkap dan bergizi seimbang.',
    features: [
      'Nasi putih pulen berkualitas',
      'Lauk utama (protein pilihan)',
      'Sayur segar dan bergizi',
      'Sambal khas RETABA',
      'Buah segar penutup',
      'Kerupuk sebagai pelengkap',
      'Jadwal menu mingguan bervariasi',
      'Pengiriman tepat waktu',
    ],
    color: 'yellow' as const,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Catering Event Korporat',
    description:
      'Layanan lengkap untuk berbagai event perusahaan mulai dari rapat internal, seminar, hingga gathering besar. Penyajian profesional dan menu yang dapat dikustomisasi.',
    features: [
      'Snack Box — aneka camilan premium',
      'Nasi Box — paket makan lengkap',
      'Nasi Buffet — prasmanan untuk gathering',
      'Coffee Break — minuman & snack',
      'Setup meja penyajian profesional',
      'Dapat disesuaikan dengan tema event',
      'Kapasitas besar hingga ribuan porsi',
      'Tim profesional on-site',
    ],
    color: 'teal' as const,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Program Pembelian Produk',
    description:
      'Program inovatif di mana RETABA membeli produk dari perusahaan klien dan mendistribusikannya kepada karyawan klien lainnya. Program ini sudah berjalan sukses di Jawa Tengah.',
    features: [
      'RETABA membeli produk klien Anda',
      'Distribusi ke karyawan klien lainnya',
      'Saluran distribusi baru untuk bisnis Anda',
      'Karyawan mendapat akses produk pilihan',
      'Sudah terbukti sukses di Jawa Tengah',
      'Win-win solution untuk semua pihak',
      'Sistem yang transparan dan akuntabel',
      'Dukungan penuh tim RETABA',
    ],
    color: 'white' as const,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const packages = [
  { name: 'Paket Harian', price: 'Hubungi Kami', includes: ['Nasi', 'Lauk Utama', 'Sayur', 'Sambal', 'Buah', 'Kerupuk'], popular: false },
  { name: 'Paket Premium', price: 'Hubungi Kami', includes: ['Nasi', '2 Lauk Utama', 'Sayur', 'Sambal', 'Buah', 'Kerupuk', 'Minuman'], popular: true },
  { name: 'Paket Event', price: 'Custom', includes: ['Prasmanan/Box', 'Aneka Menu', 'Dekorasi Meja', 'Tim On-site', 'Kustomisasi Penuh'], popular: false },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green text-sm font-medium">Layanan Kami</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-ink mb-6">
            Solusi Catering{' '}
            <span className="text-green">Lengkap</span>
          </h1>
          <p className="text-ink/60 text-xl max-w-2xl mx-auto">
            Dari catering harian untuk pabrik hingga event korporat berskala besar, RETABA siap melayani semua kebutuhan Anda.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-surface/80 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">
              Pilihan <span className="text-green">Paket</span>
            </h2>
            <p className="text-ink/50">Harga disesuaikan dengan kebutuhan dan jumlah porsi perusahaan Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-6 rounded-2xl border transition-all ${
                  pkg.popular
                    ? 'bg-brand/10 border-brand/40'
                    : 'bg-ink/5 border-border'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-ink text-xs font-bold px-3 py-1 rounded-full">
                    Paling Populer
                  </div>
                )}
                <div className={`font-bold text-lg mb-1 ${pkg.popular ? 'text-green' : 'text-ink'}`}>
                  {pkg.name}
                </div>
                <div className="text-ink/40 text-sm mb-6">{pkg.price}</div>
                <ul className="space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ink/70">
                      <svg className={`w-4 h-4 shrink-0 ${pkg.popular ? 'text-green' : 'text-green'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-brand text-ink hover:bg-brand/90'
                      : 'bg-ink/8 text-ink hover:bg-ink/10'
                  }`}
                >
                  Dapatkan Penawaran
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">Area Layanan</h2>
          <p className="text-ink/50 mb-10">RETABA saat ini melayani di tiga kota utama</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {['Tangerang', 'Salatiga', 'Solo'].map((city) => (
              <div key={city} className="p-6 rounded-2xl bg-ink/5 border border-border text-center">
                <div className="text-4xl mb-3">📍</div>
                <div className="text-ink font-bold text-lg">{city}</div>
                <div className="text-ink/40 text-sm mt-1">Jawa Tengah / Banten</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green/5 border-t border-green/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">
            Tertarik dengan Layanan Kami?
          </h2>
          <p className="text-ink/60 mb-8">
            Hubungi tim RETABA sekarang untuk mendapatkan penawaran harga terbaik sesuai kebutuhan perusahaan Anda.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green hover:bg-green/90 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all hover:shadow-2xl hover:shadow-green/30 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Minta Penawaran via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
