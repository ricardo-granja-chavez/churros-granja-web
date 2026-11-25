import { useState } from 'react'
import bellIcon from '../assets/icons/icon-bell.svg'
import emailIcon from '../assets/icons/icon-email.svg'
import checkIcon from '../assets/icons/icon-check.svg'

const perks = [
  'Sin spam',
  'Alertas de Food Truck por zona',
  'Baja en 1 clic',
]

export function NewsletterBanner() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: conectar con backend
    console.log('Newsletter signup:', email)
  }

  return (
    <section className="bg-surface py-10 px-12">
      <div
        className="relative max-w-[1280px] mx-auto rounded-3xl overflow-hidden px-16 py-16"
        style={{ background: '#250F03' }}
      >
        {/* Decorative blurs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-64px',
            right: '0px',
            width: '320px',
            height: '320px',
            background: 'rgba(253,161,57,0.2)',
            borderRadius: '9999px',
            filter: 'blur(64px)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-136px',
            left: '-64px',
            width: '320px',
            height: '320px',
            background: 'rgba(76,25,0,0.3)',
            borderRadius: '9999px',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative flex flex-col gap-4 max-w-[768px]">

          {/* Club label pill */}
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1"
              style={{ background: 'rgba(253,161,57,0.2)' }}
            >
              <img src={bellIcon} alt="" aria-hidden="true" className="w-[13.33px] h-[13.37px]" style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(28%) saturate(400%) hue-rotate(340deg) brightness(105%)' }} />
              <span
                className="font-body font-bold text-[11px] leading-[14px] tracking-[0.05em] uppercase"
                style={{ color: '#FFDCBE' }}
              >
                Club de Amigos del Churro
              </span>
            </span>
          </div>

          {/* Headline */}
          <h2
            className="font-headline font-medium"
            style={{
              fontSize: '44px',
              lineHeight: '50px',
              letterSpacing: '-0.025em',
              color: '#FFDBCA',
            }}
          >
            No te pierdas ningún pop-up, cata secreta
            <br />o edición especial
          </h2>

          {/* Description */}
          <p
            className="font-body text-[18px] leading-7"
            style={{ color: 'rgba(233,189,167,0.9)' }}
          >
            Sé el primero en saber dónde aparca nuestro camión histórico cada semana y consigue un{' '}
            <strong className="font-semibold" style={{ color: '#FFDCBE' }}>
              10% de descuento de bienvenida
            </strong>{' '}
            para tu próxima visita al obrador.
          </p>

          {/* Form */}
          <div className="pt-1" style={{ maxWidth: '576px' }}>
            <form onSubmit={handleSubmit} className="flex gap-1">
              {/* Input wrapper */}
              <div className="relative flex-1">
                {/* Email icon */}
                <div className="absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                  <img
                    src={emailIcon}
                    alt=""
                    aria-hidden="true"
                    className="w-[16.67px] h-[13.33px]"
                    style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(10%) saturate(300%) hue-rotate(340deg) brightness(90%)' }}
                  />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Introduce tu correo electrónico..."
                  className="w-full h-full rounded-full pl-11 pr-4 py-[15px] font-body text-body-sm bg-white focus:outline-none focus:ring-2 focus:ring-secondary-container"
                  style={{
                    color: '#1b1c1a',
                    boxShadow: 'inset 0px 2px 4px 0px rgba(0,0,0,0.05)',
                  }}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="flex-shrink-0 flex items-center justify-center rounded-full px-6 py-[14px] font-body font-semibold text-label-lg text-on-secondary-container bg-secondary-container hover:brightness-95 transition-all"
                style={{
                  boxShadow:
                    '0px 2px 4px -2px rgba(0,0,0,0.1), 0px 4px 6px -1px rgba(0,0,0,0.1)',
                }}
              >
                Avisarme de Eventos
              </button>
            </form>
          </div>

          {/* Perks */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-1">
                <img
                  src={checkIcon}
                  alt=""
                  aria-hidden="true"
                  className="w-[13.33px] h-[13.33px]"
                  style={{ filter: 'brightness(0) saturate(100%) invert(63%) sepia(72%) saturate(502%) hue-rotate(345deg) brightness(103%) contrast(101%)' }}
                />
                <span
                  className="font-body font-bold text-label-sm uppercase tracking-[0.04em]"
                  style={{ color: 'rgba(233,189,167,0.7)' }}
                >
                  {perk}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
