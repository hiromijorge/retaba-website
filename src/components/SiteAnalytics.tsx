'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { GA_ID, CLARITY_ID, contactEventFor, trackEvent } from '@/lib/analytics';

/**
 * Loads GA4 + Clarity (when their IDs are set) and records every WhatsApp,
 * phone and email click site-wide through one delegated listener. Tag a link
 * (or a wrapper) with `data-cta="hero"` to say which button it was.
 */
export default function SiteAnalytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]');
      if (!link) return;
      const event = contactEventFor(link.getAttribute('href') ?? '');
      if (!event) return;
      const cta = link.closest('[data-cta]')?.getAttribute('data-cta') ?? 'untagged';
      trackEvent(event, { cta });
    };
    // Capture phase so the event is recorded before the browser leaves for WhatsApp.
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      )}
    </>
  );
}
