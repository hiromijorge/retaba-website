'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { clients } from '@/data/clients';
import SectionHeader from './SectionHeader';

// Company Logo Component - Styled text-based logo
const CompanyLogo = ({ client, index }: { client: typeof clients[0]; index: number }) => {
  const isLongName = client.shortName.length > 12;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group flex flex-col items-center"
    >
      {/* Logo Container */}
      <div className="relative mb-4">
        {/* Background shape */}
        <div 
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
          style={{ 
            backgroundColor: `${client.color}15`,
            border: `2px solid ${client.color}30`,
          }}
        >
          {/* Company Initial */}
          <span 
            className="text-4xl sm:text-5xl font-black"
            style={{ color: client.color }}
          >
            {client.shortName.charAt(0)}
          </span>
        </div>
        
        {/* Small accent dot */}
        <div 
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
          style={{ backgroundColor: client.color }}
        />
      </div>
      
      {/* Company Name */}
      <div className="text-center max-w-[140px]">
        <p className={`text-ink font-bold leading-tight group-hover:text-green transition-colors ${isLongName ? 'text-xs' : 'text-sm'}`}>
          {client.shortName}
        </p>
        <p className="text-ink/40 text-xs mt-1">{client.industry}</p>
      </div>
    </motion.div>
  );
};

export default function ClientLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-white border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Klien Kami"
          title="Dipercaya"
          highlight="Perusahaan"
          size="lg"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 justify-items-center"
        >
          {clients.map((client, i) => (
            <CompanyLogo key={client.id} client={client} index={i} />
          ))}
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 mx-auto w-32 h-1 bg-gradient-to-r from-brand via-teal to-green rounded-full"
        />
      </div>
    </section>
  );
}
