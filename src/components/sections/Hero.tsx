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
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.3,
          filter: 'grayscale(100%)',
        }}
      >
        <source src="/video/video 1.MOV" type="video/mp4" />
      </video>

      <div
        className="hero-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          zIndex: 1,
        }}
      />

      <div
        className="hero-content w-full px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center text-center"
        style={{ position: 'relative', zIndex: 2, minHeight: '100dvh' }}
      >
        <div
          ref={badgeRef}
          className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
          style={{ color: 'white', opacity: 0 }}
        >
          <span className="block h-px w-10 bg-current opacity-40" />
          Grand Opening · Deerfield Beach, FL
          <span className="block h-px w-10 bg-current opacity-40" />
        </div>

        <h1
          ref={h1Ref}
          id="hero-h1"
          className="font-display text-white mb-5 w-full"
          style={{ fontSize: 'clamp(32px, 9vw, 130px)', fontWeight: 700, lineHeight: 0.93, letterSpacing: '-0.02em', opacity: 0 }}
        >
          <span style={{ display: 'block' }}>
            <span style={{ color: 'white' }}>Hunters </span><em className="font-display not-italic" style={{ color: 'var(--color-accent)' }}>Jiu-Jitsu</em>
          </span>
          <span style={{ display: 'block', color: 'white' }}>Coming Soon.</span>
        </h1>

        <p
          ref={subRef}
          style={{ color: 'rgba(255,255,255,0.70)', lineHeight: 1.8, opacity: 0, maxWidth: '600px', margin: '0 auto 2rem', fontSize: '16px' }}
        >
          Have you ever trained martial arts before? No matter your answer, your place is here.{' '}
          Our motto is <strong className="text-white font-semibold">"Expert guidance for beginners"</strong>—and
          you can be one of the first to join with a special founding offer.
        </p>

        <div ref={ctaRef} className="flex flex-row items-center justify-center" style={{ gap: '16px', opacity: 0 }}>
          <Button size="lg" onClick={onOpenModal}>
            Claim Our Grand Opening Offer →
          </Button>
        </div>

        <p className="mt-4 text-[13px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Founding spots are limited. Price increases after opening day.
        </p>
      </div>
    </section>
  )
}
