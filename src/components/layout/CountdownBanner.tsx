import { useState, useEffect, useRef } from 'react'

const SPOTS_LEFT  = 17
const SPOTS_TOTAL = 30
const TARGET_DATE = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  }
}

function pad(n: number) { return String(n).padStart(2, '0') }

function TimeCard({ value, label, pulse }: { value: string; label: string; pulse?: boolean }) {
  const prevRef = useRef(value)
  const flip    = prevRef.current !== value

  useEffect(() => { prevRef.current = value }, [value])

  return (
    <div className="countdown-unit" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div
        className={flip ? 'countdown-flip' : ''}
        style={{
          position: 'relative',
          background: pulse
            ? 'rgba(127,29,29,0.60)'
            : 'rgba(127,29,29,0.45)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: pulse
            ? '0 0 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)'
            : '0 2px 10px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.10)',
        }}
      >
        {/* Inner divider line */}
        <div style={{
          position: 'absolute',
          inset: '0',
          borderRadius: '14px',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}>
          <div style={{
            position: 'absolute',
            left: 0, right: 0,
            top: '50%',
            height: '1px',
            background: 'rgba(0,0,0,0.25)',
          }} />
        </div>

        <span
          className="font-display tabular-nums countdown-value"
          style={{
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {value}
        </span>
      </div>

      <span style={{
        fontWeight: 700,
        letterSpacing: '0.16em',
        color: 'rgba(255,255,255,0.60)',
        textTransform: 'uppercase',
        lineHeight: 1,
      }} className="countdown-label">
        {label}
      </span>
    </div>
  )
}

function Separator() {
  return (
    <span
      className="countdown-sep"
      style={{
        color: 'rgba(255,255,255,0.35)',
        fontWeight: 300,
        lineHeight: 1,
        alignSelf: 'flex-start',
      }}
    >
      :
    </span>
  )
}

export function CountdownBanner() {
  const [time, setTime] = useState(getTimeLeft(TARGET_DATE))
  const spotsUsed = SPOTS_TOTAL - SPOTS_LEFT
  const pct       = (spotsUsed / SPOTS_TOTAL) * 100

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(TARGET_DATE)), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      role="alert"
      aria-live="polite"
      aria-label="Countdown to founding member pricing end"
      className="countdown-section"
      style={{
        background: 'var(--color-accent)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '70%',
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Top accent line */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      }} />

      {/* Label */}
      <p style={{
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '0.22em',
        color: 'rgba(255,255,255,0.75)',
        textTransform: 'uppercase',
        marginBottom: '0',
      }} className="countdown-eyebrow">
        ◆&nbsp;&nbsp;Founding Member Pricing Ends In&nbsp;&nbsp;◆
      </p>

      {/* Clock */}
      <div
        style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}
        className="countdown-row"
      >
        <TimeCard value={pad(time.d)} label="Days"    />
        <Separator />
        <TimeCard value={pad(time.h)} label="Hours"   />
        <Separator />
        <TimeCard value={pad(time.m)} label="Minutes" />
        <Separator />
        <TimeCard value={pad(time.s)} label="Seconds" pulse />
      </div>

      {/* Spots bar */}
      <div className="countdown-spots">
        {/* Progress bar */}
        <div style={{
          width: '100%',
          maxWidth: '320px',
          margin: '0 auto',
          background: 'rgba(0,0,0,0.15)',
          borderRadius: '999px',
          overflow: 'hidden',
        }} className="countdown-bar-wrap">
          <div style={{
            width: `${pct}%`,
            height: '4px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.9))',
            borderRadius: '999px',
            transition: 'width 0.6s ease',
          }} />
        </div>

        {/* Spots text */}
        <p style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.80)',
          fontWeight: 500,
          margin: 0,
        }}>
          <span
            style={{
              display: 'inline-block',
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.9)',
              marginRight: '7px',
              verticalAlign: 'middle',
              boxShadow: '0 0 6px rgba(255,255,255,0.5)',
            }}
            className="countdown-dot"
          />
          Only{' '}
          <strong style={{ color: 'white', fontWeight: 700 }}>{SPOTS_LEFT} spots</strong>
          {' '}remaining at this price
        </p>
      </div>
    </section>
  )
}
