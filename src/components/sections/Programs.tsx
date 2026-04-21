import { Badge, Button, Section } from '@/components/ui'
import { programs } from '@/data/programs'

interface ProgramsProps { onOpenModal: () => void }


export function Programs({ onOpenModal }: ProgramsProps) {
  return (
    <Section id="programs" style={{ background: 'var(--color-surface-alt)' }}>

      {/* Header */}
      <div className="mb-10">
        <Badge className="mb-3">What We Teach</Badge>
        <h2 className="font-display text-fluid-section" style={{ lineHeight: 0.95 }}>
          <span style={{ color: 'var(--color-text)' }}>OUR </span>
          <span style={{ color: 'var(--color-accent)' }}>CLASSES</span>
        </h2>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {programs.map(p => (
          <article
            key={p.id}
            className="flex flex-col rounded-[16px] overflow-hidden transition-all duration-300 hover:-translate-y-[6px]"
            style={{
              background: 'var(--color-surface)',
              border: p.featured
                ? '1px solid rgba(153,27,27,0.35)'
                : '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-1)',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = 'var(--shadow-2)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'var(--shadow-1)')}
          >
            {/* Photo */}
            <div style={{ height: 220, position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%)' }}>
              {p.id === 'kids' && (
                <img src="/kids-program.jpg" alt="Kids Program" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
              {p.id === 'advanced' && (
                <img src="/advanced-program.jpg" alt="Advanced Program" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
              {p.id === 'fundamentals' && (
                <img src="/fundamentals-program.jpg" alt="Adult Fundamentals" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
              {/* Badge tag */}
              <span style={{
                position: 'absolute', top: 12, left: 12,
                background: 'rgba(0,0,0,0.65)', color: 'white',
                fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', padding: '4px 10px', borderRadius: '6px',
              }}>
                {p.badge}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1" style={{ padding: '24px' }}>

              {/* Label */}
              <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)', marginBottom: '8px' }}>
                {p.label}
              </p>

              {/* Title */}
              <h3 className="font-display" style={{ fontSize: '1.5rem', lineHeight: 1, color: 'var(--color-text)', marginBottom: '12px' }}>
                {p.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>
                {p.description}
              </p>

              {/* Divider */}
              <div style={{ borderTop: '1px solid var(--color-border)', marginBottom: '16px' }} />

              {/* CTA */}
              <Button variant="primary" size="md" className="w-full program-cta-btn" onClick={onOpenModal}>
                Claim the Grand Opening Offer
              </Button>

            </div>
          </article>
        ))}
      </div>

    </Section>
  )
}
