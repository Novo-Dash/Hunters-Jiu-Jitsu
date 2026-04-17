import { useState, useCallback } from 'react'
import { Button, Section } from '@/components/ui'
import { faqItems } from '@/data/faq'

interface FAQProps { onOpenModal: () => void }

export function FAQ({ onOpenModal }: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(1)

  const toggle = useCallback((i: number) => {
    setOpenIdx(prev => (prev === i ? null : i))
  }, [])

  return (
    <Section id="faq" style={{ background: 'var(--color-bg)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left — sticky title */}
        <div className="lg:sticky lg:top-32">
          {/* Badge pill */}
          <span style={{
            display: 'inline-flex',
            padding: '6px 14px',
            background: 'var(--color-accent)',
            color: 'white',
            borderRadius: 9999,
            fontSize: 12, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.12em',
            marginBottom: 24,
          }}>
            FAQ
          </span>

          {/* Title */}
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 6vw + 1rem, 6rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: 'var(--color-text)',
            }}
          >
            COMMON<br />QUESTIONS
          </h2>
        </div>

        {/* Right — accordion */}
        <div>
          {faqItems.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                style={{
                  background: isOpen ? 'var(--color-surface)' : 'var(--color-surface-alt)',
                  borderRadius: 12,
                  marginBottom: 8,
                  overflow: 'hidden',
                  boxShadow: isOpen ? 'var(--shadow-2)' : 'none',
                  transition: 'all 300ms ease-out',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '20px 24px', gap: 16, cursor: 'pointer',
                    background: 'none', border: 'none', textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.4 }}>
                    {item.question}
                  </span>
                  {/* Icon */}
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isOpen ? 'var(--color-accent)' : 'var(--color-border)',
                    transition: 'all 200ms',
                  }}>
                    {isOpen ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" width="14" height="14">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2.5" strokeLinecap="round" width="14" height="14">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div style={{
                  overflow: 'hidden',
                  maxHeight: isOpen ? '300px' : '0px',
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 300ms ease-out',
                }}>
                  <p style={{ padding: '0 24px 20px', fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                    {item.pending && (
                      <span className="block text-red-600 font-bold mb-1 text-[13px]">
                        CONFIRMAR COM CLIENTE
                      </span>
                    )}
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}

          {/* CTA */}
          <div style={{ marginTop: 24 }}>
            <Button size="lg" onClick={onOpenModal}>
              Click to Book Your Free Trial Class →
            </Button>
          </div>
        </div>

      </div>
    </Section>
  )
}
