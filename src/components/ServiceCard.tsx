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
      icon: 'bg-yellow/20 text-yellow',
      border: 'border-yellow/20 hover:border-yellow/40',
      bg: 'hover:bg-yellow/5',
      bullet: 'bg-yellow',
      badge: 'bg-yellow/10 text-yellow',
    },
    teal: {
      icon: 'bg-teal/20 text-teal',
      border: 'border-teal/20 hover:border-teal/40',
      bg: 'hover:bg-teal/5',
      bullet: 'bg-teal',
      badge: 'bg-teal/10 text-teal',
    },
    white: {
      icon: 'bg-ink/8 text-white',
      border: 'border-border hover:border-border',
      bg: 'hover:bg-ink/5',
      bullet: 'bg-white/60',
      badge: 'bg-ink/8 text-white',
    },
  };

  const c = colorMap[color];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group p-8 rounded-3xl bg-ink/5 border ${c.border} ${c.bg} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
    >
      <div className={`inline-flex p-4 rounded-2xl mb-6 ${c.icon}`}>
        {icon}
      </div>
      <h3 className="text-ink text-xl font-bold mb-3">{title}</h3>
      <p className="text-ink/50 text-sm leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`} />
            <span className="text-ink/60 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
