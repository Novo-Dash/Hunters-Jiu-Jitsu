import { Badge, Button, Section } from '@/components/ui'

interface FinalCTAProps { onOpenModal: () => void }

export function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <Section id="finalcta" style={{ background: 'var(--color-text)' }} className="py-32">
      <div className="max-w-3xl mx-auto text-center">
        <Badge align="center" className="mb-5">Don't Wait</Badge>

        <h2
          className="font-display text-fluid-hero text-white mb-4"
          style={{ lineHeight: 0.92, letterSpacing: '-0.02em' }}
        >
          Be One of Our<br />
          <span style={{ color: 'var(--color-accent)' }}>Founding Members.</span>
        </h2>

        <p className="text-[1rem] max-w-md mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
          17 founding spots remain. The price locks today and never goes up — for you. Everyone who joins
          after opening day pays more, every month.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" className="text-[15px] px-10" onClick={onOpenModal}>
            I Want to Be a Founding Member →
          </Button>
        </div>

        <p className="mt-5 text-[13px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
          30-day money-back guarantee. No risk.
        </p>
      </div>
    </Section>
  )
}
