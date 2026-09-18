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
export const WA_LINK = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(WA_MESSAGE)}`;

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
