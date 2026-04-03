'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { menuItems, menuCategories, MenuItem } from '@/data/menu';

interface MenuGridProps {
  preview?: boolean;
}

export default function MenuGrid({ preview = false }: MenuGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('semua');

  const filtered = preview
    ? menuItems.slice(0, 6)
    : activeCategory === 'semua'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Filter Tabs */}
      {!preview && (
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'text-ink bg-yellow shadow-lg shadow-yellow/30'
                  : 'text-ink/60 bg-ink/8 hover:bg-ink/10 hover:text-white'
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-yellow rounded-full -z-10"
                  transition={{ type: 'spring', bounce: 0.2 }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((item: MenuItem) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="group relative bg-ink/5 border border-border rounded-2xl overflow-hidden hover:border-yellow/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow/5"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.name} - menu catering RETABA`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
                {/* Type badge */}
                <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  item.type === 'Nusantara' ? 'bg-yellow/90 text-ink'
                  : item.type === 'Japanese' ? 'bg-red-500/90 text-white'
                  : item.type === 'Chinese' ? 'bg-orange-500/90 text-white'
                  : item.type === 'Korean' ? 'bg-pink-500/90 text-white'
                  : item.type === 'Indian' ? 'bg-brand-600/90 text-white'
                  : 'bg-teal/90 text-white'
                }`}>
                  {item.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-ink font-semibold text-sm">{item.name}</h3>
                {item.description && (
                  <p className="text-ink/40 text-xs mt-1 leading-tight">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
