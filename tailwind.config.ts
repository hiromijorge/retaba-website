import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ─── RETABA brand palette (from COMPRO BARU.pdf) ───────────────
        brand:   '#F7D200',   // primary yellow  — the big yellow header blocks
        teal:    '#00B4A0',   // bright teal      — bottom strip, logo accent
        green:   '#087A68',   // dark heading     — all section titles in COMPRO
        red:     '#E53030',   // vivid red        — "Fleksibel & Praktis" accent
        // ─── Neutrals ───────────────────────────────────────────────────
        ink:     '#1A1A1A',   // near-black body text
        muted:   '#6B7280',   // secondary text
        surface: '#F5F5F5',   // light section background
        border:  '#E5E5E5',   // neutral border
        // ─── Legacy aliases kept for compatibility ────────────────────
        cream:      '#FFFFFF',
        sand:       '#F5F5F5',
        parchment:  '#E5E5E5',
        espresso:   '#1A1A1A',
        mocha:      '#6B7280',
        amber:      '#F7D200',
        forest:     '#087A68',
      },
      fontFamily: {
        sans:    ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        display: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
