import { Button, Section } from '@/components/ui'

interface HuntersProps { onOpenModal: () => void }

export function Hunters({ onOpenModal }: HuntersProps) {
  return (
    <Section id="hunters" style={{ background: '#ffffff' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* On mobile: right column first — order-first / order-last */}

        {/* Right — Content (order-first on mobile) */}
        <div className="order-first lg:order-last flex flex-col">

          {/* Badge */}
          <p style={{
            fontSize: 12, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: 'var(--color-text-muted)',
            marginBottom: 20,
          }}>
            // About Us
          </p>

          {/* Title */}
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3.25rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              marginBottom: 24,
              color: 'var(--color-text)',
            }}
          >
            A TRUE HUNTER IS<br />
            SOMEONE WHO<br />
            <span style={{ color: 'var(--color-accent)' }}>STARTS</span>—NO MATTER<br />
            <span style={{ color: 'var(--color-accent)' }}>WHERE</span> THEY ARE.
          </h2>

          {/* Body */}
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
            Hunters is a name that represents those who seek growth,
            regardless of age or fitness level — on and off the mats.
          </p>

          {/* Blockquote */}
          <blockquote
            className="font-serif"
            style={{
              borderLeft: '3px solid var(--color-accent)',
              paddingLeft: 16,
              fontStyle: 'italic',
              fontSize: 15,
              color: 'var(--color-accent)',
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            "Expert guidance for beginners" is the motto we want
            to be known for in Deerfield Beach.
          </blockquote>

          {/* CTA */}
          <div>
            <Button size="lg" onClick={onOpenModal}>
              Get the Grand Opening Offer →
            </Button>
          </div>

          {/* Small gallery */}
          <div className="grid grid-cols-2 gap-3" style={{ marginTop: 24 }}>
            {(['// 01', '// 02'] as const).map((label, i) => (
              <div
                key={i}
                className="relative rounded-[12px] overflow-hidden"
                style={{
                  aspectRatio: '4/3',
                  background: 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)',
                }}
              >
                <span style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%,-50%)',
                  color: 'rgba(0,0,0,0.35)', fontSize: 11, fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>
                  Foto · 320 × 240px
                </span>
                <span style={{
                  position: 'absolute', bottom: 10, left: 12,
                  fontSize: 11, fontWeight: 700,
                  color: 'rgba(0,0,0,0.4)', letterSpacing: '0.1em',
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Left — Photos (order-last on mobile) */}
        <div className="order-last lg:order-first">

          {/* Main photo */}
          <div
            className="relative rounded-[16px] overflow-hidden w-full aspect-[4/3] lg:aspect-[4/5]"
            style={{ background: 'linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%)' }}
          >
            <img src="/about-main.jpg" alt="Hunters Academy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>

        </div>

      </div>
    </Section>
  )
}
