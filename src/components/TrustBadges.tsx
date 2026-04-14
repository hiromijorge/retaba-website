'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const badges = [
  {
    type: 'logo',
    src: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144131/retaba/certification-images/1.png',
    title: 'Halal MUI',
    subtitle: 'ID33110014801751123',
  },
  {
    type: 'logo',
    src: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144132/retaba/certification-images/2.png',
    title: 'SLHS Certified',
    subtitle: 'Sertifikat Laik Higiene',
  },
  {
    type: 'icon',
    icon: '🔬',
    title: 'Lab Tested',
    subtitle: 'Teruji Keamanan Pangan',
  },
  {
    type: 'icon',
    icon: '🏢',
    title: '20+ Klien Aktif',
    subtitle: 'Indofood, Wipro, Konimex & lainnya',
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
              {badge.type === 'logo' ? (
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white flex-shrink-0 overflow-hidden p-1.5">
                  <Image 
                    src={badge.src!} 
                    alt={badge.title} 
                    width={badge.title.includes('Halal') ? 60 : 56} 
                    height={badge.title.includes('Halal') ? 60 : 56} 
                    className={`object-contain w-full h-full ${badge.title.includes('Halal') ? 'scale-110' : ''}`} 
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 bg-white/10">
                  {badge.icon}
                </div>
              )}
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
