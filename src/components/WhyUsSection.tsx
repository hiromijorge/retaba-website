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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: 'Pengiriman On-Time',
    description: 'Sistem logistik terintegrasi ke Tangerang, Semarang, Salatiga & Solo. Pengiriman harian tepat waktu — bukan janji, tapi komitmen operasional kami setiap hari.',
    stat: 'Tangerang · Semarang · Salatiga · Solo',
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
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Dipercaya Brand Besar',
    description: 'Melayani 20+ perusahaan ternama seperti Indofood, Wipro Unza, Konimex, dan Graphic Packaging. Kepercayaan yang terbukti dari tahun ke tahun.',
    stat: '20+ Klien Korporat',
    color: 'yellow',
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="WHY US?"
          title="Empat Alasan"
          highlight="Konkret"
          description="Bukan klaim generik — ini yang membedakan RETABA dari catering lain."
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
