'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const WA_LINK = 'https://wa.me/6208887888808?text=Halo%20RETABA%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20catering%20Anda.';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-brand overflow-hidden pt-16 lg:pt-20">
      {/* Top yellow band — matches COMPRO cover yellow header */}
      <div className="absolute inset-0 bg-brand" />

      {/* Bottom white content area — diagonal cut */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-white"
        style={{ height: '45%', clipPath: 'polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)' }}
      />

      {/* Teal bottom accent strip (matches COMPRO bottom teal bar) */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-teal" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex flex-col justify-between pb-8">

        {/* Top: yellow zone content */}
        <div className="pt-8 lg:pt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left text */}
          <div className="z-10">
            {/* Certification badges */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-3 mb-8"
            >
              <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                <span className="text-teal font-black text-xs uppercase tracking-wide">SLHS</span>
              </div>
              <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                <span className="text-green font-black text-xs">HALAL</span>
                <span className="text-muted text-[10px]">MUI</span>
              </div>
              <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                <span className="text-ink font-black text-xs">Lab Tested</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-ink leading-[1.0] tracking-tight mb-6">
                5.000+ Porsi<br />
                per Hari —<br />
                <span className="text-green">Halal,</span><br />
                <span className="text-green">Tepat Waktu.</span>
              </h1>
              <p className="text-ink/70 text-lg leading-relaxed max-w-md mb-8">
                Mitra catering korporat untuk perusahaan dan pabrik di Tangerang, Salatiga, dan Solo.
                Bersertifikasi resmi — bukan sekadar klaim.
              </p>
            </motion.div>

            {/* Single primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green hover:bg-green/90 text-white px-8 py-4 rounded-2xl font-extrabold text-base transition-all hover:shadow-xl hover:shadow-green/30 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Minta Penawaran via WhatsApp
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 text-ink/60 hover:text-green font-semibold text-sm transition-colors"
              >
                Lihat Menu →
              </Link>
            </motion.div>

            {/* Client social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-ink/10"
            >
              <p className="text-ink/40 text-xs uppercase tracking-widest font-bold mb-3">Dipercaya oleh</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                {['Indofood', 'Wipro Unza', 'Konimex', 'Front One Hotel', '& 17 perusahaan lainnya'].map((name) => (
                  <span key={name} className="text-ink/60 text-sm font-semibold">{name}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: food photo — large, overlapping the diagonal cut */}
          <motion.div
            className="relative z-10 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Main food image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-ink/20 ring-4 ring-white aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?w=700&h=525&fit=crop"
                  alt="Hidangan catering berkualitas RETABA — sajian Nusantara pilihan untuk perusahaan"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 90vw, 448px"
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center text-2xl font-black text-ink shrink-0">
                    20+
                  </div>
                  <div>
                    <div className="text-ink font-extrabold text-sm leading-tight">Perusahaan</div>
                    <div className="text-muted text-xs">Klien Aktif</div>
                  </div>
                </div>
              </motion.div>

              {/* Halal badge card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-green text-white rounded-2xl shadow-xl px-4 py-3"
              >
                <div className="text-xs font-bold opacity-80 mb-0.5">Sertifikasi</div>
                <div className="text-lg font-black leading-none">HALAL ☪</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar at bottom — on the white zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative z-10 my-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-border px-8 py-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: '20+', label: 'Perusahaan Klien' },
              { value: '5000+', label: 'Porsi per Hari' },
              { value: '3', label: 'Kota Layanan' },
              { value: '100+', label: 'Variasi Menu' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-green">{stat.value}</div>
                <div className="text-ink/60 text-xs mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
