import { useEffect } from 'react'

export function useScrollDepth() {
  useEffect(() => {
    const milestones = [25, 50, 75, 90]
    const fired = new Set<number>()

    const handler = () => {
      const pct = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      )
      milestones.forEach(m => {
        if (pct >= m && !fired.has(m)) {
          fired.add(m)
          ;(window as any).gtag?.('event', 'scroll_depth', { depth: m })
          ;(window as any).fbq?.('trackCustom', 'ScrollDepth', { depth: m })
        }
      })
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
}
