import type { EventStatus } from '../../types/events'
import fireIcon from '../../assets/icons/icon-fire.svg'
import checkIcon from '../../assets/icons/icon-check.svg'
import clockIcon from '../../assets/icons/icon-clock.svg'

interface EventStatusBadgeProps {
  status: EventStatus
}

const statusConfig: Record<
  EventStatus,
  { label: string; bg: string; text: string; icon: string }
> = {
  'en-curso': {
    label: 'En Curso',
    bg: 'bg-[#FFDCBE]',
    text: 'text-[#2D1600]',
    icon: fireIcon,
  },
  confirmado: {
    label: 'Confirmado',
    bg: 'bg-secondary-container',
    text: 'text-on-secondary-container',
    icon: checkIcon,
  },
  proximamente: {
    label: 'Próximamente',
    bg: 'bg-surface-container-high',
    text: 'text-on-surface-variant',
    icon: clockIcon,
  },
  agotado: {
    label: 'Entradas Agotadas',
    bg: 'bg-surface-container-high',
    text: 'text-on-surface-variant',
    icon: clockIcon,
  },
}

export function EventStatusBadge({ status }: EventStatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 ${config.bg}`}
    >
      <img src={config.icon} alt="" className="w-[11px] h-[11px]" aria-hidden="true" />
      <span
        className={`font-body font-bold text-[11px] leading-[16.5px] ${config.text}`}
      >
        {config.label}
      </span>
    </span>
  )
}
