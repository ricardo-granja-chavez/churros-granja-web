export type EventStatus =
  | 'en-curso'
  | 'confirmado'
  | 'proximamente'
  | 'agotado';

export type EventCategory =
  | 'Food Truck Móvil'
  | 'Edición Limitada'
  | 'Cata Nocturna'
  | 'Tradición Centenaria'
  | 'Cabalgata de Reyes'
  | 'Taller Máster de 3 Horas';

export interface EventItem {
  id: string;
  /** Texto corto para la celda de fecha, ej: "15 - 18 NOV" */
  dateLabel: string;
  /** Número(s) grande para la celda, ej: "15-18" o "25" */
  dateNumber: string;
  /** Día de la semana o descripción breve, ej: "Jueves a Domingo" */
  dateSub: string;
  status: EventStatus;
  category: EventCategory;
  title: string;
  description: string;
  location?: string;
  time?: string;
  extra?: string;
  price?: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  /** Si es true, renderiza la tarjeta grande de CITA DESTACADA */
  featured?: boolean;
  /** Badge de urgencia, ej: "Solo 2 Plazas" */
  urgencyBadge?: string;
  /** Precio por persona visible junto a detalles */
  pricePerPerson?: string;
  /** Texto junto al CTA secundario */
  ctaNote?: string;
}

export interface EventMonth {
  label: string;
  count: number;
  events: EventItem[];
}
