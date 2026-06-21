import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'MTP Distribution — Security & Infrastructure VAD, UAE & Oman'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0D1B3E 0%, #162040 100%)',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 14, height: 14, borderRadius: 7, background: '#00B4C8' }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, background: '#16A34A' }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, background: '#F59E0B' }} />
          </div>
          <div style={{ color: 'white', fontSize: 30, fontWeight: 700 }}>MTP</div>
          <div style={{ color: '#00B4C8', fontSize: 30, fontWeight: 500 }}>Distribution</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ color: '#00B4C8', fontSize: 22, fontWeight: 600, letterSpacing: 2 }}>
            VALUE-ADDED DISTRIBUTOR · UAE &amp; OMAN
          </div>
          <div style={{ color: 'white', fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
            The Gulf&apos;s Trusted Security &amp; Infrastructure Distributor
          </div>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 26 }}>
          Powered by Technology, Secure by Solution
        </div>
      </div>
    ),
    { ...size }
  )
}
