import type { Metadata } from 'next';
import MenuGrid from '@/components/MenuGrid';
import { menuItems } from '@/data/menu';

const siteUrl = 'https://retaba.co.id';

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

export default function MenuPage() {
  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green text-sm font-medium">100+ Pilihan Menu</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-ink mb-6">
            Menu <span className="text-green">RETABA</span>
          </h1>
          <p className="text-ink/60 text-xl max-w-2xl mx-auto mb-8">
            Dari masakan Nusantara yang otentik hingga cita rasa internasional. Semua halal, higienis, dan lezat.
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
                  : type === 'Indian' ? 'bg-brand-600/20 text-green-400'
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

      {/* Daily package info */}
      <section className="py-20 bg-surface/80 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-black text-ink mb-4">
              Setiap Paket Makan Siang Meliputi:
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-8">
              {[
                { emoji: '🍚', label: 'Nasi Putih' },
                { emoji: '🍗', label: 'Lauk Utama' },
                { emoji: '🥬', label: 'Sayuran' },
                { emoji: '🌶', label: 'Sambal' },
                { emoji: '🍎', label: 'Buah' },
                { emoji: '🥐', label: 'Kerupuk' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-ink/5 border border-border">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-ink/60 text-xs text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
