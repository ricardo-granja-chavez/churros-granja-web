import type { ButtonHTMLAttributes, ReactNode } from 'react'

type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost'
type IconButtonSize = 'sm' | 'md' | 'lg'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant
  size?: IconButtonSize
  label: string  // aria-label requerido para accesibilidad
  children: ReactNode
}

const variantClasses: Record<IconButtonVariant, string> = {
  primary:   'bg-primary-container text-on-primary',
  secondary: 'bg-secondary-container text-on-secondary-container',
  tertiary:  'bg-tertiary-container text-on-tertiary-container',
  ghost:     'bg-transparent text-on-surface hover:bg-surface-container-high',
}

const sizeClasses: Record<IconButtonSize, string> = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
}

export function IconButton({
  variant = 'primary',
  size = 'md',
  label,
  className = '',
  disabled,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={[
        'inline-flex items-center justify-center rounded-full',
        'transition-all duration-200 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-container focus-visible:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        disabled
          ? 'opacity-50 cursor-not-allowed pointer-events-none'
          : 'hover:brightness-110 active:scale-95',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
