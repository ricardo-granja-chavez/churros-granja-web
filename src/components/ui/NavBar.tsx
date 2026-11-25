interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
}

interface NavBarProps {
  items: NavItem[]
  activeId: string
  onSelect: (id: string) => void
  className?: string
}

export function NavBar({ items, activeId, onSelect, className = '' }: NavBarProps) {
  return (
    <nav
      aria-label="Navegación principal"
      className={[
        'fixed bottom-0 left-0 right-0 z-50',
        'flex items-center justify-around',
        'bg-surface/90 backdrop-blur-xl',
        'border-t border-outline-variant',
        'shadow-nav px-space-md py-space-sm',
        'md:static md:border-t-0 md:border-b md:px-margin md:py-0 md:gap-space-sm md:justify-start',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {items.map((item) => {
        const isActive = item.id === activeId

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            aria-current={isActive ? 'page' : undefined}
            aria-label={item.label}
            className={[
              'flex flex-col items-center gap-space-xs rounded-full',
              'font-body text-label-sm transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-container focus-visible:ring-offset-2',
              // Mobile: icono + label apilados, sin fondo
              'px-3 py-2 md:flex-row md:gap-space-xs md:px-4 md:py-2',
              isActive
                ? 'bg-primary-container text-on-primary'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span className="h-5 w-5 shrink-0">{item.icon}</span>
            <span className={isActive ? '' : 'md:inline hidden'}>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
