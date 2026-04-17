import { Button, Section } from '@/components/ui'
import { coach, achievements } from '@/data/coach'
import type { Achievement } from '@/types'

interface CoachProps { onOpenModal: () => void }

const medalStyle: Record<Achievement['medal'], React.CSSProperties> = {
  gold:   { background: 'linear-gradient(135deg,#f59e0b,#d97706)', color: '#fff' },
  silver: { background: 'linear-gradient(135deg,#94a3b8,#64748b)', color: '#fff' },
  bronze: { background: 'linear-gradient(135deg,#b45309,#92400e)', color: '#fff' },
}

const StatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" style={{ flexShrink: 0, marginTop: 1 }}>
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
)

const stats = [
  { label: 'Medals',     value: '6 International Podiums' },
  { label: 'Top Result', value: '1st Place AJP Grand Slam' },
  { label: 'Belt',       value: 'Black Belt — 2020' },
  { label: 'Training',   value: 'Since age 12' },
  { label: 'Origin',     value: 'Maranhão, Brazil' },
  { label: 'Teaches',    value: 'All ages & levels' },
]

export function Coach({ onOpenModal }: CoachProps) {
  return (
    <Section id="coach" style={{ background: 'var(--color-bg)' }}>

      {/* Title */}
      <h2 className="font-display text-fluid-section" style={{ lineHeight: 0.95, marginBottom: 48 }}>
        <span style={{ color: 'var(--color-text)' }}>MEET THE </span>
        <span style={{ color: 'var(--color-accent)' }}>COACH</span>
      </h2>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" style={{ alignItems: 'start' }}>

        {/* Left — photo + overlaid red card */}
        <div style={{ position: 'relative', alignSelf: 'start' }}>

          {/* Coach photo */}
          <div style={{
            borderRadius: 16, overflow: 'hidden',
            aspectRatio: '4/5', width: '100%',
            position: 'relative',
          }}>
            <img src="/coach.jpg" alt="Gabriel Costa" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>

          {/* Red card overlaid */}
          <div style={{
            position: 'absolute', bottom: 0, right: 0,
            width: '55%',
            background: 'var(--color-accent)',
            borderRadius: '12px 0 16px 0',
            padding: '20px 24px',
          }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.65)', marginBottom: 8 }}>
              Head Coach
            </p>
            <p className="font-display" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 0.95, color: 'white', marginBottom: 4 }}>
              {coach.name.toUpperCase()}
            </p>
            <p className="font-serif" style={{ fontStyle: 'italic', fontSize: '1.125rem', color: 'rgba(255,255,255,0.85)', marginBottom: 12 }}>
              {coach.nickname}
            </p>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(0,0,0,0.25)', borderRadius: 9999,
              padding: '5px 12px',
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.9)' }}>
                — Black Belt — 2020
              </span>
            </span>
          </div>
        </div>

        {/* Right — stats, bio, achievements, cta */}
        <div>

          {/* Stats grid 2x3 */}
          <div className="grid grid-cols-2 gap-3" style={{ marginBottom: 24 }}>
            {stats.map(s => (
              <div key={s.label} style={{
                background: 'var(--color-surface-alt)',
                border: '1px solid var(--color-border)',
                borderRadius: 12, padding: '14px 16px',
                display: 'flex', alignItems: 'flex-start', gap: 12,
              }}>
                <StatIcon />
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 3 }}>
                    {s.label}
                  </p>
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3 }}>
                    {s.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid var(--color-border)', margin: '4px 0 20px' }} />

          {/* Bio */}
          <div style={{
            background: 'var(--color-surface-alt)',
            borderRadius: 12, padding: 20,
            borderLeft: '3px solid var(--color-accent)',
          }}>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 0 }}>
              {coach.bio}
            </p>
          </div>

          {/* Achievements */}
          <div style={{ marginTop: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-text-muted)', marginBottom: 14 }}>
              Main Achievements
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {achievements.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="font-display" style={{
                    ...medalStyle[a.medal],
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13,
                  }}>
                    {a.place[0]}
                  </span>
                  <span style={{ fontSize: 14, color: 'var(--color-text)' }}>
                    {a.place} — {a.event} ({a.year})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 28, paddingBottom: 40 }}>
            <Button size="lg" onClick={onOpenModal}>
              Train With Maranhão From Day One →
            </Button>
          </div>

        </div>
      </div>

    </Section>
  )
}
