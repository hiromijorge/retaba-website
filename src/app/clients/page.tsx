import type { Metadata } from 'next';
import Image from 'next/image';
import { clients, testimonials } from '@/data/clients';

export const metadata: Metadata = {
  title: 'Klien Kami',
  description:
    'Klien-klien terpercaya RETABA termasuk PT Indofood Sukses Makmur, PT Wipro Unza Vitalis, PT Konimex, dan perusahaan besar lainnya.',
  alternates: { canonical: 'https://retaba.co.id/clients' },
};

const WA_LINK = 'https://wa.me/6208887888808?text=Halo%20RETABA%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20catering%20Anda.';

const stats = [
  { value: '20+', label: 'Perusahaan Klien', color: 'yellow' as const },
  { value: '3', label: 'Kota Layanan', color: 'teal' as const },
  { value: '5.000+', label: 'Porsi Per Hari', color: 'green' as const },
  { value: '100+', label: 'Variasi Menu', color: 'yellow' as const },
];

export default function ClientsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green text-sm font-medium">Klien Terpercaya</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-ink mb-6">
            Dipercaya oleh{' '}
            <span className="text-green">Perusahaan Besar</span>
          </h1>
          <p className="text-ink/60 text-xl max-w-2xl mx-auto">
            Lebih dari 20 perusahaan aktif mempercayakan makan siang karyawannya kepada RETABA — dari pabrik FMCG sampai hotel.
          </p>
        </div>
      </section>

      {/* Stats — Vibrant redesign */}
      <section className="py-14 bg-yellow/10 border-y border-yellow/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const bgClass = stat.color === 'yellow' ? 'bg-yellow/30 border-yellow' : stat.color === 'teal' ? 'bg-teal/30 border-teal' : 'bg-green/30 border-green';
              const textClass = stat.color === 'yellow' ? 'text-yellow' : stat.color === 'teal' ? 'text-teal' : 'text-green';
              return (
                <div key={stat.label} className={`text-center p-6 rounded-2xl border-2 ${bgClass} hover:-translate-y-1 transition-transform`}>
                  <div className={`text-4xl font-black mb-1 ${textClass}`}>{stat.value}</div>
                  <div className="text-ink/70 text-sm font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-ink mb-10 text-center">
            Klien <span className="text-green">Kami</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <article key={client.id} className="group p-8 rounded-[2rem] bg-white border-2 border-yellow shadow-lg shadow-yellow/10 hover:shadow-xl hover:shadow-yellow/20 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-12 rounded-xl bg-yellow/20 border border-yellow flex items-center justify-center shrink-0 relative overflow-hidden p-1.5">
                    {client.logo ? (
                      <Image
                        src={client.logo}
                        alt={`Logo ${client.shortName}`}
                        fill
                        className="object-contain p-1.5"
                        sizes="80px"
                      />
                    ) : (
                      <span className="text-green font-black text-xl">{client.shortName.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-ink font-bold leading-tight">{client.name}</h3>
                    <div className="text-ink/40 text-sm mt-1">{client.industry}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-ink/40 text-xs ml-1 font-medium">Klien Aktif</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Vibrant redesign */}
      <section className="py-20 bg-green/10 border-y border-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-ink mb-4">
              Apa Kata Mereka tentang <span className="text-green">RETABA</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article key={t.id} className="p-8 rounded-[2rem] bg-white border-2 border-green shadow-lg shadow-green/10 flex flex-col hover:-translate-y-1 transition-transform">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-ink/70 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t-2 border-green/20">
                  <div className="w-12 h-12 rounded-full bg-green text-white flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-ink font-bold text-sm">{t.company}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">
            Jadi Bagian dari Klien RETABA
          </h2>
          <p className="text-ink/70 mb-8">
            Bergabunglah bersama perusahaan-perusahaan yang sudah mempercayakan makan siang karyawannya kepada kami.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green hover:bg-green/90 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all hover:shadow-2xl hover:shadow-green/30 hover:-translate-y-1"
          >
            Chat WhatsApp untuk Penawaran
          </a>
        </div>
      </section>
    </main>
  );
}
