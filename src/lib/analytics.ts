/**
 * Thin wrapper over Google Analytics 4 and Microsoft Clarity so components never
 * talk to either SDK directly. Both are optional: with no IDs configured every
 * call is a no-op.
 */

/** Only accept well-formed IDs, since they are interpolated into inline scripts. */
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
export const GA_ID = gaId && /^G-[A-Z0-9]+$/.test(gaId) ? gaId : undefined;
export const CLARITY_ID = clarityId && /^[a-z0-9]+$/i.test(clarityId) ? clarityId : undefined;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export type TrackedEvent = 'whatsapp_click' | 'phone_click' | 'email_click';

export function trackEvent(name: TrackedEvent, params: { cta: string }) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', name, params);
  window.clarity?.('event', name);
  window.clarity?.('set', 'cta', params.cta);
}

/** Maps a link href to the contact event it represents, if any. */
export function contactEventFor(href: string): TrackedEvent | undefined {
  if (href.startsWith('https://wa.me/') || href.startsWith('https://api.whatsapp.com/')) {
    return 'whatsapp_click';
  }
  if (href.startsWith('tel:')) return 'phone_click';
  if (href.startsWith('mailto:')) return 'email_click';
  return undefined;
}
