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
    color: '#E53030', // Red
  },
  {
    id: 2,
    name: 'PT Indofood Sukses Makmur',
    shortName: 'Indofood',
    industry: 'Food & Beverage',
    color: '#E53030', // Red
  },
  {
    id: 3,
    name: 'PT Konimex',
    shortName: 'Konimex',
    industry: 'Pharmaceutical',
    color: '#087A68', // Green
  },
  {
    id: 4,
    name: 'PT Graphic Packaging International',
    shortName: 'Graphic Packaging',
    industry: 'Packaging',
    color: '#00B4A0', // Teal
  },
  {
    id: 5,
    name: 'PT Kayu Arum Resort',
    shortName: 'Kayu Arum Resort',
    industry: 'Hospitality',
    color: '#8B4513', // Brown
  },
  {
    id: 6,
    name: 'Front One Hotel',
    shortName: 'Front One Hotel',
    industry: 'Hospitality',
    color: '#F7D200', // Yellow
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Budi S.',
    role: 'HR Manager',
    company: 'PT Indofood Sukses Makmur',
    rating: 5,
    text: 'Sudah setahun bermitra. Karyawan jarang komplain soal makan — itu sendiri sudah luar biasa. Menu berganti tiap minggu, Halal certified, delivery tidak pernah telat.',
    avatar: 'BS',
  },
  {
    id: 2,
    name: 'Siti R.',
    role: 'General Affairs',
    company: 'PT Konimex',
    rating: 5,
    text: 'Awalnya ragu karena RETABA masih baru. Tapi setelah trial 1 bulan, langsung perpanjang kontrak. Variasinya banyak, bahan segar, dan timnya responsif kalau ada perubahan mendadak.',
    avatar: 'SR',
  },
  {
    id: 3,
    name: 'Ahmad F.',
    role: 'Operations Manager',
    company: 'PT Graphic Packaging International',
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
    company: 'PT Wipro Unza Vitalis Indonesia',
    rating: 5,
    text: 'Lebih dari 500 karyawan shift kami bergantung pada RETABA setiap hari. Belum pernah ada insiden keamanan pangan — sertifikasi mereka bukan formalitas, terbukti di lapangan.',
    avatar: 'RP',
  },
];
