import heroImage from '../assets/images/hero-festival-6c974b.png'
import calendarIcon from '../assets/icons/icon-calendar.svg'
import locationIcon from '../assets/icons/icon-location.svg'

export function HeroSection() {
  return (
    <section className="bg-primary-container pt-16">
      {/* Atmospheric radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 75% 35%, rgba(253,161,57,1) 0%, rgba(253,161,57,0) 60%)',
          opacity: 0.25,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1280px] mx-auto px-12 py-24 grid grid-cols-12 gap-6 items-center min-h-[412px]">

        {/* ── Content Column (7 cols) ── */}
        <div className="col-span-7 flex flex-col gap-4">

          {/* Status pill */}
          <div>
            <span className="inline-flex items-center gap-2 bg-secondary-container rounded-full px-3 py-1 shadow-card">
              <span className="w-[10px] h-[10px] rounded-full bg-on-secondary-container flex-shrink-0" />
              <span className="font-body font-semibold text-[12px] leading-4 tracking-[0.05em] uppercase text-on-secondary-container">
                En Curso Esta Semana
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-headline font-medium text-primary-fixed"
            style={{
              fontSize: '62px',
              lineHeight: '68px',
              letterSpacing: '-0.025em',
            }}
          >
            Festival Nocturno del{'\n'}Churro & Chocolate{'\n'}Caliente
          </h1>

          {/* Details strip */}
          <div className="flex flex-wrap items-center gap-4 py-1">
            <div className="flex items-center gap-2">
              <img src={calendarIcon} alt="" aria-hidden="true" className="w-[15px] h-[17px] flex-shrink-0" style={{ filter: 'brightness(0) saturate(100%) invert(63%) sepia(72%) saturate(502%) hue-rotate(345deg) brightness(103%) contrast(101%)' }} />
              <span className="font-body text-base leading-6 text-primary-fixed-dim">
                Jueves a Domingo, 18:00 – 23:30
              </span>
            </div>

            {/* Dot separator */}
            <span
              className="w-[6px] h-[6px] rounded-full flex-shrink-0"
              style={{ background: 'rgba(253,161,57,0.6)' }}
              aria-hidden="true"
            />

            <div className="flex items-center gap-2">
              <img src={locationIcon} alt="" aria-hidden="true" className="w-[14px] h-[17px] flex-shrink-0" style={{ filter: 'brightness(0) saturate(100%) invert(63%) sepia(72%) saturate(502%) hue-rotate(345deg) brightness(103%) contrast(101%)' }} />
              <span className="font-body text-base leading-6 text-primary-fixed-dim">
                Plaza Mayor & Obrador Central
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-[672px]">
            <p
              className="font-body text-[18px] leading-7"
              style={{ color: 'rgba(233,189,167,0.9)' }}
            >
              Disfruta de nuestras recetas de autor, churros crujientes rellenos de pistacho
              ibérico y dulce de leche artesano, armonizados con cata guiada de chocolates
              a la taza belga y especiados de origen.
            </p>
          </div>
        </div>

        {/* ── Visual Column (5 cols) ── */}
        <div className="col-span-5 self-stretch flex flex-col">
          <div
            className="relative flex-1 rounded-2xl overflow-hidden bg-primary"
            style={{ boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)' }}
          >
            <img
              src={heroImage}
              alt="Festival Nocturno del Churro"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Bottom gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(0deg, rgba(37,15,3,1) 0%, rgba(37,15,3,0) 50%)',
                opacity: 0.6,
              }}
              aria-hidden="true"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
