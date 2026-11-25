type DividerVariant = 'default' | 'primary' | 'secondary'
type DividerOrientation = 'horizontal' | 'vertical'

interface DividerProps {
  variant?: DividerVariant
  orientation?: DividerOrientation
  className?: string
}

const variantClasses: Record<DividerVariant, string> = {
  default:   'bg-outline-variant',
  primary:   'bg-primary-container',
  secondary: 'bg-secondary-container',
}

export function Divider({
  variant = 'default',
  orientation = 'horizontal',
  className = '',
}: DividerProps) {
  const isHorizontal = orientation === 'horizontal'

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={[
        variantClasses[variant],
        isHorizontal ? 'w-full h-px' : 'h-full w-px',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  )
}
