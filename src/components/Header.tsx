import logoImg from '../assets/images/logo-103806.png'
import arrowRightIcon from '../assets/icons/icon-arrow-right.svg'
import menuIcon from '../assets/icons/icon-menu.svg'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-[24px] shadow-nav">
      <div className="max-w-[1280px] mx-auto px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <img
          src={logoImg}
          alt="Churros Granja"
          className="h-[55px] w-auto"
        />

        {/* Nav */}
        <nav className="flex items-center">
          <a
            href="#inicio"
            className="font-body font-semibold text-label-lg text-white bg-primary-container rounded-full px-4 py-2 hover:brightness-110 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#eventos"
            className="font-body font-semibold text-label-lg text-on-surface-variant rounded-full px-4 py-2 hover:bg-surface-container-low transition-colors"
          >
            Eventos
          </a>
          <a
            href="#contacto"
            className="font-body font-semibold text-label-lg text-on-surface-variant rounded-full px-4 py-2 hover:bg-surface-container-low transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#reservar"
            className="flex items-center gap-2 font-body font-semibold text-label-lg text-on-secondary-container bg-secondary-container rounded-full px-4 py-[10px] shadow-[0px_2px_10px_0px_rgba(61,35,20,0.08)] hover:brightness-95 transition-all"
          >
            Reservar para Eventos
          </a>
          {/* Menu icon button */}
          <button
            aria-label="Menú"
            className="flex items-center justify-center w-8 h-8 bg-primary rounded-full"
          >
            <img src={menuIcon} alt="" className="w-3 h-3" />
          </button>
        </div>

        {/* Arrow right icon – oculto visualmente, solo semántico */}
        <img src={arrowRightIcon} alt="" className="hidden" aria-hidden="true" />
      </div>
    </header>
  )
}
