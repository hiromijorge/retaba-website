'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  size?: 'lg' | 'xl';
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  size = 'xl',
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const titleSize = size === 'xl' 
    ? 'text-4xl sm:text-5xl lg:text-6xl' 
    : 'text-3xl sm:text-4xl lg:text-5xl';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`${alignClass} mb-12 lg:mb-16`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-2 mb-6 ${align === 'center' ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-green" />
          <span className="text-green font-semibold text-sm tracking-wide">{badge}</span>
        </div>
      )}
      
      <h2 className={`${titleSize} font-black text-ink leading-tight mb-5`}>
        {title}
        {highlight && (
          <span className="text-green ml-3">{highlight}</span>
        )}
      </h2>
      
      {description && (
        <p className={`text-ink/60 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
