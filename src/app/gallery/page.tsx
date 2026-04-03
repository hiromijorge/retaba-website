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
                  <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface/80 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-ink mb-4">
            Tertarik Menjadikan RETABA Mitra Catering Anda?
          </h2>
          <p className="text-ink/60 mb-8 max-w-xl mx-auto">
            Hubungi kami untuk mendapatkan jadwal menu lengkap, foto dokumentasi asli, dan penawaran harga sesuai kebutuhan perusahaan Anda.
          </p>
          <a
            href="https://wa.me/6208887888808?text=Halo%20RETABA%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20catering%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green hover:bg-green/90 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all hover:shadow-2xl hover:shadow-green/30 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Minta Penawaran via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
