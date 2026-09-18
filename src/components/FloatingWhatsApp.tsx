'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WA_LINK } from '@/lib/site';


export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0.3 }}
            className="bg-white border border-border rounded-2xl px-4 py-3 shadow-2xl max-w-[200px] mr-1"
          >
            <p className="text-ink text-sm font-medium leading-tight">Chat dengan kami di WhatsApp!</p>
            <p className="text-ink/60 text-xs mt-1">Kami balas dalam 1×24 jam</p>
            <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        aria-label="Chat dengan RETABA di WhatsApp"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <WhatsAppIcon className="w-7 h-7 text-white" />
        </motion.div>
      </motion.a>
    </div>
  );
}
