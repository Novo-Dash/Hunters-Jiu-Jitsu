import { Badge, Button, Section } from '@/components/ui'

const SPOTS_TOTAL = 30
const SPOTS_TAKEN = 13
const pct = Math.round((SPOTS_TAKEN / SPOTS_TOTAL) * 100)

interface OfferProps { onOpenModal: () => void }

export function Offer({ onOpenModal }: OfferProps) {
  return (
    <Section id="offer" style={{ background: 'var(--color-accent-subtle)' }}>
      <div
        className="max-w-xl mx-auto rounded-[24px] p-8 md:p-10 text-center offer-card"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-2)',
        }}
      >
        <Badge align="center" className="mb-4">Founding Member Offer</Badge>

        <h2
          className="font-display text-fluid-section mb-2"
          style={{ lineHeight: 0.95 }}
        >
          The Price We'll<br />Never Offer Again.
        </h2>
        <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          Lock in your founding member rate forever. Everyone who joins after opening day pays more — every single month.
        </p>

        {/* Spots avatars */}
        <div className="flex items-center justify-center gap-3 mb-5 offer-spots-row">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2"
                style={{
                  background: 'var(--color-surface-alt)',
                  borderColor: 'var(--color-surface)',
                  marginLeft: i === 0 ? 0 : '-0.5rem',
                }}
              />
            ))}
          </div>
          <p className="text-[14px]" style={{ color: 'var(--color-text-secondary)' }}>
            <strong style={{ color: 'var(--color-text)' }}>{SPOTS_TAKEN} people</strong> have already reserved their founding spot
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-[13px] mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
            <span>{SPOTS_TAKEN} of {SPOTS_TOTAL} founding spots claimed</span>
            <span className="font-semibold" style={{ color: 'var(--color-accent)' }}>
              {SPOTS_TOTAL - SPOTS_TAKEN} remaining
            </span>
          </div>
          <div className="h-2 rounded-full" style={{ background: 'var(--color-border)' }}>
            <div
              className="h-2 rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, background: 'var(--color-accent)' }}
            />
          </div>
        </div>

        {/* Pending data block */}
        <div
          className="rounded-[12px] p-4 mb-5 text-left"
          style={{ background: 'var(--color-accent-subtle)', border: '1px dashed var(--color-accent)' }}
        >
          <p className="text-red-700 font-bold text-[13px] mb-1">
            FOUNDING MEMBER PRICING — CONFIRMAR COM CLIENTE
          </p>
          <p className="text-[13px]" style={{ color: 'var(--color-text-secondary)' }}>
            Preço founding / Preço regular pós-abertura / O que inclui a oferta
          </p>
        </div>

        <Button size="lg" className="w-full" onClick={onOpenModal}>
          Secure My Founding Spot →
        </Button>
        <p className="mt-3 text-[13px]" style={{ color: 'var(--color-text-muted)' }}>
          30-day satisfaction guarantee. No questions asked.
        </p>
      </div>
    </Section>
  )
}
