import { cn } from '@/lib/utils'
import type { CSSProperties } from 'react'

interface BadgeProps {
  children: React.ReactNode
  align?: 'left' | 'center'
  className?: string
  style?: CSSProperties
}

export function Badge({ children, align = 'left', className, style }: BadgeProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] mb-3',
        align === 'center' && 'justify-center',
        className
      )}
      style={{ color: 'var(--color-accent)', ...style }}
    >
      <span className="block h-px w-10 bg-current opacity-40" />
      {children}
      <span className="block h-px w-10 bg-current opacity-40" />
    </div>
  )
}
