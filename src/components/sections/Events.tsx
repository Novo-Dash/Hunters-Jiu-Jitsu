import { Button } from '@/components/ui'

interface EventsProps { onOpenModal: () => void }

export function Events({ onOpenModal }: EventsProps) {
  return (
    <section
      id="events"
      aria-labelledby="events-h2"
      style={{ background: '#000000' }}
      className="w-full py-24 px-6 md:px-10 lg:px-16"
    >
      <div className="mx-auto text-center" style={{ maxWidth: '1400px' }}>
        <div className="mx-auto" style={{ maxWidth: '768px' }}>

          {/* Badge */}
          <div
            className="flex items-center justify-center gap-3 mb-4 text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ color: 'var(--color-accent)' }}
          >
            <span className="block h-px w-10 bg-current opacity-40" />
            Community
            <span className="block h-px w-10 bg-current opacity-40" />
          </div>

          {/* Title */}
          <h2
            id="events-h2"
            className="font-display uppercase text-white mb-5"
            style={{
              fontSize: 'clamp(2.5rem, 5vw + 0.5rem, 5rem)',
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
            }}
          >
            Where Different Martial Arts Come Together to Grow
          </h2>

          {/* Body */}
          <p className="text-[1rem] mb-6" style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.8 }}>
            At Hunters, other martial arts beyond jiu-jitsu will also be taught.
            We will host exchange events, bringing together practitioners from
            different disciplines to share knowledge and strengthen our community.
            You'll be welcome to join—even if you've never trained before.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 justify-center my-6">
            {['Jiu-Jitsu', 'Wrestling', 'Muay Thai', 'No-Gi', 'Self-Defense'].map(d => (
              <span
                key={d}
                className="px-4 py-1.5 rounded-full text-[13px] font-medium"
                style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
              >
                {d}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Button size="lg" onClick={onOpenModal}>
            Claim Your Grand Opening Offer →
          </Button>

        </div>
      </div>
    </section>
  )
}
