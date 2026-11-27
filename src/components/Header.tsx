import type { Page } from '../App'
import logoImg from '../assets/images/logo-103806.png'
import menuIcon from '../assets/icons/icon-menu.svg'

interface HeaderProps {
  activePage?: Page
  onNavigate?: (page: Page) => void
}

interface NavItem {
  key: Page
  label: string
}

const navItems: NavItem[] = [
  { key: 'inicio', label: 'Inicio' },
  { key: 'eventos', label: 'Eventos' },
  { key: 'contacto', label: 'Contacto' },
]

export function Header({ activePage = 'inicio', onNavigate }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-[24px] shadow-nav">
      <div className="max-w-[1280px] mx-auto px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <button onClick={() => onNavigate?.('inicio')} className="focus:outline-none">
          <img src={logoImg} alt="Churros Granja" className="h-[55px] w-auto" />
        </button>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) =>
            item.key === activePage ? (
              <button
                key={item.key}
                onClick={() => onNavigate?.(item.key)}
                className="font-body font-semibold text-on-primary bg-primary-container rounded-full px-4 py-2"
                style={{ fontSize: '16px', lineHeight: '24px' }}
                aria-current="page"
              >
                {item.label}
              </button>
            ) : (
              <button
                key={item.key}
                onClick={() => onNavigate?.(item.key)}
                className="font-body font-semibold text-label-lg text-on-surface-variant rounded-full px-4 py-2 hover:bg-surface-container transition-colors"
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate?.('eventos')}
            className="flex items-center gap-2 font-body font-semibold text-label-lg text-on-secondary-container bg-secondary-container rounded-full px-4 py-[10px] shadow-[0px_2px_10px_0px_rgba(61,35,20,0.08)] hover:brightness-95 transition-all"
          >
            Reservar para Eventos
          </button>
          <button
            aria-label="Menú"
            className="flex items-center justify-center w-8 h-8 bg-primary rounded-full"
          >
            <img src={menuIcon} alt="" className="w-3 h-3" />
          </button>
        </div>
      </div>
    </header>
  )
}
