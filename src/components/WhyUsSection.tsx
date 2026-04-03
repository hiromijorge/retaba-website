'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    title: 'Menu Bervariasi',
    description: 'Lebih dari 100 variasi menu Nusantara, Jepang, Chinese, Korea, dan India. Jadwal mingguan yang selalu berganti agar karyawan tidak bosan.',
    highlight: '100+ Menu',
    color: 'yellow',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Fleksibel & Praktis',
    description: 'Layanan harian untuk perusahaan/pabrik maupun event korporat. Sistem pemesanan mudah dengan respon cepat via WhatsApp.',
    highlight: 'Mudah & Cepat',
    color: 'teal',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Bahan Berkualitas',
    description: 'Bahan segar pilihan, diproses dengan standar higiene tinggi, bersertifikat Halal MUI, dan telah melalui uji laboratorium keamanan pangan.',
    highlight: 'Halal & Teruji',
    color: 'white',
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-teal text-sm font-medium">Mengapa Memilih RETABA?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-ink mb-5">
            Solusi Catering{' '}
            <span className="text-yellow">Terbaik</span>
            <br />untuk Perusahaan Anda
          </h2>
          <p className="text-ink/50 text-lg max-w-2xl mx-auto">
            Kami memahami kebutuhan nutrisi karyawan adalah investasi produktivitas perusahaan Anda.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className={`group relative p-8 rounded-3xl border transition-all duration-300 cursor-default
                ${reason.color === 'yellow'
                  ? 'bg-yellow/5 border-yellow/20 hover:border-yellow/40 hover:bg-yellow/10'
                  : reason.color === 'teal'
                  ? 'bg-teal/5 border-teal/20 hover:border-teal/40 hover:bg-teal/10'
                  : 'bg-ink/5 border-border hover:border-border hover:bg-ink/8'
                }
              `}
            >
              <div className={`inline-flex p-3 rounded-2xl mb-6
                ${reason.color === 'yellow' ? 'bg-yellow/20 text-yellow'
                  : reason.color === 'teal' ? 'bg-teal/20 text-teal'
                  : 'bg-ink/8 text-white'}
              `}>
                {reason.icon}
              </div>

              <div className={`text-xs font-bold tracking-widest uppercase mb-3
                ${reason.color === 'yellow' ? 'text-yellow/60'
                  : reason.color === 'teal' ? 'text-teal/60'
                  : 'text-ink/40'}
              `}>
                {reason.highlight}
              </div>

              <h3 className="text-ink text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-ink/50 leading-relaxed text-sm">{reason.description}</p>

              {/* Decorative corner */}
              <div className={`absolute top-6 right-6 w-16 h-16 rounded-full opacity-10 blur-xl
                ${reason.color === 'yellow' ? 'bg-yellow'
                  : reason.color === 'teal' ? 'bg-teal'
                  : 'bg-white'}
              `} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
