'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  color: 'yellow' | 'teal' | 'white';
  index: number;
}

export default function ServiceCard({ icon, title, description, features, color, index }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const colorMap = {
    yellow: {
      card: 'bg-yellow text-ink',
      iconBg: 'bg-white/40 text-ink',
      bullet: 'bg-ink',
      featureText: 'text-ink/80',
      desc: 'text-ink/70',
      shadow: 'shadow-yellow/40',
      border: 'border-transparent',
    },
    teal: {
      card: 'bg-teal text-white',
      iconBg: 'bg-white/20 text-white',
      bullet: 'bg-white',
      featureText: 'text-white/90',
      desc: 'text-white/80',
      shadow: 'shadow-teal/40',
      border: 'border-transparent',
    },
    white: {
      card: 'bg-white text-ink border-2 border-ink',
      iconBg: 'bg-ink text-white',
      bullet: 'bg-teal',
      featureText: 'text-ink/70',
      desc: 'text-ink/60',
      shadow: 'shadow-ink/20',
      border: 'border-ink',
    },
  };

  const c = colorMap[color];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative p-8 rounded-[2rem] ${c.card} transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${c.shadow} overflow-hidden`}
    >
      {/* Decorative corner circle */}
      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-150 ${
        color === 'yellow' ? 'bg-white' : color === 'teal' ? 'bg-white' : 'bg-yellow'
      }`} />

      <div className="relative">
        <div className={`inline-flex p-4 rounded-2xl mb-5 ${c.iconBg} backdrop-blur-sm`}>
          {icon}
        </div>
        <h3 className="text-2xl font-black mb-3 leading-tight">{title}</h3>
        <p className={`text-sm leading-relaxed mb-6 ${c.desc}`}>{description}</p>

        <ul className="space-y-2.5">
          {features.slice(0, 5).map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${c.bullet}`} />
              <span className={`text-sm leading-snug ${c.featureText}`}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
