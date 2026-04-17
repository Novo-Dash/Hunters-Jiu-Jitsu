import { useState } from 'react'

interface LocationProps { onOpenModal: () => void }

export function Location({ onOpenModal: _ }: LocationProps) {
  return (
    <section
      id="location"
      style={{
        background: '#000000',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 0 }} />
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '100px 40px', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'stretch',
          }}
          className="location-grid"
        >

          {/* Left — Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

            {/* Header */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  color: 'white',
                  margin: 0,
                }}
              >
                HUNTERS ACADEMY
              </h2>
              <p style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.60)',
                lineHeight: 1.7,
                maxWidth: 420,
                margin: 0,
              }}>
                We're opening soon in Deerfield Beach, FL. Come train with us — expert guidance
                for beginners of all ages and fitness levels.
              </p>
            </div>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <ContactCard
                icon={<PhoneIcon />}
                label="Phone"
                value="TELEFONE — CONFIRMAR"
                pending
              />
              <ContactCard
                icon={<MailIcon />}
                label="E-Mail"
                value="EMAIL — CONFIRMAR"
                pending
              />
              <ContactCard
                icon={<PinIcon />}
                label="Location"
                value="ENDEREÇO — CONFIRMAR"
                pending
              />
            </div>

          </div>

          {/* Right — Map */}
          <div style={{ minHeight: 400 }}>
            <iframe
              title="Hunters Academy — Deerfield Beach, FL"
              src="https://maps.google.com/maps?q=Deerfield+Beach,+FL&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: 'block',
                borderRadius: 12,
                minHeight: 400,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, pending }: {
  icon: React.ReactNode
  label: string
  value: string
  pending?: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        minHeight: 72,
        padding: '16px 20px',
        borderRadius: 8,
        background: hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.10)',
        cursor: 'pointer',
        transition: 'background 200ms ease',
      }}
    >
      {/* Icon area — 44x44 touch target */}
      <div style={{
        width: 44, height: 44, borderRadius: 10, flexShrink: 0,
        background: 'rgba(153,27,27,0.30)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {icon}
      </div>

      {/* Text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.18em', color: 'rgba(255,255,255,0.40)',
        }}>
          {label}
        </span>
        <span style={{
          fontSize: 14, fontWeight: 600,
          color: pending ? '#f87171' : 'white',
        }}>
          {value}
        </span>
      </div>
    </div>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="round" width="20" height="20">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="round" width="20" height="20">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="round" width="20" height="20">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
