import Link from 'next/link';
import type { Metadata } from 'next';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WA_LINK } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="min-h-[70vh] flex items-center bg-white pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-green font-bold text-sm uppercase tracking-widest mb-3">Error 404</p>
        <h1 className="text-5xl sm:text-6xl font-black text-ink leading-tight mb-4">
          Halaman ini <span className="text-green">tidak ada</span>.
        </h1>
        <p className="text-ink/60 text-lg mb-10 max-w-lg mx-auto">
          Mungkin tautannya sudah berubah. Kembali ke beranda atau langsung chat kami untuk bantuan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand/90 text-ink px-8 py-4 rounded-full font-bold transition-all"
          >
            Ke Beranda
          </Link>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green/90 text-white px-8 py-4 rounded-full font-bold transition-all"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chat WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
