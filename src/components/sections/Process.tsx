import { useState } from 'react'
import { Badge, Button, Section } from '@/components/ui'

interface ProcessProps { onOpenModal: () => void }

const steps = [
  {
    n: '1',
    title: 'Click the Button',
    desc: 'Hit "Claim Your Offer" anywhere on this page to open the quick reservation form.',
  },
  {
    n: '2',
    title: 'Fill Out the Form',
    desc: 'Name, email, and phone. Takes less than 60 seconds. No credit card required to reserve.',
  },
  {
    n: '3',
    title: 'Get Confirmed',
    desc: "You'll receive email and SMS confirmations with all the details. We'll follow up within 1 hour.",
  },
]

export function Process({ onOpenModal }: ProcessProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [reducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  return (
    <Section id="process">
<div className="text-center mb-12">
        <Badge align="center">3 Simple Steps</Badge>
        <h2 className="font-display text-fluid-section" style={{ lineHeight: 0.95 }}>
          How to Reserve Your Spot
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {steps.map((s, i) => {
          const isHovered = hoveredIdx === i
          const isDimmed  = hoveredIdx !== null && hoveredIdx !== i

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                background:   isHovered ? 'var(--color-text)' : 'var(--color-surface)',
                borderColor:  isHovered ? 'transparent' : 'var(--color-border)',
                transform:    reducedMotion
                  ? undefined
                  : isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow:    isHovered
                  ? '0 24px 60px rgba(0,0,0,0.35)'
                  : '0 1px 4px rgba(0,0,0,0.06)',
                opacity:      isDimmed ? 0.45 : 1,
                transition:   'all 300ms ease-out',
                cursor:       'default',
                padding:      '2rem',
                borderRadius: '20px',
                border:       '1px solid var(--color-border)',
              }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-display text-[1.5rem] mb-5 relative z-10"
                style={{
                  background: isHovered ? '#fff' : 'var(--color-accent)',
                  color:      isHovered ? 'var(--color-text)' : '#fff',
                  boxShadow:  isHovered ? 'none' : '0 4px 20px rgba(var(--accent-rgb), 0.35)',
                  transition: 'all 300ms ease-out',
                }}
              >
                {s.n}
              </div>
              <h3
                className="font-display text-[1.25rem] tracking-[0.02em] mb-2"
                style={{ color: isHovered ? '#fff' : 'var(--color-text)', transition: 'color 300ms ease-out' }}
              >
                {s.title}
              </h3>
              <p
                className="text-[15px]"
                style={{ color: isHovered ? 'rgba(255,255,255,0.70)' : 'var(--color-text-secondary)', lineHeight: 1.75, transition: 'color 300ms ease-out' }}
              >
                {s.desc}
              </p>
            </div>
          )
        })}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" onClick={onOpenModal}>Claim Your Offer →</Button>
      </div>
    </Section>
  )
}
