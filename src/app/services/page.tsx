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
      'Makan siang rutin buat karyawan. Menu tiap minggu selalu berganti, porsi cukup, dan diantar tepat waktu ke kantor atau pabrik.',
    features: [
      'Nasi putih pulen',
      'Lauk utama (ayam, daging, atau seafood)',
      'Sayur segar',
      'Sambal khas RETABA',
      'Buah segar',
      'Kerupuk renyah',
      'Susu segar',
      'Menu bergilir tiap minggu',
      'Pengiriman harian on-time',
    ],
    color: 'yellow' as const,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Catering Event Korporat',
    description:
      'Acara rapat, seminar, gathering, atau perayaan di kantor? Kami siapkan snack box, nasi box, atau prasmanan dengan penyajian rapi.',
    features: [
      'Snack Box — aneka camilan pilihan',
      'Nasi Box — lengkap dan praktis',
      'Nasi Buffet — untuk acara besar',
      'Coffee Break — minuman & kudapan',
      'Setup meja penyajian rapi',
      'Bisa disesuaikan tema acara',
      'Kapasitas mulai puluhan sampai ribuan porsi',
      'Tim on-site saat hari-H',
    ],
    color: 'teal' as const,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Program Pembelian Produk',
    description:
      'Kami beli produk dari perusahaan Anda, lalu distribusikan ke karyawan klien lain. Program ini sudah jalan sukses di Jawa Tengah.',
    features: [
      'RETABA beli produk dari klien',
      'Distribusi ke karyawan klien lain',
      'Saluran distribusi tambahan buat bisnis Anda',
      'Karyawan dapat akses produk pilihan',
      'Sudah terbukti di Jawa Tengah',
      'Saling menguntungkan',
      'Sistem transparan',
      'Dukungan tim RETABA penuh',
    ],
    color: 'white' as const,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const packages = [
  {
    name: 'Paket Harian',
    price: 'Hubungi Kami',
    includes: ['Nasi Putih', 'Lauk Utama', 'Sayur', 'Sambal', 'Buah', 'Kerupuk'],
    accent: 'yellow',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Paket Premium',
    price: 'Hubungi Kami',
    includes: ['Nasi Putih', '2 Lauk Utama', 'Sayur', 'Sambal', 'Buah', 'Kerupuk', 'Minuman'],
    accent: 'green',
    popular: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    name: 'Paket Event',
    price: 'Custom',
    includes: ['Prasmanan / Box', 'Aneka Menu', 'Dekorasi Meja', 'Tim On-site', 'Kustomisasi Penuh'],
    accent: 'teal',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green text-sm font-medium">Layanan Kami</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-ink mb-6">
            Layanan Catering{' '}
            <span className="text-green">Buat Perusahaan</span>
          </h1>
          <p className="text-ink/60 text-xl max-w-2xl mx-auto">
            Dari makan siang harian buat pabrik sampai acara kantor berskala besar — kami siap bantu.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Packages — Light & Professional */}
      <section className="py-20 bg-yellow/10 border-y border-yellow/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black text-ink mb-4">
              Pilihan <span className="text-green">Paket</span>
            </h2>
            <p className="text-ink/50 text-lg max-w-xl mx-auto">
              Harga menyesuaikan jumlah porsi dan kebutuhan perusahaan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {packages.map((pkg) => {
              const isPopular = 'popular' in pkg && pkg.popular;
              const accentBg = pkg.accent === 'yellow' ? 'bg-yellow' : pkg.accent === 'teal' ? 'bg-teal' : 'bg-green';
              const accentText = pkg.accent === 'yellow' ? 'text-yellow' : pkg.accent === 'teal' ? 'text-teal' : 'text-green';
              const accentBorder = pkg.accent === 'yellow' ? 'border-yellow' : pkg.accent === 'teal' ? 'border-teal' : 'border-green';

              return (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col rounded-[2rem] p-8 bg-white transition-all duration-300 hover:-translate-y-2 border-2 ${accentBorder} shadow-lg hover:shadow-xl`}
                >
                  {/* Popular ribbon */}
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className={`${accentBg} text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg`}>
                        Paling Laris
                      </div>
                    </div>
                  )}

                  {/* Icon circle */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${accentBg} text-white`}>
                    {pkg.icon}
                  </div>

                  <h3 className="text-2xl font-black mb-1 text-ink">{pkg.name}</h3>
                  <div className={`text-sm font-bold mb-6 ${accentText}`}>{pkg.price}</div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-ink/70">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${accentBg} text-white`}>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${
                      isPopular
                        ? `${accentBg} text-white hover:opacity-90`
                        : 'bg-ink/5 text-ink hover:bg-ink/10'
                    }`}
                  >
                    Tanya Harga
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">Area Layanan</h2>
          <p className="text-ink/50 mb-10">Saat ini kami mengantar ke empat kota ini setiap hari</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { city: 'Tangerang', province: 'Banten' },
              { city: 'Semarang', province: 'Jawa Tengah' },
              { city: 'Salatiga', province: 'Jawa Tengah' },
              { city: 'Solo', province: 'Jawa Tengah' },
            ].map((loc) => (
              <div key={loc.city} className="p-6 rounded-2xl bg-teal/10 border-2 border-teal/30 text-center hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-teal text-white flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-ink font-bold text-lg">{loc.city}</div>
                <div className="text-ink/50 text-sm mt-1">{loc.province}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">
            Mau Diskusi Kebutuhan Catering?
          </h2>
          <p className="text-ink/70 mb-8">
            Chat kami aja dulu. Kami akan bantu pilih paket dan menu yang paling cocok buat perusahaan Anda.
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
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>
    </main>
  );
}
