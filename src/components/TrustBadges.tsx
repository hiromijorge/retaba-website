'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const badges = [
  {
    icon: '☪',
    title: 'Halal MUI',
    subtitle: 'ID33110014801751123',
    color: 'yellow',
  },
  {
    icon: '🏅',
    title: 'SLHS Certified',
    subtitle: 'Sertifikat Laik Higiene',
    color: 'teal',
  },
  {
    icon: '🔬',
    title: 'Lab Tested',
    subtitle: 'Teruji Keamanan Pangan',
    color: 'green',
  },
  {
    icon: '🏢',
    title: '20+ Klien Aktif',
    subtitle: 'Indofood, Wipro, Konimex & lainnya',
    color: 'yellow',
  },
];

export default function TrustBadges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-6 bg-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 py-4"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0
                ${badge.color === 'yellow' ? 'bg-brand/20 text-brand'
                  : badge.color === 'teal' ? 'bg-teal/20 text-teal'
                  : 'bg-white/10 text-white'}
              `}>
                {badge.icon}
              </div>
              <div>
                <div className="font-bold text-white text-sm">{badge.title}</div>
                <div className="text-white/60 text-xs">{badge.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
