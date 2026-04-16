import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak',
  description:
    'Hubungi RETABA untuk layanan catering perusahaan. WhatsApp: 0888 7888 808. Email: info@retaba.co.id. Layanan di Tangerang, Salatiga, Solo.',
  alternates: { canonical: 'https://retaba.co.id/contact' },
};

const WA_LINK = 'https://wa.me/6208887888808?text=Halo%20RETABA%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20catering%20Anda.';

const contactMethods = [
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '0888 7888 808',
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
    value: 'info@retaba.co.id',
    href: 'mailto:info@retaba.co.id',
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
    value: '0888 7888 808',
    href: 'tel:08887888808',
    desc: 'Siap terima panggilan 24 jam',
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
    a: 'Saat ini kami rutin mengantar ke Tangerang, Salatiga, dan Solo. Untuk kota lain, silakan tanya dulu — bisa kita diskusikan.',
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

export default function ContactPage() {
  return (
    <main>
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
                  <div className="text-ink/40 text-xs uppercase tracking-wider font-bold mb-1">{method.label}</div>
                  <div className="text-ink font-black text-xl mb-1 break-all">{method.value}</div>
                  <div className="text-ink/50 text-sm mb-6">{method.desc}</div>
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
            <p className="text-ink/50">Kami mengantar ke empat kota ini setiap hari kerja</p>
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
                <div className="text-ink/40 text-sm mt-2">{loc.desc}</div>
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
