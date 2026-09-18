'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WA_LINK } from '@/lib/site';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-brand overflow-hidden pt-16 lg:pt-20">
      {/* Top yellow band */}
      <div className="absolute inset-0 bg-brand" />

      {/* Bottom white content area — diagonal cut */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-white"
        style={{ height: '45%', clipPath: 'polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)' }}
      />

      {/* Teal bottom accent strip */}
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
              className="flex gap-4 mb-8"
            >
              <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-center shadow-sm w-28 h-16">
                <Image src="https://res.cloudinary.com/dr62jpnos/image/upload/v1776144132/retaba/certification-images/1.png" alt="SLHS Certified" width={80} height={40} className="object-contain max-h-10 w-auto" />
              </div>
              <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-center shadow-sm w-28 h-16">
                <Image src="https://res.cloudinary.com/dr62jpnos/image/upload/v1776144131/retaba/certification-images/2.png" alt="Halal MUI" width={90} height={45} className="object-contain max-h-12 w-auto" />
              </div>
              <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-2 shadow-sm">
                <span className="text-green font-black text-sm"><span aria-hidden="true">🔬</span> LAB</span>
                <span className="text-muted text-xs">Tested</span>
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
                Catering harian buat pabrik dan perusahaan di Tangerang, Semarang, Salatiga, dan Solo. 
                Sertifikat Halal MUI & SLHS — siap dikerjakan hari ini juga.
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
                <WhatsAppIcon className="w-5 h-5" />
                Chat WhatsApp untuk Penawaran
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 text-ink/80 hover:text-green font-bold text-base transition-colors"
              >
                Lihat Menu →
              </Link>
            </motion.div>
          </div>

          {/* Right: food photo */}
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
                  src={getCloudinaryUrl('https://res.cloudinary.com/dr62jpnos/image/upload/v1776144112/retaba/food-images/5.png', { width: 800, height: 600 })}
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
                <div className="text-lg font-black leading-none">HALAL <span aria-hidden="true">☪</span></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative z-10 my-12"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-border px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '20+', label: 'Perusahaan Klien' },
              { value: '5000+', label: 'Porsi per Hari' },
              { value: '4', label: 'Kota Layanan' },
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
