import { Section } from '@/components/ui'

export function Guarantee() {
  return (
    <Section id="guarantee" style={{ background: 'var(--color-accent)' }}>
      <div className="max-w-2xl mx-auto text-center text-white">
        {/* Shield icon */}
        <div className="flex justify-center mb-6">
          <svg viewBox="0 0 64 64" fill="none" width="64" height="64" aria-hidden="true">
            <path
              d="M32 4 L56 14 L56 38 C56 52 45 61 32 64 C19 61 8 52 8 38 L8 14 Z"
              stroke="rgba(255,255,255,0.40)"
              strokeWidth="1.5"
              fill="rgba(255,255,255,0.08)"
            />
            <polyline
              points="22,32 28,38 42,26"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2
          className="font-display text-fluid-section mb-4"
          style={{ lineHeight: 0.95, letterSpacing: '-0.02em' }}
        >
          Our Founding Member Guarantee
        </h2>
        <p className="text-[1rem] opacity-85 max-w-lg mx-auto mb-3" style={{ lineHeight: 1.8 }}>
          Train with us for the first 30 days after we open. If it's not exactly what we promised,
          we'll refund every cent — no questions, no hassle.
        </p>
        <p className="text-[14px] opacity-60 max-w-md mx-auto">
          We're building something we're proud of. If we don't deliver, you shouldn't pay for it.
        </p>
      </div>
    </Section>
  )
}
