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
  { id: 1, name: 'Chicken Katsu', category: 'protein', type: 'Japanese', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144080/retaba/food-images/3.png', description: 'Ayam goreng tepung renyah dengan saus katsu' },
  { id: 2, name: 'Chicken Teriyaki', category: 'protein', type: 'Japanese', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144096/retaba/food-images/4.png', description: 'Ayam panggang saus teriyaki yang legit' },
  { id: 3, name: 'Beef Teriyaki', category: 'protein', type: 'Japanese', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144112/retaba/food-images/5.png', description: 'Daging sapi iris tipis dengan saus teriyaki gurih manis' },
  { id: 4, name: 'Ayam Rendang', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144126/retaba/food-images/6.png', description: 'Ayam rendang bumbu rempah khas Minang' },
  { id: 5, name: 'Daging Rendang', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144127/retaba/food-images/7.png', description: 'Daging sapi empuk berbumbu rendang autentik' },
  { id: 6, name: 'Ikan Nila Goreng', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144129/retaba/food-images/8.png', description: 'Ikan nila goreng garing di luar, juicy di dalam' },
  { id: 7, name: 'Ikan Lele Goreng', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144130/retaba/food-images/9.png', description: 'Lele goreng renyah dengan sambal penyet' },
  { id: 8, name: 'Ayam Goreng', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144049/retaba/food-images/10.png', description: 'Ayam goreng bumbu kuning yang meresap' },
  { id: 9, name: 'Ayam Mentega Kecap', category: 'protein', type: 'Chinese', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144051/retaba/food-images/11.png', description: 'Ayam goreng mentega dengan aroma kecap manis' },
  { id: 10, name: 'Pepes Ikan', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144052/retaba/food-images/12.png', description: 'Ikan pepes dalam daun pisang, bumbu meresap sempurna' },
  { id: 11, name: 'Ayam Serundeng', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144054/retaba/food-images/13.png', description: 'Ayam goreng bertabur serundeng kelapa gurih' },
  { id: 12, name: 'Fried Chicken', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144055/retaba/food-images/14.png', description: 'Ayam goreng crispy dengan bumbu rahasia' },
  { id: 13, name: 'Udang Balado', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144056/retaba/food-images/15.png', description: 'Udang segar berbalut sambal balado merah' },
  { id: 14, name: 'Cumi Balado', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144058/retaba/food-images/16.png', description: 'Cumi masak balado dengan bumbu pedas mercon' },
  { id: 15, name: 'Kerang Balado', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144059/retaba/food-images/17.png', description: 'Kerang dara segar masak balado pedas' },
  { id: 16, name: 'Kikil Balado', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144061/retaba/food-images/18.png', description: 'Kikil sapi empuk berbumbu balado pedas' },
  { id: 17, name: 'Ayam Kari', category: 'protein', type: 'Indian', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144062/retaba/food-images/19.png', description: 'Ayam masak kari kuning harum rempah' },
  { id: 18, name: 'Tuna Balado', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144065/retaba/food-images/20.png', description: 'Tuna segar masak balado dengan cabai merah' },
  { id: 19, name: 'Ati Ampela', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144066/retaba/food-images/21.png', description: 'Hati ampela ayam masak bumbu pedas nendang' },
  { id: 20, name: 'Ikan Kembung', category: 'protein', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144068/retaba/food-images/22.png', description: 'Ikan kembung goreng atau bakar bumbu sederhana' },

  // Vegetables/Side
  { id: 21, name: 'Gado-Gado', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144069/retaba/food-images/23.png', description: 'Sayuran rebus segar dengan saus kacang kental' },
  { id: 22, name: 'Kentang Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144071/retaba/food-images/24.png', description: 'Kentang goreng berbalut sambal balado' },
  { id: 23, name: 'Usus Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144073/retaba/food-images/25.png', description: 'Usus ayam bersih dimasak balado pedas' },
  { id: 24, name: 'Telur Dadar', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144074/retaba/food-images/26.png', description: 'Telur dadar tebal dengan bawang goreng' },
  { id: 25, name: 'Telur Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144076/retaba/food-images/27.png', description: 'Telur rebus masak balado santan' },
  { id: 26, name: 'Telur Mata Sapi Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144078/retaba/food-images/28.png', description: 'Telur ceplok dengan sambal balado merah' },
  { id: 27, name: 'Telur Kari', category: 'pelengkap', type: 'Indian', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144079/retaba/food-images/29.png', description: 'Telur rebus masak kuah kari berrempah' },
  { id: 28, name: 'Tempe Orek Basah', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144082/retaba/food-images/30.png', description: 'Tempe orek dengan bumbu basah manis pedas' },
  { id: 29, name: 'Tempe Orek Kering', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144084/retaba/food-images/31.png', description: 'Tempe orek kering garing dengan taburan cabai' },
  { id: 30, name: 'Teri Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144085/retaba/food-images/32.png', description: 'Teri nasi goreng kering berbalut sambal' },
  { id: 31, name: 'Mie Goreng', category: 'pelengkap', type: 'Chinese', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144086/retaba/food-images/33.png', description: 'Mie goreng dengan bumbu kecap dan sayuran' },
  { id: 32, name: 'Tempe Goreng', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144087/retaba/food-images/34.png', description: 'Tempe goreng tepung renyah' },
  { id: 33, name: 'Tahu Goreng', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144089/retaba/food-images/35.png', description: 'Tahu putih goreng dengan kulit krispi' },
  { id: 34, name: 'Ikan Kipas Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144090/retaba/food-images/36.png', description: 'Ikan kipas goreng balado pedas gurih' },
  { id: 35, name: 'Gorengan', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144091/retaba/food-images/37.png', description: 'Aneka gorengan: tempe, tahu, dan bakwan' },
  { id: 36, name: 'Perkedel', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144093/retaba/food-images/38.png', description: 'Perkedel kentang gurih dengan seledri' },
  { id: 37, name: 'Jengkol Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144095/retaba/food-images/39.png', description: 'Jengkol empuk masak balado pedas nikmat' },
  { id: 38, name: 'Jengkol Semur', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144097/retaba/food-images/40.png', description: 'Jengkol masak semur kecap manis legit' },
  { id: 39, name: 'Telur Puyuh Sambal Pete', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144099/retaba/food-images/41.png', description: 'Telur puyuh dengan sambal pete yang nendang' },
  { id: 40, name: 'Terong Balado', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144100/retaba/food-images/42.png', description: 'Terong ungu goreng berbalut sambal balado' },

  // Sayur (Vegetables)
  { id: 41, name: 'Tumis Buncis', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144102/retaba/food-images/43.png', description: 'Buncis segar ditumis bumbu bawang putih' },
  { id: 42, name: 'Tumis Kangkung', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144103/retaba/food-images/44.png', description: 'Kangkung tumis bawang putih dengan sedikit terasi' },
  { id: 43, name: 'Tumis Pare', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144105/retaba/food-images/45.png', description: 'Pare tumis dengan tempe dan bumbu meresap' },
  { id: 44, name: 'Tumis Genjer', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144106/retaba/food-images/46.png', description: 'Genjer muda tumis pedas dengan terasi' },
  { id: 45, name: 'Tumis Tauge', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144108/retaba/food-images/47.png', description: 'Tauge segar ditumis dengan irisan tahu' },
  { id: 46, name: 'Tumis Oncom', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144109/retaba/food-images/48.png', description: 'Oncom hancur tumis dengan daun kemangi' },
  { id: 47, name: 'Sop Baso', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144110/retaba/food-images/49.png', description: 'Sup bakso dengan kuah kaldu hangat' },
  { id: 48, name: 'Sayur Asem', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144113/retaba/food-images/50.png', description: 'Sayur asem segar dengan aneka sayuran kampung' },
  { id: 49, name: 'Pindang Bandeng', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144114/retaba/food-images/51.png', description: 'Bandeng masak kuah asam pedas dengan kemangi' },
  { id: 50, name: 'Tumis Capcay', category: 'sayur', type: 'Chinese', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144116/retaba/food-images/52.png', description: 'Aneka sayuran tumis dengan saus tiram' },
  { id: 51, name: 'Tumis Sawi Putih', category: 'sayur', type: 'Chinese', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144117/retaba/food-images/53.png', description: 'Sawi putih tumis bawang putih yang gurih' },
  { id: 52, name: 'Urap', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144119/retaba/food-images/54.png', description: 'Sayuran rebus dengan taburan kelapa parut berbumbu' },
  { id: 53, name: 'Karedok', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144120/retaba/food-images/55.png', description: 'Sayuran segar dengan saus kacang kencur' },
  { id: 54, name: 'Tumis Jamur', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144122/retaba/food-images/56.png', description: 'Jamur kancing tumis bawang putih dan daun bawang' },
  { id: 55, name: 'Tumis Daun Singkong', category: 'sayur', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144123/retaba/food-images/57.png', description: 'Daun singkong muda tumis dengan bumbu kelapa' },
  { id: 56, name: 'Tahu Tempe Kari', category: 'sayur', type: 'Indian', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144124/retaba/food-images/58.png', description: 'Tahu dan tempe masak kuah kari berempah' },
  { id: 57, name: 'Susu Segar', category: 'pelengkap', type: 'Nusantara', image: 'https://res.cloudinary.com/dr62jpnos/image/upload/v1776144123/retaba/food-images/57.png', description: 'Susu segar sebagai pelengkap nutrisi harian' },
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
