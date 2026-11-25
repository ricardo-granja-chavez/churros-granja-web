import { useEffect, useRef, useState } from 'react'
import heroImage from '../assets/images/hero-festival-6c974b.png'
import churrosRellenosImage from '../assets/images/product-churros-rellenos-755b5e.png'
import chocolateTazaImage from '../assets/images/product-chocolate-taza-755b5e.png'
import calendarIcon from '../assets/icons/icon-calendar.svg'
import locationIcon from '../assets/icons/icon-location.svg'

interface HeroSlide {
  id: number
  pill: string
  title: string
  meta: Array<{ icon: 'calendar' | 'location'; text: string }>
  description: string
  image: string
  imageAlt: string
}

const SLIDES: HeroSlide[] = [
  {
    id: 0,
    pill: 'En Curso Esta Semana',
    title: 'Festival Nocturno del\nChurro & Chocolate\nCaliente',
    meta: [
      { icon: 'calendar', text: 'Jueves a Domingo, 18:00 – 23:30' },
      { icon: 'location', text: 'Plaza Mayor & Obrador Central' },
    ],
    description:
      'Disfruta de nuestras recetas de autor, churros crujientes rellenos de pistacho ibérico y dulce de leche artesano, armonizados con cata guiada de chocolates a la taza belga y especiados de origen.',
    image: heroImage,
    imageAlt: 'Festival Nocturno del Churro',
  },
  {
    id: 1,
    pill: 'Especialidad de Temporada',
    title: 'Churros Rellenos\nde Autor,\nRecién Hechos',
    meta: [
      { icon: 'calendar', text: 'Disponibles todos los días' },
      { icon: 'location', text: 'Obrador Central' },
    ],
    description:
      'Nuestros churros rellenos se elaboran cada mañana con masas de fermentación lenta. Elige entre pistacho ibérico, dulce de leche artesano o crema de avellana tostada.',
    image: churrosRellenosImage,
    imageAlt: 'Churros Rellenos de Autor',
  },
  {
    id: 2,
    pill: 'Nuevo en Carta',
    title: 'Chocolate a la Taza\nde Origen\nBelga',
    meta: [
      { icon: 'calendar', text: 'Mañanas y tardes, 08:00 – 20:00' },
      { icon: 'location', text: 'Todas las tiendas' },
    ],
    description:
      'Cacao de origen único, fundido al momento y servido en taza de barro. Disponible en tres intensidades: suave, tradicional y puro 70%. El maridaje perfecto para nuestros churros.',
    image: chocolateTazaImage,
    imageAlt: 'Chocolate a la Taza de Origen Belga',
  },
]

const ICON_FILTER =
  'brightness(0) saturate(100%) invert(63%) sepia(72%) saturate(502%) hue-rotate(345deg) brightness(103%) contrast(101%)'

const AUTOPLAY_INTERVAL = 5000

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, AUTOPLAY_INTERVAL)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDotClickIndex = (index: number) => {
    setCurrent(index)
    startTimer()
  }

  const slide = SLIDES[current]

  return (
    <section className="relative bg-primary-container pt-16 overflow-hidden">
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

      <div
        key={slide.id}
        className="relative max-w-[1280px] mx-auto px-12 py-24 grid grid-cols-12 gap-6 items-center min-h-[412px]"
        style={{
          animation: 'heroFadeIn 0.5s ease-out',
        }}
      >
        {/* ── Content Column (7 cols) ── */}
        <div className="col-span-7 flex flex-col gap-4">

          {/* Status pill */}
          <div>
            <span className="inline-flex items-center gap-2 bg-secondary-container rounded-full px-3 py-1 shadow-card">
              <span className="w-[10px] h-[10px] rounded-full bg-on-secondary-container flex-shrink-0" />
              <span className="font-body font-semibold text-[12px] leading-4 tracking-[0.05em] uppercase text-on-secondary-container">
                {slide.pill}
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-headline font-medium text-primary-fixed whitespace-pre-line"
            style={{
              fontSize: '62px',
              lineHeight: '68px',
              letterSpacing: '-0.025em',
            }}
          >
            {slide.title}
          </h1>

          {/* Details strip */}
          <div className="flex flex-wrap items-center gap-4 py-1">
            {slide.meta.map((item, i) => (
              <>
                {i > 0 && (
                  <span
                    key={`dot-${i}`}
                    className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                    style={{ background: 'rgba(253,161,57,0.6)' }}
                    aria-hidden="true"
                  />
                )}
                <div key={item.text} className="flex items-center gap-2">
                  <img
                    src={item.icon === 'calendar' ? calendarIcon : locationIcon}
                    alt=""
                    aria-hidden="true"
                    className={item.icon === 'calendar' ? 'w-[15px] h-[17px] flex-shrink-0' : 'w-[14px] h-[17px] flex-shrink-0'}
                    style={{ filter: ICON_FILTER }}
                  />
                  <span className="font-body text-base leading-6 text-primary-fixed-dim">
                    {item.text}
                  </span>
                </div>
              </>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-[672px]">
            <p
              className="font-body text-[18px] leading-7"
              style={{ color: 'rgba(233,189,167,0.9)' }}
            >
              {slide.description}
            </p>
          </div>

          {/* Carousel dots */}
          <div className="flex items-center gap-2 pt-2" role="tablist" aria-label="Slides del carrusel">
            {SLIDES.map((s, i) => {
              const isActive = i === current
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => handleDotClickIndex(i)}
                  className="relative flex-shrink-0 rounded-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-container"
                  style={{
                    width: isActive ? '32px' : '8px',
                    height: '8px',
                    background: 'rgba(253,161,57,0.3)',
                    transition: 'width 0.3s ease',
                  }}
                >
                  {isActive && (
                    <span
                      key={current}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background: 'rgba(253,161,57,1)',
                        animation: `capsuleFill ${AUTOPLAY_INTERVAL}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Visual Column (5 cols) ── */}
        <div className="col-span-5 self-stretch flex flex-col">
          <div
            className="relative flex-1 rounded-2xl overflow-hidden bg-primary"
            style={{ boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)' }}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
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

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes capsuleFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  )
}
