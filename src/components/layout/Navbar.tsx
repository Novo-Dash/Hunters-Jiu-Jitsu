import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface NavbarProps {
  onOpenModal: () => void
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-[20px] saturate-150 border-b shadow-sm'
          : 'bg-transparent'
      )}
      style={scrolled ? { borderColor: 'var(--color-border)' } : undefined}
    >
      <div
        className="mx-auto w-full px-6 md:px-10 lg:px-16 flex items-center justify-between py-4"
        style={{ maxWidth: '1400px' }}
      >
        <a href="#" aria-label="Hunters Academy — home">
          <img
            src="/imagem/logo-01.png"
            alt="Hunters Academy"
            style={{ width: 80, height: 'auto', objectFit: 'contain' }}
          />
        </a>

        <button
          onClick={onOpenModal}
          className="inline-flex items-center min-h-[44px] px-5 rounded-full text-white text-[13px] font-semibold uppercase tracking-[0.06em] transition-all duration-200 hover:scale-[1.04] active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          style={{
            backgroundColor: 'var(--color-accent)',
            boxShadow: '0 4px 16px rgba(var(--accent-rgb), 0.30)',
          }}
        >
          Reserve Your Spot
        </button>
      </div>
    </header>
  )
}
