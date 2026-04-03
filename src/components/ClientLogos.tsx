'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { clients } from '@/data/clients';

const CompanyLogo = ({ client, index }: { client: typeof clients[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.08 * index }}
    className="group flex flex-col items-center gap-3"
  >
    {/* Logo image — grayscale at rest, full color on hover */}
    <div className="relative w-28 h-14 transition-all duration-300 group-hover:scale-105">
      {client.logo ? (
        <Image
          src={client.logo}
          alt={`Logo ${client.name}`}
          fill
          className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          sizes="112px"
        />
      ) : (
        <div
          className="w-full h-full rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${client.color}18`, border: `2px solid ${client.color}30` }}
        >
          <span className="text-3xl font-black" style={{ color: client.color }}>
            {client.shortName.charAt(0)}
          </span>
        </div>
      )}
    </div>

    {/* Name + industry */}
    <div className="text-center">
      <p className="text-ink/50 text-xs font-semibold leading-tight group-hover:text-ink transition-colors">
        {client.shortName}
      </p>
      <p className="text-ink/30 text-[10px] mt-0.5">{client.industry}</p>
    </div>
  </motion.div>
);

export default function ClientLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-white border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-ink/40 text-xs uppercase tracking-widest font-bold mb-2">Klien Aktif</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink leading-tight">
              20+ Perusahaan<br className="hidden sm:block" /> Mempercayai Kami
            </h2>
          </div>
          <div className="w-16 h-1 bg-brand rounded-full sm:mb-2 shrink-0" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 justify-items-center"
        >
          {clients.map((client, i) => (
            <CompanyLogo key={client.id} client={client} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 mx-auto w-32 h-1 bg-gradient-to-r from-brand via-teal to-green rounded-full"
        />
      </div>
    </section>
  );
}
