import type { Metadata } from 'next';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WA_LINK, PHONE_DISPLAY, PHONE_TEL, EMAIL, SERVICE_AREAS_TEXT } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kontak',
  description:
    `Hubungi RETABA untuk layanan catering perusahaan. WhatsApp: ${PHONE_DISPLAY}. Email: ${EMAIL}. Layanan di ${SERVICE_AREAS_TEXT}.`,
  alternates: { canonical: '/contact' },
};


const contactMethods = [
  {
    icon: (
      <WhatsAppIcon className="w-7 h-7" />
    ),
    label: 'WhatsApp',
    value: PHONE_DISPLAY,
    href: WA_LINK,
    desc: 'Balasan paling cepat',
    color: 'teal' as const,
    cta: 'Chat Sekarang',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    desc: 'Untuk pertanyaan resmi',
    color: 'yellow' as const,
    cta: 'Kirim Email',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Telepon',
    value: PHONE_DISPLAY,
    href: PHONE_TEL,
    desc: 'Hubungi kami di jam kerja',
    color: 'green' as const,
    cta: 'Hubungi',
  },
];

const faqs = [
  {
    q: 'Berapa minimum order untuk catering harian?',
    a: 'Minimal 20 porsi per hari. Kalau jumlahnya lebih besar, harganya bisa lebih hemat lagi.',
  },
  {
    q: 'Apakah RETABA melayani di luar kota yang disebutkan?',
    a: `Saat ini kami rutin mengantar ke ${SERVICE_AREAS_TEXT}. Untuk kota lain, silakan tanya dulu — bisa kita diskusikan.`,
  },
  {
    q: 'Bagaimana sistem pembayaran RETABA?',
    a: 'Kami biasanya pakai sistem invoice bulanan. Tapi kalau perusahaan Anda punya sistem sendiri, bisa kita bicarakan.',
  },
  {
    q: 'Apakah menu bisa dikustomisasi?',
    a: 'Bisa. Kami punya layanan Customize Food yang menu-nya bisa disesuaikan dengan permintaan atau anggaran perusahaan Anda.',
  },
  {
    q: 'Berapa lama proses onboarding klien baru?',
    a: 'Biasanya 3-5 hari kerja setelah deal kontrak. Itu sudah termasuk penyelarasan menu, jadwal, dan preferensi khusus.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function ContactPage() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Hero */}
      <section className="pt-28 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green text-sm font-medium">Hubungi Kami</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-ink mb-6">
            Hubungi <span className="text-green">Kami</span>
          </h1>
          <p className="text-ink/60 text-xl max-w-2xl mx-auto">
            Punya pertanyaan atau mau minta penawaran? Chat kami aja — kami akan bantu cari solusi yang pas.
          </p>
        </div>
      </section>

      {/* Contact Methods — Vibrant redesign */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => {
              const bgClass = method.color === 'teal' ? 'bg-teal/10 border-teal' : method.color === 'yellow' ? 'bg-yellow/10 border-yellow' : 'bg-green/10 border-green';
              const iconBgClass = method.color === 'teal' ? 'bg-teal text-white' : method.color === 'yellow' ? 'bg-yellow text-ink' : 'bg-green text-white';
              const ctaClass = method.color === 'teal' ? 'bg-teal text-white hover:bg-teal/90' : method.color === 'yellow' ? 'bg-yellow text-ink hover:bg-yellow/90' : 'bg-green text-white hover:bg-green/90';
              return (
                <div
                  key={method.label}
                  className={`p-8 rounded-[2rem] border-2 ${bgClass} transition-all hover:-translate-y-1 shadow-lg`}
                >
                  <div className={`inline-flex p-4 rounded-2xl mb-5 ${iconBgClass}`}>
                    {method.icon}
                  </div>
                  <div className="text-ink/60 text-xs uppercase tracking-wider font-bold mb-1">{method.label}</div>
                  <div className="text-ink font-black text-xl mb-1 break-all">{method.value}</div>
                  <div className="text-ink/60 text-sm mb-6">{method.desc}</div>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${ctaClass}`}
                  >
                    {method.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Area Coverage — Vibrant redesign */}
      <section className="py-20 bg-teal/10 border-y border-teal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-ink mb-4">
              Area <span className="text-teal">Layanan</span>
            </h2>
            <p className="text-ink/60">Kami mengantar ke empat kota ini setiap hari kerja</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { city: 'Tangerang', province: 'Banten', desc: 'Kawasan industri Banten' },
              { city: 'Semarang', province: 'Jawa Tengah', desc: 'Ibu kota Jawa Tengah' },
              { city: 'Salatiga', province: 'Jawa Tengah', desc: 'Pusat operasional utama' },
              { city: 'Solo', province: 'Jawa Tengah', desc: 'Area Solo Raya' },
            ].map((loc) => (
              <div key={loc.city} className="p-6 rounded-2xl bg-white border-2 border-teal text-center hover:-translate-y-1 transition-transform shadow-lg shadow-teal/10">
                <div className="w-12 h-12 rounded-xl bg-teal text-white flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-ink font-bold text-lg">{loc.city}</div>
                <div className="text-teal text-sm mt-0.5">{loc.province}</div>
                <div className="text-ink/60 text-sm mt-2">{loc.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — Vibrant redesign */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-ink mb-4">
              Pertanyaan yang <span className="text-green">Sering Ditanya</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-yellow/10 border-2 border-yellow hover:-translate-y-0.5 transition-transform">
                <h3 className="text-ink font-bold mb-3 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-yellow text-ink text-xs flex items-center justify-center shrink-0 mt-0.5 font-black">
                    {i + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed pl-10">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-ink/70 mb-8">
            Jangan ragu buat chat kami. Tim RETABA siap jawab dan bantu cari solusi catering yang paling cocok.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green hover:bg-green/90 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all hover:shadow-2xl hover:shadow-green/30 hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>
    </main>
  );
}
