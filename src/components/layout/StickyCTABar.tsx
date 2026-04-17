import { useState, useEffect } from 'react'

interface StickyCTABarProps {
  onOpenModal: () => void
}

export function StickyCTABar({ onOpenModal }: StickyCTABarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/96 backdrop-blur-sm border-t px-4 py-3"
      style={{
        borderColor: 'var(--color-border)',
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
      }}
    >
      <button
        onClick={onOpenModal}
        className="w-full min-h-[52px] rounded-full text-white text-[13px] font-semibold uppercase tracking-wider cursor-pointer transition-all duration-200 active:scale-[0.98]"
        style={{ backgroundColor: 'var(--color-accent)' }}
      >
        Reserve Your Spot — 17 Left →
      </button>
    </div>
  )
}
