/**
 * Single source of truth for company facts and shared URLs.
 * Change contact details here — every page reads from this file.
 */
export const SITE_URL = 'https://www.retaba.co.id';

export const COMPANY = {
  brand: 'RETABA',
  legalName: 'PT. Receh Tapi Banyak',
  foundingYear: '2023',
  halalCertNo: 'ID33110014801751123',
} as const;

/** Local format as printed on marketing material. */
export const PHONE_DISPLAY = '0888 7888 808';
/** E.164 without "+": Indonesian numbers drop the leading 0 after the 62 country code. */
export const PHONE_E164 = '628887888808';
export const PHONE_TEL = `tel:+${PHONE_E164}`;

export const EMAIL = 'info@retaba.co.id';

const WA_MESSAGE =
  'Halo RETABA, saya ingin mengetahui lebih lanjut tentang layanan catering Anda.';

/** Page names as shown in the navbar; also used to tag where a WhatsApp lead came from. */
export const PAGE_LABELS: Record<string, string> = {
  '/': 'Beranda',
  '/about': 'Tentang Kami',
  '/services': 'Layanan',
  '/menu': 'Menu',
  '/clients': 'Klien',
  '/gallery': 'Galeri',
  '/contact': 'Kontak',
};

/**
 * WhatsApp link with the pre-filled message. Passing the page name appends
 * "(dari website: Menu)" so incoming chats show which page the lead came from.
 */
export function waLink(page?: string) {
  const text = page ? `${WA_MESSAGE}\n\n(dari website: ${page})` : WA_MESSAGE;
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`;
}

export const WA_LINK = waLink();

export const SERVICE_AREAS = [
  { city: 'Tangerang', province: 'Banten' },
  { city: 'Semarang', province: 'Jawa Tengah' },
  { city: 'Salatiga', province: 'Jawa Tengah' },
  { city: 'Solo', province: 'Jawa Tengah' },
] as const;

/** "Tangerang, Semarang, Salatiga, dan Solo" */
export const SERVICE_AREAS_TEXT = (() => {
  const names = SERVICE_AREAS.map((a) => a.city);
  return `${names.slice(0, -1).join(', ')}, dan ${names[names.length - 1]}`;
})();
