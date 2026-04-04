import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang Kami' },
  { href: '/services', label: 'Layanan' },
  { href: '/menu', label: 'Menu' },
  { href: '/clients', label: 'Klien' },
  { href: '/gallery', label: 'Galeri' },
  { href: '/contact', label: 'Kontak' },
];

const WA_LINK = 'https://wa.me/6208887888808?text=Halo%20RETABA%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20catering%20Anda.';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      {/* Decorative top bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand via-teal to-green" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Brand - takes 5 columns */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/10">
                <Image
                  src="/retaba-logo.png"
                  alt="RETABA Logo"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-white text-2xl tracking-tight group-hover:text-brand transition-colors">RETABA</span>
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-1">PT. Receh Tapi Banyak</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              Jasa catering perusahaan bersertifikat Halal, SLHS, dan teruji lab untuk ketenangan dan kepuasan makan siang karyawan Anda.
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'HALAL', sub: 'MUI Certified', color: 'bg-brand/20 text-brand border-brand/30' },
                { label: 'SLHS', sub: 'Certified', color: 'bg-teal/20 text-teal border-teal/30' },
                { label: 'LAB', sub: 'Tested', color: 'bg-white/10 text-white border-white/20' },
              ].map((cert) => (
                <div key={cert.label} className={`px-4 py-2 rounded-xl border ${cert.color} text-center`}>
                  <div className="text-xs font-black">{cert.label}</div>
                  <div className="text-[10px] opacity-70 mt-0.5">{cert.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links - takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-px bg-brand" />
              Navigasi
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-brand text-sm transition-colors font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - takes 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-px bg-teal" />
              Kontak
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/30 text-xs uppercase tracking-wide mb-1">Lokasi</div>
                  <span className="text-white/70 text-sm">Tangerang · Salatiga · Solo</span>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/30 text-xs uppercase tracking-wide mb-1">Telepon</div>
                  <a href="tel:08887888808" className="text-white/70 text-sm hover:text-brand transition-colors">
                    0888 7888 808
                  </a>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/30 text-xs uppercase tracking-wide mb-1">Email</div>
                  <a href="mailto:info@retaba.co.id" className="text-white/70 text-sm hover:text-brand transition-colors">
                    info@retaba.co.id
                  </a>
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-brand hover:bg-brand/90 text-ink px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-brand/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} PT. Receh Tapi Banyak (RETABA). Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-white/30 text-sm">
              Sertifikasi Halal No. ID33110014801751123
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
