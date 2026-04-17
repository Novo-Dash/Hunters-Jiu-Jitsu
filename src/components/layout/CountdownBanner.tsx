import { useState, useEffect } from 'react'

const SPOTS_LEFT = 17
// Set target 14 days from now — replace with real date before launch
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

export function CountdownBanner() {
  const [time, setTime] = useState(getTimeLeft(TARGET_DATE))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(TARGET_DATE)), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      role="alert"
      aria-live="polite"
      className="fixed top-0 left-0 right-0 z-[60] px-4 text-center text-white font-semibold"
      style={{ backgroundColor: 'var(--color-accent)', padding: '12px 0', fontSize: '16px' }}
    >
      <span>Founding Member Pricing ends in </span>
      <span className="font-mono font-bold">
        {time.d}d {pad(time.h)}h {pad(time.m)}m {pad(time.s)}s
      </span>
      <span> — Only {SPOTS_LEFT} spots remaining</span>
    </div>
  )
}
