import type { EventItem } from '../../types/events'
import ticketIcon from '../../assets/icons/icon-ticket.svg'

interface FeaturedEventCardProps {
  event: EventItem
}

export function FeaturedEventCard({ event }: FeaturedEventCardProps) {
  return (
    <article
      className="grid gap-6 rounded-md bg-white shadow-card border border-[rgba(212,195,188,0.3)] p-6"
      style={{
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        gridTemplateRows: '148px',
      }}
    >
      {/* Fecha — span 2 */}
      <div
        className="flex flex-col items-center justify-center gap-0.5 rounded bg-surface-container p-4 self-center"
        style={{ gridColumn: 'span 2' }}
      >
        <span className="font-body font-bold text-[11px] leading-[14px] tracking-[0.05em] uppercase text-secondary">
          {event.dateLabel}
        </span>
        <div className="flex flex-col items-center py-1">
          <span className="font-headline font-bold text-[44px] leading-[55px] text-primary">
            {event.dateNumber}
          </span>
        </div>
        <span className="font-body font-semibold text-[12px] leading-4 tracking-[0.02em] text-on-surface-variant text-center">
          {event.dateSub}
        </span>
      </div>

      {/* Contenido — span 10 */}
      <div
        className="flex flex-col gap-1 self-center"
        style={{ gridColumn: 'span 10' }}
      >
        {/* Tipo de evento */}
        <div className="flex items-center gap-1">
          <img src={ticketIcon} alt="" className="w-[16px] h-[13px]" aria-hidden="true" />
          <span className="font-body font-semibold text-[11px] leading-[14px] tracking-[0.04em] text-on-surface-variant">
            {event.category}
          </span>
        </div>

        {/* Título */}
        <h3 className="font-headline font-medium text-headline-md text-primary">
          {event.title}
        </h3>

        {/* Descripción */}
        <p className="font-body text-body-sm text-on-surface-variant">
          {event.description}
        </p>
      </div>
    </article>
  )
}
