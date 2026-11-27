import { useState, useMemo } from 'react'
import type { Page } from '../App'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FeaturedEventCard } from '../components/events/FeaturedEventCard'
import { EventMonthBlock } from '../components/events/EventMonthBlock'
import { featuredEvent, eventMonths } from '../data/events'
import type { EventStatus } from '../types/events'
import calendarIcon from '../assets/icons/icon-calendar.svg'

type FilterKey = 'todos' | 'en-curso' | 'proximos'

const filterTabs: { key: FilterKey; label: string }[] = [
  { key: 'todos', label: 'Todos los Eventos (7)' },
  { key: 'en-curso', label: 'En Curso (2)' },
  { key: 'proximos', label: 'Próximos Eventos (4)' },
]

const proximosStatuses: EventStatus[] = ['confirmado', 'proximamente', 'agotado']

interface EventosProps {
  onNavigate?: (page: Page) => void
}

export function Eventos({ onNavigate }: EventosProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('todos')

  const filteredMonths = useMemo(() => {
    if (activeFilter === 'todos') return eventMonths

    return eventMonths
      .map((month) => ({
        ...month,
        events: month.events.filter((e) =>
          activeFilter === 'en-curso'
            ? e.status === 'en-curso'
            : proximosStatuses.includes(e.status)
        ),
      }))
      .filter((month) => month.events.length > 0)
  }, [activeFilter])

  const showFeatured =
    activeFilter === 'todos' ||
    (activeFilter === 'proximos' && proximosStatuses.includes(featuredEvent.status)) ||
    (activeFilter === 'en-curso' && featuredEvent.status === 'en-curso')

  return (
    <div className="bg-surface min-h-screen">
      <Header activePage="eventos" onNavigate={onNavigate} />

      <main>
        {/* ── Sección 1: Hero header ── */}
        <section className="px-12 py-10" style={{ paddingTop: '112px' }}>
          <div className="max-w-[1280px] mx-auto flex flex-col gap-4">

            {/* Título y subtítulo */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1
                  className="font-headline font-medium text-primary"
                  style={{ fontSize: '56px', lineHeight: '60.48px', letterSpacing: '-0.025em' }}
                >
                  Cartelera de Eventos, Pop-Ups &{'\n'}Festivales
                </h1>
                <div className="pt-2" style={{ maxWidth: '672px' }}>
                  <p className="font-body text-body-lg text-on-surface-variant">
                    Descubre dónde encontrarnos, ediciones limitadas de churros y experiencias
                    gastronómicas en directo. Masa crujiente recién frita dondequiera que esté la
                    fiesta.
                  </p>
                </div>
              </div>

              {/* Filtros */}
              <div className="flex items-center gap-1 pt-4 overflow-x-auto pb-1">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveFilter(tab.key)}
                    className={`
                      flex-shrink-0 rounded-full px-4 py-2 font-body font-semibold text-label-lg transition-colors
                      ${activeFilter === tab.key
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Sección 2: Timeline de eventos ── */}
        <section className="bg-surface-container-low px-12 py-10">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-10">

            {/* Cabecera de sección */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img src={calendarIcon} alt="" className="w-[13.5px] h-[15px]" aria-hidden="true" />
                <span className="font-body font-semibold text-[12px] leading-4 tracking-[0.05em] uppercase text-secondary">
                  PROGRAMACIÓN OTOÑO - INVIERNO
                </span>
              </div>
              <h2
                className="font-headline font-medium text-primary"
                style={{ fontSize: '40px', lineHeight: '48px', letterSpacing: '-0.015em' }}
              >
                {activeFilter === 'en-curso' && 'Eventos en Curso'}
                {activeFilter === 'proximos' && 'Próximos Eventos'}
                {activeFilter === 'todos' && 'Todos los Eventos'}
              </h2>
            </div>

            {/* Lista de eventos */}
            <div className="flex flex-col gap-6">
              {showFeatured && <FeaturedEventCard event={featuredEvent} />}

              {filteredMonths.map((month) => (
                <EventMonthBlock key={month.label} month={month} />
              ))}

              {!showFeatured && filteredMonths.length === 0 && (
                <p className="font-body text-body-sm text-on-surface-variant py-8 text-center">
                  No hay eventos en esta categoría.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
