import { useState } from 'react'

export function Footer() {
  return (
    <section
      style={{ background: '#000000' }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '100px 40px' }}>

        {/* ── CONTACT: 2 colunas ── */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'stretch' }}
          className="footer-contact-grid"
        >
          {/* Esquerda */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, paddingRight: 60 }}>
            <img
              src="/imagem/logo-01.png"
              alt="Hunters Academy"
              style={{ width: 150, height: 'auto', objectFit: 'contain', marginBottom: 32, mixBlendMode: 'lighten' }}
            />
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.60)', lineHeight: 1.75, maxWidth: 480, margin: 0, marginBottom: 40 }}>
              Hunters Academy is a new academy coming to Deerfield Beach, combining high-level instruction with a welcoming community. From day one, beginners receive expert guidance designed to help growth with confidence.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
              <ContactCard icon={<PhoneIcon />} label="Phone"    value="TELEFONE — CONFIRMAR" pending />
              <ContactCard icon={<MailIcon />}  label="E-Mail"   value="huntersacademydeerfield@gmail.com"    pending />
              <ContactCard icon={<PinIcon />}   label="Location" value="Deerfield Beach, FL" pending />
            </div>
          </div>

          {/* Direita — Mapa */}
          <div style={{ minHeight: 500 }}>
            <iframe
              title="Hunters Academy — Deerfield Beach, FL"
              src="https://maps.google.com/maps?q=Deerfield+Beach,+FL&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', borderRadius: 12, minHeight: 500 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      {/* ── COPYRIGHT ── */}
      <div className="copyright" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{
          maxWidth: 1400, margin: '0 auto', padding: '20px 40px',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 8,
          fontSize: 13, color: 'rgba(255,255,255,0.28)',
        }}>
          <span>© 2025 Hunters Academy. All rights reserved.</span>
          <span>Deerfield Beach, FL · Expert Guidance for Beginners</span>
        </div>
      </div>

    </section>
  )
}

/* ── Sub-components ── */

function ContactCard({ icon, label, value, pending }: {
  icon: React.ReactNode; label: string; value: string; pending?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '20px 24px', borderRadius: 8,
        background: 'rgba(255,255,255,0.06)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.08)'}`,
        cursor: 'pointer', transition: 'all 200ms ease',
      }}
    >
      <div style={{
        width: 38, height: 38, borderRadius: 8, flexShrink: 0,
        background: 'rgba(153,27,27,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.50)' }}>
          {label}
        </span>
        <span style={{ fontSize: 15, fontWeight: 600, color: pending ? '#f87171' : 'white' }}>
          {value}
        </span>
      </div>
    </div>
  )
}

function PinIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
}
function PhoneIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="round" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
}
function MailIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="round" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
}
