import type { Metadata } from 'next';
import MenuGrid from '@/components/MenuGrid';
import { menuItems } from '@/data/menu';

const siteUrl = 'https://retaba.co.id';
const WA_LINK = 'https://wa.me/6208887888808?text=Halo%20RETABA%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20catering%20Anda.';

const menuJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Menu Catering RETABA',
  description: 'Pilihan menu lengkap catering perusahaan RETABA — Nusantara, Jepang, Chinese, Korea, India',
  url: `${siteUrl}/menu`,
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Protein / Lauk Utama',
      hasMenuItem: menuItems
        .filter((m) => m.category === 'protein')
        .map((m) => ({ '@type': 'MenuItem', name: m.name, description: m.description })),
    },
    {
      '@type': 'MenuSection',
      name: 'Pelengkap',
      hasMenuItem: menuItems
        .filter((m) => m.category === 'pelengkap')
        .map((m) => ({ '@type': 'MenuItem', name: m.name, description: m.description })),
    },
    {
      '@type': 'MenuSection',
      name: 'Sayuran',
      hasMenuItem: menuItems
        .filter((m) => m.category === 'sayur')
        .map((m) => ({ '@type': 'MenuItem', name: m.name, description: m.description })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Jelajahi 100+ pilihan menu catering RETABA — Nusantara, Jepang, Chinese, Korea, India. Semua menu halal bersertifikat dan menggunakan bahan segar berkualitas.',
  alternates: { canonical: `${siteUrl}/menu` },
};

const menuTypes = ['Nusantara', 'Japanese', 'Chinese', 'Korean', 'Indian', 'Customize'];

const packageItems = [
  {
    label: 'Nasi Putih',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10c0-3.5 3.5-6 8-6s8 2.5 8 6v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z" />
        <path d="M8 10c.5-1 1.5-2 4-2s3.5 1 4 2" />
      </svg>
    ),
    color: 'yellow',
  },
  {
    label: 'Lauk Utama',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.5 8.5c-1-2-3-3-5-3s-4 1-5 3c-1.5 3-1 7 2 9.5 1.5 1.2 3.5 1.2 5 0 1.2-1 2-2.5 2.5-4" />
        <circle cx="15.5" cy="6.5" r="1.5" />
        <path d="M17 4c1.5 0 3 1 3 3s-1 3-3 3" />
      </svg>
    ),
    color: 'green',
  },
  {
    label: 'Sayuran',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-2 6-5 6-9 0-3-2-6-6-8-4 2-6 5-6 8 0 4 2 7 6 9Z" />
        <path d="M12 22V5" />
        <path d="M12 5c0-2 1.5-4 3.5-4.5" />
        <path d="M12 8c-2-1-4-1-5.5.5" />
      </svg>
    ),
    color: 'teal',
  },
  {
    label: 'Sambal',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2c-3 0-5 2-5 5 0 1 .5 2 1 2.5C6 10 4 12 4 15c0 3 3 6 8 6s8-3 8-6c0-3-2-5-5-5.5.5-.5 1-1.5 1-2.5 0-3-2-5-3-5Z" />
        <path d="M10 15c0 1.5 1 2.5 2 2.5s2-1 2-2.5" />
      </svg>
    ),
    color: 'yellow',
  },
  {
    label: 'Buah',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20c3.5 0 6-2.5 6-6 0-3.5-2.5-7-6-9-3.5 2-6 5.5-6 9 0 3.5 2.5 6 6 6Z" />
        <path d="M12 5V3" />
        <path d="M15 3c-1 0-2 1-3 2" />
      </svg>
    ),
    color: 'green',
  },
  {
    label: 'Kerupuk',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="7" />
        <circle cx="10" cy="10" r="1" fill="currentColor" />
        <circle cx="14" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
        <circle cx="9" cy="13" r="1" fill="currentColor" />
        <circle cx="15" cy="13" r="1" fill="currentColor" />
        <circle cx="11" cy="11" r=".5" fill="currentColor" />
        <circle cx="13" cy="15" r=".5" fill="currentColor" />
      </svg>
    ),
    color: 'teal',
  },
];

export default function MenuPage() {
  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green text-sm font-medium">100+ Pilihan Menu</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-ink mb-6">
            Menu <span className="text-green">RETABA</span>
          </h1>
          <p className="text-ink/60 text-xl max-w-2xl mx-auto mb-8">
            Dari masakan Nusantara otentik sampai cita rasa internasional. Semua halal, higienis, dan dibikin supaya karyawan betah.
          </p>

          {/* Menu type badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            {menuTypes.map((type) => (
              <span
                key={type}
                className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                  type === 'Nusantara' ? 'bg-brand/20 text-green'
                  : type === 'Japanese' ? 'bg-red-500/20 text-red-400'
                  : type === 'Chinese' ? 'bg-orange-500/20 text-orange-400'
                  : type === 'Korean' ? 'bg-pink-500/20 text-pink-400'
                  : type === 'Indian' ? 'bg-teal/20 text-teal'
                  : 'bg-green/20 text-green'
                }`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid with filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MenuGrid />
        </div>
      </section>

      {/* Daily package info — Vibrant redesign */}
      <section className="py-20 bg-teal/10 border-y border-teal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-black text-ink mb-4">
              Isi Setiap Paket Makan Siang
            </h2>
            <p className="text-ink/50 mb-10">Setiap porsi lengkap dan seimbang, langsung siap santap</p>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {packageItems.map((item) => {
                const bgClass = item.color === 'yellow' ? 'bg-yellow/20 border-yellow' : item.color === 'green' ? 'bg-green/20 border-green' : 'bg-teal/20 border-teal';
                const textClass = item.color === 'yellow' ? 'text-yellow' : item.color === 'green' ? 'text-green' : 'text-teal';
                return (
                  <div key={item.label} className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 ${bgClass} hover:-translate-y-1 transition-transform`}>
                    <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center ${textClass}`}>
                      {item.icon}
                    </div>
                    <span className="text-ink font-semibold text-xs text-center">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">
            Mau Lihat Jadwal Menu Lengkap?
          </h2>
          <p className="text-ink/70 mb-8 max-w-xl mx-auto">
            Kami punya 100+ menu yang bergilir tiap minggu. Chat kami untuk dapetin jadwal lengkap dan penawaran harga sesuai jumlah porsi.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green hover:bg-green/90 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all hover:shadow-2xl hover:shadow-green/30 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.887c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Minta Jadwal Menu via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
