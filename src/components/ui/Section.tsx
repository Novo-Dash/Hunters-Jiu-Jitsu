import { cn } from '@/lib/utils'
import type { CSSProperties } from 'react'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  style?: CSSProperties
  tight?: boolean
  as?: 'section' | 'div'
}

export function Section({ children, id, className, style, tight, as: Tag = 'section' }: SectionProps) {
  return (
    <Tag id={id} style={style} className={cn('w-full px-6 md:px-10 lg:px-16', tight ? 'py-16' : 'py-24', className)}>
      <div className="mx-auto w-full" style={{ maxWidth: '1400px' }}>{children}</div>
    </Tag>
  )
}
