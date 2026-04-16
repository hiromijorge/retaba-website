export interface Client {
  id: number;
  name: string;
  shortName: string;
  industry: string;
  logo?: string;
  color: string;
}

export const clients: Client[] = [
  {
    id: 1,
    name: 'PT Wipro Unza Vitalis Indonesia',
    shortName: 'Wipro Unza',
    industry: 'FMCG / Personal Care',
    logo: '/customer-logo/wipro-unza.png',
    color: '#E53030',
  },
  {
    id: 2,
    name: 'PT Indofood Sukses Makmur',
    shortName: 'Indofood',
    industry: 'Food & Beverage',
    logo: '/customer-logo/indofood.png',
    color: '#E53030',
  },
  {
    id: 3,
    name: 'PT Konimex',
    shortName: 'Konimex',
    industry: 'Pharmaceutical',
    logo: '/customer-logo/konimex.png',
    color: '#087A68',
  },
  {
    id: 4,
    name: 'PT Graphic Packaging International',
    shortName: 'Graphic Packaging',
    industry: 'Packaging',
    logo: '/customer-logo/graphic-packaging.jpg',
    color: '#00B4A0',
  },
  {
    id: 5,
    name: 'PT Kayu Arum Resort',
    shortName: 'Kayu Arum Resort',
    industry: 'Hospitality',
    logo: '/customer-logo/kayu-arum.jpeg',
    color: '#8B4513',
  },
  {
    id: 6,
    name: 'Front One Hotel',
    shortName: 'Front One Hotel',
    industry: 'Hospitality',
    logo: '/customer-logo/frontone-hotel.png',
    color: '#F7D200',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Budi S.',
    role: 'HR Manager',
    company: 'Indofood Sukses Makmur',
    rating: 5,
    text: 'Setahun lebih pakai RETABA, karyawan jarang komplain soal makan. Menu tiap minggu beda, sertifikat Halal lengkap, dan delivery nggak pernah telat.',
    avatar: 'BS',
  },
  {
    id: 2,
    name: 'Siti R.',
    role: 'General Affairs',
    company: 'Konimex',
    rating: 5,
    text: 'Awalnya ragu karena RETABA masih baru. Tapi setelah coba trial 1 bulan, langsung perpanjang kontrak. Variasi banyak, bahan segar, dan timnya cepat tanggap kalau ada perubahan mendadak.',
    avatar: 'SR',
  },
  {
    id: 3,
    name: 'Ahmad F.',
    role: 'Operations Manager',
    company: 'Graphic Packaging International',
    rating: 5,
    text: 'Tiga hal yang kami cari: Halal MUI, antar tepat waktu, dan menu nggak itu-itu aja. RETABA cocok semua — plus harganya masuk anggaran.',
    avatar: 'AF',
  },
  {
    id: 4,
    name: 'Dewi K.',
    role: 'Event Coordinator',
    company: 'Front One Hotel',
    rating: 5,
    text: 'Buat event corporate kami, kualitas sajiannya konsisten dari persiapan sampai di meja. Tim RETABA gampang diajak koordinasi dan nggak pernah mengecewakan di hari-H.',
    avatar: 'DK',
  },
  {
    id: 5,
    name: 'Rizki P.',
    role: 'Plant Manager',
    company: 'Wipro Unza Vitalis Indonesia',
    rating: 5,
    text: 'Lebih dari 500 karyawan shift kami makan dari RETABA tiap hari. Belum pernah ada masalah keamanan pangan — sertifikasi mereka bukan cuma formalitas, terbukti di lapangan.',
    avatar: 'RP',
  },
];
