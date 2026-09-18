import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
        // ─── Aliases still used in components ─────────────────────────
        espresso:   '#1A1A1A',   // = ink (used in image overlays)
        yellow:     '#F7D200',   // = brand
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
