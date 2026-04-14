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
    text: 'Sudah setahun bermitra. Karyawan jarang komplain soal makan — itu sendiri sudah luar biasa. Menu berganti tiap minggu, Halal certified, delivery tidak pernah telat.',
    avatar: 'BS',
  },
  {
    id: 2,
    name: 'Siti R.',
    role: 'General Affairs',
    company: 'Konimex',
    rating: 5,
    text: 'Awalnya ragu karena RETABA masih baru. Tapi setelah trial 1 bulan, langsung perpanjang kontrak. Variasinya banyak, bahan segar, dan timnya responsif kalau ada perubahan mendadak.',
    avatar: 'SR',
  },
  {
    id: 3,
    name: 'Ahmad F.',
    role: 'Operations Manager',
    company: 'Graphic Packaging International',
    rating: 5,
    text: 'Tiga hal yang kami cari: Halal MUI, tepat waktu, dan menu tidak itu-itu saja. RETABA memenuhi ketiganya — dan harganya masuk anggaran perusahaan.',
    avatar: 'AF',
  },
  {
    id: 4,
    name: 'Dewi K.',
    role: 'Event Coordinator',
    company: 'Front One Hotel',
    rating: 5,
    text: 'Untuk event corporate kami, kualitas sajiannya konsisten dari persiapan sampai penyajian. Tim RETABA mudah diajak koordinasi dan tidak pernah mengecewakan di hari-H.',
    avatar: 'DK',
  },
  {
    id: 5,
    name: 'Rizki P.',
    role: 'Plant Manager',
    company: 'Wipro Unza Vitalis Indonesia',
    rating: 5,
    text: 'Lebih dari 500 karyawan shift kami bergantung pada RETABA setiap hari. Belum pernah ada insiden keamanan pangan — sertifikasi mereka bukan formalitas, terbukti di lapangan.',
    avatar: 'RP',
  },
];
