export interface Client {
  id: number;
  name: string;
  shortName: string;
  industry: string;
  logo?: string;
}

export const clients: Client[] = [
  {
    id: 1,
    name: 'PT Wipro Unza Vitalis Indonesia',
    shortName: 'Wipro Unza',
    industry: 'FMCG / Personal Care',
  },
  {
    id: 2,
    name: 'PT Indofood Sukses Makmur',
    shortName: 'Indofood',
    industry: 'Food & Beverage',
  },
  {
    id: 3,
    name: 'PT Konimex',
    shortName: 'Konimex',
    industry: 'Pharmaceutical',
  },
  {
    id: 4,
    name: 'PT Graphic Packaging International',
    shortName: 'Graphic Packaging',
    industry: 'Packaging',
  },
  {
    id: 5,
    name: 'PT Putra Kemas Makmur',
    shortName: 'Putra Kemas',
    industry: 'Packaging',
  },
  {
    id: 6,
    name: 'Front One Hotel',
    shortName: 'Front One Hotel',
    industry: 'Hospitality',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'HR Manager',
    company: 'PT Indofood Sukses Makmur',
    rating: 5,
    text: 'RETABA memberikan layanan catering yang sangat memuaskan. Menu bervariasi setiap hari, bahan berkualitas, dan yang paling penting sudah bersertifikat Halal. Karyawan kami sangat puas!',
    avatar: 'BS',
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    role: 'General Affairs',
    company: 'PT Konimex',
    rating: 5,
    text: 'Sudah 2 tahun bermitra dengan RETABA dan tidak pernah kecewa. Menu variatif, tepat waktu, dan harga sangat kompetitif. Sangat direkomendasikan untuk perusahaan yang butuh catering terpercaya.',
    avatar: 'SR',
  },
  {
    id: 3,
    name: 'Ahmad Fauzi',
    role: 'Operations Manager',
    company: 'PT Graphic Packaging International',
    rating: 5,
    text: 'Program pembelian produk RETABA sangat inovatif. Selain katering berkualitas, mereka juga membantu distribusi produk kami ke perusahaan lain. Win-win solution yang luar biasa!',
    avatar: 'AF',
  },
  {
    id: 4,
    name: 'Dewi Kusuma',
    role: 'Finance Director',
    company: 'Front One Hotel',
    rating: 5,
    text: 'Untuk event-event besar kami, RETABA selalu bisa diandalkan. Kualitas masakan konsisten, penyajian menarik, dan tim mereka sangat profesional. Pelayanan bintang lima!',
    avatar: 'DK',
  },
  {
    id: 5,
    name: 'Rizki Pratama',
    role: 'Plant Manager',
    company: 'PT Wipro Unza Vitalis Indonesia',
    rating: 5,
    text: 'Sertifikasi Halal dan hasil uji lab dari RETABA memberikan kepercayaan penuh bagi kami. Lebih dari 500 karyawan kami makan setiap hari dari RETABA, dan semua senang!',
    avatar: 'RP',
  },
];
