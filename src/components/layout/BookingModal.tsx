import { useEffect, useRef, useState, useCallback } from 'react'
import type { ModalState } from '@/types'
import { useUTMs } from '@/hooks/useUTMs'
import { Badge } from '@/components/ui'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { getUTMs } = useUTMs()
  const [state, setState] = useState<ModalState>('form')
  const [lastSubmit, setLastSubmit] = useState(0)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Focus trap + ESC
  useEffect(() => {
    if (!isOpen) return
    setState('form')
    setTimeout(() => firstInputRef.current?.focus(), 50)
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }, [onClose])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Rate limit
    if (Date.now() - lastSubmit < 5000) return
    setLastSubmit(Date.now())

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    // Honeypot
    if (data.website) return

    setState('loading')

    const payload = {
      first_name: data.first_name,
      last_name:  data.last_name,
      phone:      data.phone,
      email:      data.email,
      source:     'grand-opening-lp',
      tags:       ['founding-member'],
      ...getUTMs(),
    }

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setState(res.ok ? 'success' : 'error')
      // Fire Meta Pixel Lead event
      ;(window as any).fbq?.('track', 'Lead')
    } catch {
      setState('error')
    }
  }, [lastSubmit, getUTMs])

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-md rounded-[20px] p-8 animate-modal-in"
        style={{
          background: 'var(--color-surface)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-70 cursor-pointer"
          style={{ background: 'var(--color-surface-alt)' }}
          aria-label="Close modal"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" width="14" height="14">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* FORM STATE */}
        {state === 'form' && (
          <>
            <Badge className="mb-2">Limited Spots</Badge>
            <h2 id="modal-title" className="font-display text-[2rem] leading-[1] mb-1">
              Reserve Your<br />Founding Spot
            </h2>
            <p className="text-[14px] mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              You'll be contacted within 1 hour. No credit card required.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {/* Honeypot */}
              <input type="text" name="website" tabIndex={-1} aria-hidden="true" className="hidden" />

              <Field label="First Name *" id="first_name" ref={firstInputRef} placeholder="Gabriel" autoComplete="given-name" />
              <Field label="Last Name *"  id="last_name"  placeholder="Costa"   autoComplete="family-name" />
              <Field label="Phone * (we'll call to confirm)" id="phone" type="tel" placeholder="(954) 555-0000" autoComplete="tel" />
              <Field label="Email *" id="email" type="email" placeholder="you@email.com" autoComplete="email" />

              <button
                type="submit"
                className="w-full min-h-[52px] rounded-full text-white text-[13px] font-semibold uppercase tracking-wider cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] mt-1"
                style={{ backgroundColor: 'var(--color-accent)', boxShadow: '0 4px 20px rgba(var(--accent-rgb),0.30)' }}
              >
                Reserve My Spot →
              </button>
              <p className="text-[12px] text-center" style={{ color: 'var(--color-text-muted)' }}>
                By submitting, you agree to be contacted about Hunters Academy's founding member offer.
              </p>
            </form>
          </>
        )}

        {/* LOADING STATE */}
        {state === 'loading' && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <div
              className="w-10 h-10 rounded-full border-[3px] animate-spin"
              style={{ borderColor: 'var(--color-border)', borderTopColor: 'var(--color-accent)' }}
            />
            <p style={{ color: 'var(--color-text-secondary)' }}>Securing your spot...</p>
          </div>
        )}

        {/* SUCCESS STATE */}
        {state === 'success' && (
          <div className="flex flex-col items-center text-center py-6 gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-[1.75rem]">Spot Reserved!</h3>
            <p className="text-[15px]" style={{ color: 'var(--color-text-secondary)' }}>
              Check your email and SMS for confirmation. Our team will reach out within 1 hour with all the details about your founding membership.
            </p>
            <button
              onClick={onClose}
              className="mt-2 min-h-[44px] px-6 rounded-full text-[13px] font-semibold uppercase tracking-wider cursor-pointer border-2 transition-all hover:scale-[1.02]"
              style={{ borderColor: 'var(--color-border)' }}
            >
              Close
            </button>
          </div>
        )}

        {/* ERROR STATE */}
        {state === 'error' && (
          <div className="flex flex-col items-center text-center py-6 gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'var(--color-surface-alt)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" width="24" height="24">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="font-display text-[1.75rem]">Something went wrong</h3>
            <p className="text-[15px]" style={{ color: 'var(--color-text-secondary)' }}>
              Please try again or contact us directly. We want to save your spot.
            </p>
            <button
              onClick={() => setState('form')}
              className="mt-2 min-h-[44px] px-6 rounded-full text-[13px] font-semibold uppercase tracking-wider text-white cursor-pointer"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ——— Field atom ———
import { forwardRef } from 'react'
interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}
const Field = forwardRef<HTMLInputElement, FieldProps>(({ label, id, ...props }, ref) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-[13px] font-semibold" style={{ color: 'var(--color-text-secondary)' }}>
      {label}
    </label>
    <input
      ref={ref}
      id={id}
      name={id}
      required
      className="min-h-[44px] px-4 rounded-[12px] text-[15px] border-[1.5px] outline-none transition-colors duration-200 focus:border-red-700"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-bg)',
        color: 'var(--color-text)',
        fontFamily: 'var(--font-body)',
      }}
      {...props}
    />
  </div>
))
Field.displayName = 'Field'
