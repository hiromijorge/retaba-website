'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { clients } from '@/data/clients';

// Duplicate 6× so the single row stays dense across all screen widths
const row = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

const LogoCard = ({ client }: { client: typeof clients[0] }) => (
  <div className="group flex-shrink-0 mx-6 flex flex-col items-center gap-4 cursor-default">
    <div className="relative w-44 h-24 bg-white rounded-2xl border border-border shadow-sm px-4 py-3 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:border-brand/50 group-hover:-translate-y-1">
      {client.logo ? (
        <Image
          src={client.logo}
          alt={`Logo ${client.name}`}
          fill
          className="object-contain p-3"
          sizes="176px"
        />
      ) : (
        <span className="text-3xl font-black" style={{ color: client.color }}>
          {client.shortName.charAt(0)}
        </span>
      )}
    </div>
    <p className="text-ink/50 text-xs font-semibold text-center leading-tight max-w-[160px] group-hover:text-ink/80 transition-colors">
      {client.shortName}
    </p>
  </div>
);

export default function ClientLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 bg-white border-y border-border/30">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-ink/40 text-xs uppercase tracking-widest font-bold mb-2">Klien Aktif</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink leading-tight">
              20+ Perusahaan<br className="hidden sm:block" /> Mempercayai Kami
            </h2>
          </div>
          <div className="flex items-center gap-2 text-ink/40 text-sm">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            Klien aktif setiap hari
          </div>
        </motion.div>
      </div>

      {/* Full-bleed scrolling marquee — single row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative overflow-hidden marquee-pause"
      >
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-track py-4">
          {row.map((client, i) => (
            <LogoCard key={`r-${i}`} client={client} />
          ))}
        </div>
      </motion.div>

      {/* Bottom accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 mx-auto w-32 h-1 bg-gradient-to-r from-brand via-teal to-green rounded-full"
      />
    </section>
  );
}
