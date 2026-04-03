import type { Metadata } from 'next';
import { clients, testimonials } from '@/data/clients';

export const metadata: Metadata = {
  title: 'Klien Kami',
  description:
    'Klien-klien terpercaya RETABA termasuk PT Indofood Sukses Makmur, PT Wipro Unza Vitalis, PT Konimex, dan perusahaan besar lainnya.',
  alternates: { canonical: 'https://retaba.co.id/clients' },
};

const WA_LINK = 'https://wa.me/6208887888808?text=Halo%20RETABA%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20catering%20Anda.';

const stats = [
  { value: '6+', label: 'Perusahaan Klien' },
  { value: '3', label: 'Kota Layanan' },
  { value: '500+', label: 'Porsi Per Hari' },
  { value: '100%', label: 'Kepuasan Klien' },
];

export default function ClientsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green text-sm font-medium">Klien Terpercaya</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-ink mb-6">
            Dipercaya oleh{' '}
            <span className="text-green">Perusahaan Terkemuka</span>
          </h1>
          <p className="text-ink/60 text-xl max-w-2xl mx-auto">
            Lebih dari 6 perusahaan besar telah mempercayakan kebutuhan catering mereka kepada RETABA.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface/80 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-ink/5 border border-border">
                <div className="text-4xl font-black text-green mb-1">{stat.value}</div>
                <div className="text-ink/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-ink mb-12 text-center">
            Klien <span className="text-green">Kami</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <article key={client.id} className="group p-8 rounded-2xl bg-ink/5 border border-border hover:border-brand/30 hover:bg-brand/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand/20 to-green/20 flex items-center justify-center shrink-0 group-hover:from-brand/30 group-hover:to-green/30 transition-colors">
                    <span className="text-green font-black text-xl">{client.shortName.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-ink font-bold leading-tight">{client.name}</h3>
                    <div className="text-ink/40 text-sm mt-1">{client.industry}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-ink/40 text-xs ml-1">Klien Aktif</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface/80 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">
              Kata Mereka tentang <span className="text-green">RETABA</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article key={t.id} className="p-6 rounded-2xl bg-ink/5 border border-border flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-ink/70 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand/30 to-green/30 flex items-center justify-center">
                    <span className="text-ink font-bold text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="text-ink text-sm font-semibold">{t.name}</div>
                    <div className="text-ink/40 text-xs">{t.role} · {t.company}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">
            Jadilah Bagian dari Keluarga RETABA
          </h2>
          <p className="text-ink/60 mb-8">
            Bergabunglah bersama perusahaan-perusahaan terkemuka yang telah mempercayakan catering mereka kepada kami.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-ink px-8 py-4 rounded-2xl font-bold text-base transition-all hover:shadow-2xl hover:shadow-brand/30 hover:-translate-y-1"
          >
            Diskusikan Kebutuhan Anda
          </a>
        </div>
      </section>
    </main>
  );
}
