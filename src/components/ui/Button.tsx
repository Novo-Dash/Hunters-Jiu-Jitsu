import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        size === 'sm' && 'min-h-[44px] px-5 text-[12px]',
        size === 'md' && 'min-h-[52px] px-8 text-[13px]',
        size === 'lg' && 'min-h-[56px] px-10 text-[14px]',
        variant === 'primary' && 'text-white hover:scale-[1.04] active:scale-[0.98]',
        variant === 'outline' && 'border-2 hover:scale-[1.02] active:scale-[0.98]',
        variant === 'ghost' && 'hover:opacity-70',
        className
      )}
      style={
        variant === 'primary'
          ? {
              backgroundColor: 'var(--color-accent)',
              boxShadow: '0 4px 20px rgba(var(--accent-rgb), 0.30)',
            }
          : variant === 'outline'
          ? {
              color: 'var(--color-text)',
              borderColor: 'var(--color-border)',
            }
          : undefined
      }
      onMouseEnter={e => {
        if (variant === 'primary') e.currentTarget.style.boxShadow = '0 8px 32px rgba(var(--accent-rgb), 0.45)'
        if (variant === 'outline') { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)' }
      }}
      onMouseLeave={e => {
        if (variant === 'primary') e.currentTarget.style.boxShadow = '0 4px 20px rgba(var(--accent-rgb), 0.30)'
        if (variant === 'outline') { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text)' }
      }}
      {...props}
    >
      {children}
    </button>
  )
}
