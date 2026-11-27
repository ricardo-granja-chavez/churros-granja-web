import type { EventItem } from '../../types/events'
import locationIcon from '../../assets/icons/icon-location.svg'
import clockIcon from '../../assets/icons/icon-clock.svg'

interface EventCardProps {
  event: EventItem
}

/** Fondo de la celda de fecha según el estado */
function dateCellBg(status: EventItem['status']): string {
  if (status === 'agotado') return 'bg-surface-container-high'
  return 'bg-surface-container'
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article
      className={`grid rounded-md bg-white shadow-card p-4 ${event.status === 'agotado' ? 'opacity-90' : ''}`}
      style={{
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        gap: '16px',
      }}
    >
      {/* Fecha — col 1-2, row 1-2 */}
      <div
        className={`flex flex-col items-center justify-center gap-0.5 rounded ${dateCellBg(event.status)} p-2`}
        style={{ gridColumn: '1 / span 2', gridRow: '1' }}
      >
        <span className="font-body font-bold text-[11px] leading-[14px] tracking-[0.05em] uppercase text-secondary">
          {event.dateLabel}
        </span>
        <div className="py-0.5">
          <span className="font-headline font-bold text-[32px] leading-10 text-center text-primary">
            {event.dateNumber}
          </span>
        </div>
        <span className="font-body font-bold text-[11px] leading-[14px] tracking-[0.04em] text-on-surface-variant text-center">
          {event.dateSub}
        </span>
      </div>

      {/* Contenido — col 3-10, row 1 */}
      <div
        className="flex flex-col gap-1 self-center"
        style={{ gridColumn: '3 / span 8', gridRow: '1' }}
      >
        {/* Título */}
        <h4 className="font-headline font-medium text-headline-sm text-primary">
          {event.title}
        </h4>

        {/* Descripción */}
        <p className="font-body text-body-sm text-on-surface-variant line-clamp-2">
          {event.description}
        </p>

        {/* Detalles: ubicación, horario, extra */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-0.5">
          {event.location && (
            <span className="flex items-center gap-1">
              <img src={locationIcon} alt="" className="w-[11px] h-[13px]" aria-hidden="true" />
              <span className="font-body font-bold text-[11px] leading-[14px] tracking-[0.04em] text-on-surface-variant">
                {event.location}
              </span>
            </span>
          )}
          {event.location && event.time && (
            <span className="font-body font-bold text-[11px] text-on-surface-variant">•</span>
          )}
          {event.time && (
            <span className="flex items-center gap-1">
              <img src={clockIcon} alt="" className="w-[13px] h-[13px]" aria-hidden="true" />
              <span className="font-body font-bold text-[11px] leading-[14px] tracking-[0.04em] text-on-surface-variant">
                {event.time}
              </span>
            </span>
          )}
          {event.extra && (
            <>
              <span className="font-body font-bold text-[11px] text-on-surface-variant">•</span>
              <span className="font-body font-medium text-[11px] leading-[14px] tracking-[0.04em] text-primary">
                {event.extra}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Botón ubicación — col 10-12, row 1, arriba derecha */}
      {event.location && (
        <div
          className="flex items-start justify-end self-start"
          style={{ gridColumn: '10 / span 3', gridRow: '1' }}
        >
          <button className="rounded-full bg-primary px-4 py-[6px] font-body font-bold text-label-sm text-on-primary text-center hover:brightness-110 transition-all whitespace-nowrap">
            Ver Ubicación en Mapa
          </button>
        </div>
      )}
    </article>
  )
}
