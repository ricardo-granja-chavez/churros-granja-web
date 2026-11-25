import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'inverted' | 'outlined'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  // Dorado churro — CTA principal
  primary:
    'bg-secondary-container text-on-secondary-container shadow-card hover:brightness-95',
  // Chocolate oscuro
  secondary:
    'bg-primary-container text-on-primary shadow-card hover:brightness-110',
  // Superficie clara sobre fondo oscuro
  inverted:
    'bg-surface-container-lowest text-on-surface shadow-card hover:bg-surface-container-low',
  // Sin fondo, solo borde
  outlined:
    'bg-transparent text-on-surface border border-outline hover:bg-surface-container-low',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-label-sm',
  md: 'px-6 py-3 text-label-lg',
  lg: 'px-8 py-4 text-body-md font-semibold',
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center gap-space-xs rounded-full font-body',
        'transition-all duration-200 ease-in-out active:scale-95',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-container focus-visible:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:scale-[1.02]',
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
