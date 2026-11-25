import type { ReactNode } from 'react'

type BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'subtle'

interface BadgeProps {
  variant?: BadgeVariant
  label?: string
  icon?: ReactNode
  pulse?: boolean
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  primary:   'bg-primary-container text-on-primary',
  secondary: 'bg-secondary-container text-on-secondary-container',
  tertiary:  'bg-tertiary-container text-on-tertiary-container',
  subtle:    'bg-secondary-container/20 text-on-secondary-container',
}

export function Badge({
  variant = 'secondary',
  label,
  icon,
  pulse = false,
  className = '',
}: BadgeProps) {
  const hasLabel = Boolean(label)
  const hasIcon  = Boolean(icon)

  return (
    <span
      className={[
        'inline-flex items-center gap-space-xs rounded-full',
        'font-body text-label-sm font-semibold',
        // Si solo tiene icono es cuadrado, si tiene label tiene padding horizontal
        hasLabel ? 'px-3 py-1' : 'p-2',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {pulse && (
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-50" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-current" />
        </span>
      )}

      {hasIcon && (
        <span className="inline-flex h-4 w-4 items-center justify-center shrink-0">
          {icon}
        </span>
      )}

      {hasLabel && <span>{label}</span>}
    </span>
  )
}
