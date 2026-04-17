import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui'

interface HeroProps { onOpenModal: () => void }

export function Hero({ onOpenModal }: HeroProps) {
  const badgeRef   = useRef<HTMLDivElement>(null)
  const h1Ref      = useRef<HTMLHeadingElement>(null)
  const subRef     = useRef<HTMLParagraphElement>(null)
  const ctaRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Dynamic import GSAP to keep bundle lazy
    import('gsap').then(({ gsap }) => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.fromTo(badgeRef.current,  { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55 }, 0.2)
          .fromTo(h1Ref.current,     { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.85 }, 0.35)
          .fromTo(subRef.current,    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.65 }, 0.6)
          .fromTo(ctaRef.current,    { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, 0.75)
      })
      return () => ctx.revert()
    })
  }, [])

  return (
    <section
      id="hero"
      aria-labelledby="hero-h1"
      className="relative min-h-svh flex items-center overflow-hidden"
      style={{ background: '#000000' }}
    >
      <div
        className="mx-auto w-full px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-32 lg:py-0"
        style={{ maxWidth: '1400px' }}
      >

      {/* Left column */}
      <div className="relative z-10 flex flex-col justify-center max-w-xl">
        <div
          ref={badgeRef}
          className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
          style={{ color: 'var(--color-accent)', opacity: 0 }}
        >
          <span className="block h-px w-10 bg-current opacity-40" />
          Grand Opening · Deerfield Beach, FL
        </div>

        <h1
          ref={h1Ref}
          id="hero-h1"
          className="font-display text-fluid-hero text-white mb-5"
          style={{ fontSize: 'clamp(2.44rem, 4.5vw + 0.75rem, 4.875rem)', lineHeight: 0.93, letterSpacing: '-0.02em', opacity: 0 }}
        >
          Hunters<br />
          <em className="font-display not-italic" style={{ color: 'var(--color-accent)' }}>Jiu-Jitsu</em><br />
          Coming Soon.
        </h1>

        <p
          ref={subRef}
          className="text-fluid-sub max-w-[30rem] mb-8"
          style={{ color: 'rgba(255,255,255,0.70)', lineHeight: 1.8, opacity: 0 }}
        >
          Have you ever trained martial arts before? No matter your answer, your place is here.{' '}
          Our motto is <strong className="text-white font-semibold">"Expert guidance for beginners"</strong>—and
          you can be one of the first to join with a special founding offer.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ opacity: 0 }}>
          <Button size="lg" onClick={onOpenModal}>
            Claim Our Grand Opening Offer →
          </Button>
        </div>

        <p className="mt-4 text-[13px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Founding spots are limited. Price increases after opening day.
        </p>
      </div>

      {/* Right column — decorative card */}
      <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
        <div
          style={{
            width: '340px',
            aspectRatio: '9/16',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
            transform: 'rotate(1.5deg)',
            background: 'linear-gradient(135deg, #1a0a0a 0%, #2d1515 50%, #1a0a0a 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            position: 'relative',
          }}
        >
          {/* Dot pattern */}
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle, rgba(153,27,27,0.25) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* Logo + text */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '20px',
          }}>
            <img
              src="/imagem/logo-02.jpg"
              alt="Hunters Academy"
              style={{ width: 200, height: 'auto', objectFit: 'contain' }}
            />
            <span style={{
              fontSize: '12px', color: 'rgba(255,255,255,0.30)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              Deerfield Beach · FL
            </span>
          </div>
        </div>
      </div>

      </div>
    </section>
  )
}
