export type MenuCategory = 'semua' | 'protein' | 'pelengkap' | 'sayur';
export type MenuType = 'Nusantara' | 'Japanese' | 'Chinese' | 'Korean' | 'Indian' | 'Customize';

export interface MenuItem {
  id: number;
  name: string;
  category: MenuCategory;
  type: MenuType;
  image: string;
  description?: string;
}

export const menuItems: MenuItem[] = [
  // Protein/Main
  { id: 1, name: 'Chicken Katsu', category: 'protein', type: 'Japanese', image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop', description: 'Ayam goreng tepung renyah ala Jepang' },
  { id: 2, name: 'Chicken Teriyaki', category: 'protein', type: 'Japanese', image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop', description: 'Ayam panggang dengan saus teriyaki manis' },
  { id: 3, name: 'Beef Teriyaki', category: 'protein', type: 'Japanese', image: 'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=400&h=300&fit=crop', description: 'Daging sapi panggang dengan saus teriyaki' },
  { id: 4, name: 'Ayam Rendang', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop', description: 'Ayam masak rendang bumbu rempah khas Minang' },
  { id: 5, name: 'Daging Rendang', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop', description: 'Daging sapi empuk masak rendang khas Minang' },
  { id: 6, name: 'Ikan Nila Goreng', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop', description: 'Ikan nila segar digoreng hingga crispy' },
  { id: 7, name: 'Ikan Lele Goreng', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop', description: 'Lele goreng renyah dengan sambal' },
  { id: 8, name: 'Ayam Goreng', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop', description: 'Ayam goreng bumbu kuning pilihan' },
  { id: 9, name: 'Ayam Mentega Kecap', category: 'protein', type: 'Chinese', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop', description: 'Ayam masak mentega dengan kecap manis' },
  { id: 10, name: 'Pepes Ikan', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop', description: 'Ikan dibungkus daun pisang dengan bumbu pepes' },
  { id: 11, name: 'Ayam Serundeng', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop', description: 'Ayam goreng dengan serundeng kelapa gurih' },
  { id: 12, name: 'Fried Chicken', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&h=300&fit=crop', description: 'Ayam goreng crispy ala western' },
  { id: 13, name: 'Udang Balado', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop', description: 'Udang segar masak bumbu balado pedas' },
  { id: 14, name: 'Cumi Balado', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop', description: 'Cumi-cumi masak bumbu balado' },
  { id: 15, name: 'Kerang Balado', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop', description: 'Kerang segar masak bumbu balado pedas' },
  { id: 16, name: 'Kikil Balado', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop', description: 'Kikil sapi empuk masak bumbu balado' },
  { id: 17, name: 'Ayam Kari', category: 'protein', type: 'Indian', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop', description: 'Ayam masak kari kuning harum rempah' },
  { id: 18, name: 'Tuna Balado', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop', description: 'Tuna masak bumbu balado pedas' },
  { id: 19, name: 'Ati Ampela', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop', description: 'Hati ampela ayam masak bumbu pedas' },
  { id: 20, name: 'Ikan Kembung', category: 'protein', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop', description: 'Ikan kembung goreng atau bakar bumbu' },

  // Vegetables/Side
  { id: 21, name: 'Gado-Gado', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'Sayuran segar dengan saus kacang khas' },
  { id: 22, name: 'Kentang Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop', description: 'Kentang goreng masak bumbu balado pedas' },
  { id: 23, name: 'Usus Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop', description: 'Usus ayam masak bumbu balado' },
  { id: 24, name: 'Telur Dadar', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop', description: 'Telur dadar bumbu bawang gurih' },
  { id: 25, name: 'Telur Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop', description: 'Telur rebus masak bumbu balado pedas' },
  { id: 26, name: 'Telur Mata Sapi Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop', description: 'Telur mata sapi masak bumbu balado' },
  { id: 27, name: 'Telur Kari', category: 'pelengkap', type: 'Indian', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop', description: 'Telur masak kari kuning harum' },
  { id: 28, name: 'Tempe Orek Basah', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'Tempe orek dengan bumbu basah manis pedas' },
  { id: 29, name: 'Tempe Orek Kering', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'Tempe orek kering crispy gurih manis' },
  { id: 30, name: 'Teri Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop', description: 'Ikan teri masak bumbu balado pedas' },
  { id: 31, name: 'Mie Goreng', category: 'pelengkap', type: 'Chinese', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', description: 'Mie goreng bumbu spesial' },
  { id: 32, name: 'Tempe Goreng', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'Tempe goreng crispy gurih' },
  { id: 33, name: 'Tahu Goreng', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'Tahu goreng crispy dengan bumbu' },
  { id: 34, name: 'Ikan Kipas Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop', description: 'Ikan kipas goreng masak balado' },
  { id: 35, name: 'Gorengan', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop', description: 'Aneka gorengan tempe, tahu, bakwan' },
  { id: 36, name: 'Perkedel', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop', description: 'Perkedel kentang gurih homemade' },
  { id: 37, name: 'Jengkol Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop', description: 'Jengkol masak bumbu balado pedas' },
  { id: 38, name: 'Jengkol Semur', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop', description: 'Jengkol masak semur kecap manis' },
  { id: 39, name: 'Telur Puyuh Sambal Pete', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop', description: 'Telur puyuh dengan sambal pete pedas' },
  { id: 40, name: 'Terong Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'Terong masak bumbu balado pedas' },

  // Sayur (Vegetables)
  { id: 41, name: 'Tumis Buncis', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop', description: 'Buncis segar ditumis bumbu bawang' },
  { id: 42, name: 'Tumis Kangkung', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop', description: 'Kangkung segar ditumis bumbu pedas' },
  { id: 43, name: 'Tumis Pare', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop', description: 'Pare ditumis dengan bumbu tempe' },
  { id: 44, name: 'Tumis Genjer', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop', description: 'Genjer ditumis dengan bumbu pedas' },
  { id: 45, name: 'Tumis Tauge', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop', description: 'Tauge segar ditumis bumbu asin' },
  { id: 46, name: 'Tumis Oncom', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'Oncom ditumis bumbu kencur' },
  { id: 47, name: 'Sop Baso', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop', description: 'Sup bakso kuah kaldu segar' },
  { id: 48, name: 'Sayur Asem', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop', description: 'Sayur asem segar aneka sayuran' },
  { id: 49, name: 'Pindang Bandeng', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop', description: 'Bandeng masak pindang asam pedas' },
  { id: 50, name: 'Tumis Capcay', category: 'sayur', type: 'Chinese', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop', description: 'Capcay sayuran segar tumis bumbu' },
  { id: 51, name: 'Tumis Sawi Putih', category: 'sayur', type: 'Chinese', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop', description: 'Sawi putih ditumis bumbu bawang' },
  { id: 52, name: 'Urap', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'Sayuran rebus dengan kelapa parut berbumbu' },
  { id: 53, name: 'Karedok', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'Sayuran segar dengan saus kacang kencur' },
  { id: 54, name: 'Tumis Jamur', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop', description: 'Jamur segar ditumis bumbu pedas' },
  { id: 55, name: 'Tumis Daun Singkong', category: 'sayur', type: 'Nusantara', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop', description: 'Daun singkong muda ditumis bumbu pedas' },
  { id: 56, name: 'Tahu Tempe Kari', category: 'sayur', type: 'Indian', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'Tahu tempe masak kari kuning' },
];

export const menuCategories = [
  { id: 'semua', label: 'Semua Menu' },
  { id: 'protein', label: 'Protein / Lauk Utama' },
  { id: 'pelengkap', label: 'Pelengkap' },
  { id: 'sayur', label: 'Sayur' },
];

export const menuTypes = [
  'Nusantara', 'Japanese', 'Chinese', 'Korean', 'Indian', 'Customize'
];
