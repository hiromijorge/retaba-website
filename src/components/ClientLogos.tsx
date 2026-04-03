'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { clients } from '@/data/clients';

export default function ClientLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-surface/80 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-ink/30 text-xs uppercase tracking-[0.3em] font-medium mb-2">Dipercaya oleh</p>
          <h2 className="text-2xl font-bold text-ink">Klien Terpercaya Kami</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-ink/5 border border-border hover:border-yellow/30 hover:bg-yellow/5 transition-all duration-300 text-center cursor-default"
            >
              {/* Logo placeholder with company initial */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow/20 to-teal/20 flex items-center justify-center mb-3 group-hover:from-yellow/30 group-hover:to-teal/30 transition-colors">
                <span className="text-yellow font-black text-lg">
                  {client.shortName.charAt(0)}
                </span>
              </div>
              <div className="text-ink/60 text-xs font-medium leading-tight group-hover:text-white transition-colors">
                {client.shortName}
              </div>
              <div className="text-ink/30 text-[10px] mt-0.5">{client.industry}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
