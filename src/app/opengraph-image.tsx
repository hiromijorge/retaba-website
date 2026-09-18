import { ImageResponse } from 'next/og';
import { COMPANY, PHONE_DISPLAY, SERVICE_AREAS } from '@/lib/site';

// Generated at build time and served at /opengraph-image — replaces the missing /og-image.jpg.
export const alt = 'RETABA Catering — Jasa Catering Perusahaan Bersertifikat Halal MUI & SLHS';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadNunito(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    ).then((r) => r.text());
    const url = css.match(/src: url\(([^)]+)\) format\('(?:truetype|woff)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const nunito = await loadNunito();
  const fontFamily = nunito ? 'Nunito' : 'sans-serif';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#F7D200',
          fontFamily,
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 18, background: '#00B4A0' }} />

        <div style={{ display: 'flex', flexDirection: 'column', padding: '64px 72px 0', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                borderRadius: 16,
                background: '#087A68',
                color: '#FFFFFF',
                fontSize: 40,
                fontWeight: 900,
              }}
            >
              R
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 40, fontWeight: 900, color: '#087A68', letterSpacing: -1 }}>{COMPANY.brand}</div>
              <div style={{ fontSize: 18, color: '#1A1A1A', opacity: 0.7, letterSpacing: 4 }}>CATERING</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 48, color: '#1A1A1A', fontSize: 76, fontWeight: 900, lineHeight: 1.0, letterSpacing: -2 }}>
            <div>Catering Perusahaan</div>
            <div style={{ color: '#087A68' }}>Halal & Tepat Waktu.</div>
          </div>

          <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
            {['Halal MUI', 'SLHS', 'Lab Tested', '5.000+ porsi/hari'].map((label) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  padding: '12px 22px',
                  borderRadius: 999,
                  background: '#FFFFFF',
                  color: '#087A68',
                  fontSize: 24,
                  fontWeight: 900,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: '0 72px 44px',
            color: '#1A1A1A',
            fontSize: 24,
            fontWeight: 900,
          }}
        >
          <div>{SERVICE_AREAS.map((a) => a.city).join(' · ')}</div>
          <div style={{ color: '#087A68' }}>{`WhatsApp ${PHONE_DISPLAY}`}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: nunito ? [{ name: 'Nunito', data: nunito, weight: 900, style: 'normal' }] : undefined,
    }
  );
}
