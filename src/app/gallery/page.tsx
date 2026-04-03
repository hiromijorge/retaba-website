import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Galeri',
  description:
    'Galeri foto hidangan dan kegiatan catering RETABA — sajian lezat Nusantara, event korporat, dan proses penyiapan makanan berkualitas.',
  alternates: { canonical: 'https://retaba.co.id/gallery' },
};

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop',
    alt: 'Hidangan seafood balado RETABA',
    span: 'lg:col-span-2',
    label: 'Seafood Balado',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop',
    alt: 'Rendang daging RETABA',
    span: '',
    label: 'Rendang Daging',
  },
  {
    src: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=400&fit=crop',
    alt: 'Chicken Katsu RETABA',
    span: '',
    label: 'Chicken Katsu',
  },
  {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    alt: 'Sayuran segar RETABA',
    span: '',
    label: 'Sayuran Segar',
  },
  {
    src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop',
    alt: 'Prasmanan buffet event RETABA',
    span: 'lg:col-span-2 lg:row-span-2',
    label: 'Buffet Prasmanan',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    alt: 'Aneka masakan RETABA',
    span: '',
    label: 'Aneka Masakan',
  },
  {
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    alt: 'Penyajian catering RETABA',
    span: '',
    label: 'Penyajian Menarik',
  },
  {
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop',
    alt: 'Nasi box RETABA',
    span: 'lg:col-span-2',
    label: 'Nasi Box',
  },
  {
    src: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop',
    alt: 'Sup hangat RETABA',
    span: '',
    label: 'Sop Segar',
  },
  {
    src: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=400&h=300&fit=crop',
    alt: 'Snack box event RETABA',
    span: '',
    label: 'Snack Box',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    alt: 'Dapur profesional RETABA',
    span: 'lg:col-span-2',
    label: 'Dapur Profesional',
  },
  {
    src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    alt: 'Mie goreng RETABA',
    span: '',
    label: 'Mie Goreng',
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-yellow text-sm font-medium">Galeri Foto</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-ink mb-6">
            Lezat di Mata, <span className="text-yellow">Nikmat di Rasa</span>
          </h1>
          <p className="text-ink/60 text-xl max-w-2xl mx-auto">
            Sekilas pandang aneka sajian dan layanan RETABA yang memanjakan selera.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span} ${img.tall ? 'row-span-2' : ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-ink font-semibold text-sm bg-yellow/20 backdrop-blur-sm border border-yellow/30 px-3 py-1 rounded-full">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-surface/80 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ink/50 text-sm mb-6">
            Ingin melihat dokumentasi sajian dan kegiatan RETABA secara langsung? Hubungi tim kami.
          </p>
          <a
            href="https://wa.me/6208887888808?text=Halo%20RETABA%2C%20saya%20ingin%20melihat%20foto-foto%20hidangan%20asli%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green hover:bg-green/90 text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:shadow-green/30"
          >
            Lihat Dokumentasi via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
