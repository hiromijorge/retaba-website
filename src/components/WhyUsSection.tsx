'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    title: '100+ Variasi Menu',
    description: 'Nusantara, Jepang, Korea, India, China, dan menu kustom. Jadwal berganti setiap minggu — karyawan tidak bosan, produktivitas terjaga.',
    stat: '6 Kuliner Dunia',
    color: 'yellow',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Pengiriman On-Time',
    description: 'Sistem logistik terintegrasi ke Tangerang, Salatiga & Solo. Pengiriman harian tepat waktu — bukan janji, tapi komitmen operasional kami setiap hari.',
    stat: 'Tangerang · Salatiga · Solo',
    color: 'teal',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Tersertifikasi Resmi',
    description: 'Halal MUI No. ID33110014801751123 — dapat diverifikasi. SLHS resmi dari pemerintah. Diuji laboratorium pangan independen. Bukan sekadar klaim.',
    stat: 'Halal MUI · SLHS · Lab Tested',
    color: 'green',
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Mengapa RETABA"
          title="Tiga Alasan"
          highlight="Konkret"
          description="Bukan klaim generik — ini yang membedakan RETABA dari catering lain."
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className={`group relative p-7 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                ${reason.color === 'yellow'
                  ? 'bg-brand/5 border-brand/20 hover:border-brand/40'
                  : reason.color === 'teal'
                  ? 'bg-teal/5 border-teal/20 hover:border-teal/40'
                  : 'bg-green/5 border-green/20 hover:border-green/40'}
              `}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-2xl mb-4 transition-colors duration-300
                ${reason.color === 'yellow' ? 'bg-brand/20 text-ink group-hover:bg-brand group-hover:text-ink'
                  : reason.color === 'teal' ? 'bg-teal/20 text-teal group-hover:bg-teal group-hover:text-white'
                  : 'bg-green/20 text-green group-hover:bg-green group-hover:text-white'}
              `}>
                {reason.icon}
              </div>

              {/* Stat badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3
                ${reason.color === 'yellow' ? 'bg-brand/20 text-ink'
                  : reason.color === 'teal' ? 'bg-teal/20 text-teal'
                  : 'bg-green/20 text-green'}
              `}>
                {reason.stat}
              </div>

              <h3 className="text-ink text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-ink/60 leading-relaxed">{reason.description}</p>

              {/* Hover indicator */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
                ${reason.color === 'yellow' ? 'bg-brand'
                  : reason.color === 'teal' ? 'bg-teal'
                  : 'bg-green'}
              `} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
