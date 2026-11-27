import type { EventItem, EventMonth } from '../types/events'

export const featuredEvent: EventItem = {
  id: 'taller-elaboracion-25nov',
  dateLabel: '25 NOV',
  dateNumber: '25',
  dateSub: 'Sábado Matinal',
  status: 'confirmado',
  category: 'Taller Máster de 3 Horas',
  title: 'Taller de Elaboración Tradicional de Churros y Porras',
  description:
    'Aprende el secreto de la masa escaldada, el punto del agua, fritura en caldereta de cobre y técnicas de espiral. Incluye mandil artesano y cata privada de 4 cacaos de origen.',
  time: '10:00 – 13:00 h',
  extra: 'Material y cata incluida',
  pricePerPerson: '45 € / persona',
  ctaPrimary: 'Reservar Plaza',
  ctaNote: 'Último turno disponible',
  urgencyBadge: 'Solo 2 Plazas',
  featured: true,
}

export const eventMonths: EventMonth[] = [
  {
    label: 'Noviembre 2024',
    count: 2,
    events: [
      {
        id: 'mercado-otono-15nov',
        dateLabel: '15 - 18 NOV',
        dateNumber: '15-18',
        dateSub: 'Jueves a Domingo',
        status: 'en-curso',
        category: 'Food Truck Móvil',
        title: 'Mercado de Otoño & Food Truck Tour',
        description:
          'Churros recién hechos y porras gigantes en directo. Degustación al aire libre con chocolate caliente servido en vaso térmico.',
        location: 'Paseo de Carruajes, El Retiro',
        time: '11:00 – 21:30 h',
        extra: 'Acceso libre',
        ctaPrimary: 'Ver Ubicación en Mapa',
        ctaSecondary: '+ Añadir a Calendario',
      },
    ],
  },
  {
    label: 'Diciembre 2024',
    count: 2,
    events: [
      {
        id: 'churros-turron-01dic',
        dateLabel: '01 - 15 DIC',
        dateNumber: '01-15',
        dateSub: 'Quincena Navideña',
        status: 'confirmado',
        category: 'Edición Limitada',
        title: 'Lanzamiento: Churros Rellenos de Turrón de Jijona',
        description:
          'Receta artesanal con almendra marcona tostada y canela pura. Catas de cortesía cada viernes por la tarde en el obrador central.',
        location: 'Todas las Sedes y Obradores',
        time: 'Todo el día',
        extra: 'Bandeja 6 uds: 7,50 €',
        ctaPrimary: 'Reservar Caja Degustación',
        ctaNote: 'Apto para envíos locales',
      },
      {
        id: 'maridaje-secreto-20dic',
        dateLabel: '20 DIC',
        dateNumber: '20',
        dateSub: 'Viernes Noche',
        status: 'agotado',
        category: 'Cata Nocturna',
        title: 'Maridaje Secreto: 5 Chocolates & Vinos Dulces de Barrica',
        description:
          'Cata privada guiada por nuestro maestro chocolatero con selección de chocolates especiados y caldos de reserva andaluces.',
        location: 'Cava Subterránea del Obrador',
        time: '20:30 – 22:30 h',
        ctaPrimary: 'Lista de Espera Llena',
        ctaNote: 'Próxima edición en febrero',
      },
    ],
  },
  {
    label: 'Enero 2025',
    count: 2,
    events: [
      {
        id: 'nochevieja-01ene',
        dateLabel: '01 ENE',
        dateNumber: '01',
        dateSub: 'Madrugada Festiva',
        status: 'confirmado',
        category: 'Tradición Centenaria',
        title: 'Nochevieja & Año Nuevo: Servicio Ininterrumpido',
        description:
          'Tres líneas de fritura continua, servicio rápido en barra y punto exprés de recogida para empezar el año con porras calientes y chocolate.',
        time: '04:30 a 14:00 h sin interrupción',
        location: 'Obrador Principal',
        ctaPrimary: 'Pre-comprar Ticket VIP',
        ctaNote: 'Recogida sin colas',
      },
      {
        id: 'cabalgata-reyes-05ene',
        dateLabel: '05 - 06 ENE',
        dateNumber: '05-06',
        dateSub: 'Noche de Reyes',
        status: 'proximamente',
        category: 'Cabalgata de Reyes',
        title: 'Punto Móvil en la Gran Cabalgata de Reyes',
        description:
          'La caravana se estaciona junto al recorrido oficial repartiendo mini buñuelos y cartuchos de churros de lazo con chocolate blanco caliente.',
        location: 'Plaza de San Juan',
        time: '16:30 – 22:00 h',
        ctaPrimary: 'Avisarme al Abrir Plazas',
        ctaNote: 'Apertura reservas: 28 Dic',
      },
    ],
  },
]
