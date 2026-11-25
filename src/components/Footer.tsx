import logoImg from '../assets/images/logo-103806.png'
import instagramIcon from '../assets/icons/icon-instagram.svg'
import facebookIcon from '../assets/icons/icon-facebook.svg'

const socialLinks = [
  { label: 'Instagram', icon: instagramIcon, iconSize: 'w-[15px] h-[14px]', href: 'https://instagram.com' },
  { label: 'Facebook', icon: facebookIcon, iconSize: 'w-[14px] h-[15px]', href: 'https://facebook.com' },
]

const legalLinks = [
  { label: 'Aviso Legal', href: '#aviso-legal' },
  { label: 'Política de Privacidad', href: '#privacidad' },
]

export function Footer() {
  return (
    <footer className="bg-primary-container py-10">
      <div className="max-w-[1184px] mx-auto flex flex-col gap-6">

        {/* Main row: logo + social */}
        <div className="flex items-center justify-between">
          <img
            src={logoImg}
            alt="Churros Granja"
            className="h-[62px] w-auto"
          />

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full px-4 py-2 hover:brightness-125 transition-all"
                style={{ border: '1px solid rgba(233,189,167,0.3)' }}
              >
                <img
                  src={social.icon}
                  alt=""
                  aria-hidden="true"
                  className={social.iconSize}
                  style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(20%) saturate(400%) hue-rotate(340deg) brightness(110%)' }}
                />
                <span
                  className="font-body font-semibold text-label-md"
                  style={{ color: '#FFDBCA', letterSpacing: '0.02em' }}
                >
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: '1px solid rgba(61,35,20,0.8)' }}
        >
          <span
            className="font-body font-bold text-label-sm uppercase tracking-[0.04em]"
            style={{ color: 'rgba(233,189,167,0.7)' }}
          >
            © 2025 Churros Granja. Todos los derechos reservados.
          </span>

          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body font-bold text-label-sm uppercase tracking-[0.04em] hover:underline transition-all"
                style={{ color: 'rgba(233,189,167,0.7)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
