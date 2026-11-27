import type { EventMonth } from '../../types/events'
import { EventCard } from './EventCard'
import calendarIcon from '../../assets/icons/icon-calendar.svg'

interface EventMonthBlockProps {
  month: EventMonth
}

export function EventMonthBlock({ month }: EventMonthBlockProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Separador de mes */}
      <div
        className="flex items-center justify-between pb-2"
        style={{ borderBottom: '1px solid rgba(212, 195, 188, 0.4)' }}
      >
        <div className="flex items-center gap-2">
          <img src={calendarIcon} alt="" className="w-5 h-5" aria-hidden="true" />
          <h3 className="font-headline font-medium text-headline-md text-primary">
            {month.label}
          </h3>
        </div>
        <span className="font-body font-bold text-[11px] leading-[14px] tracking-[0.05em] uppercase text-on-surface-variant">
          {month.count} {month.count === 1 ? 'CITA PROGRAMADA' : 'CITAS PROGRAMADAS'}
        </span>
      </div>

      {/* Tarjetas */}
      <div className="flex flex-col gap-4">
        {month.events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}
