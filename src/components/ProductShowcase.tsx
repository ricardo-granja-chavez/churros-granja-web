import cartIcon from '../assets/icons/icon-cart.svg'
import arrowRightIcon from '../assets/icons/icon-arrow-right.svg'
import churrosLazoImg from '../assets/images/product-churros-lazo-755b5e.png'
import porrasMadrilenasImg from '../assets/images/product-porras-madrilenas-7e4461.png'
import chocolateTazaImg from '../assets/images/product-chocolate-taza-755b5e.png'
import churrosRellenosImg from '../assets/images/product-churros-rellenos-755b5e.png'

interface Product {
  id: string
  name: string
  price: string
  description: string
  image: string
  imageAlt: string
}

const products: Product[] = [
  {
    id: 'churros-lazo',
    name: 'Churros de Lazo',
    price: '3,20€',
    description:
      'La ración clásica de 6 unidades, recién prensados y escurridos en aceite de oliva suave.',
    image: churrosLazoImg,
    imageAlt: 'Churros de lazo recién fritos',
  },
  {
    id: 'porras-madrilenas',
    name: 'Porras Madrileñas',
    price: '3,80€',
    description:
      'Ración de 4 porras esponjosas, amasadas con masa madre y mayor reposo para un alveolado perfecto.',
    image: porrasMadrilenasImg,
    imageAlt: 'Porras madrileñas esponjosas',
  },
  {
    id: 'chocolate-taza',
    name: 'Chocolate a la Taza',
    price: '3,60€',
    description:
      'Espeso, aromático, 72% cacao criollo. El espesor justo que abraza el churro sin gotear.',
    image: chocolateTazaImg,
    imageAlt: 'Taza de chocolate espeso artesanal',
  },
  {
    id: 'churros-rellenos',
    name: 'Churros Rellenos',
    price: '4,10€',
    description:
      'Rellenos al momento de dulce de leche o crema pastelera a la vainilla de Madagascar.',
    image: churrosRellenosImg,
    imageAlt: 'Churros rellenos de dulce de leche',
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col bg-white rounded-2xl shadow-card overflow-hidden">
      {/* Image */}
      <div className="flex flex-col justify-center items-stretch bg-surface-container rounded-xl mx-0 overflow-hidden" style={{ height: '184.5px' }}>
        <img
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-1">
        {/* Name + price row */}
        <div className="flex items-center justify-between pt-1">
          <h3 className="font-headline font-semibold text-headline-sm text-primary">
            {product.name}
          </h3>
          <span className="font-body font-bold text-label-lg text-secondary">
            {product.price}
          </span>
        </div>

        {/* Description */}
        <p className="font-body text-body-sm text-on-surface-variant leading-5">
          {product.description}
        </p>

        {/* Add to order button */}
        <div className="pt-4">
          <button
            className="w-full flex items-center justify-center gap-[6px] py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-colors"
            aria-label={`Añadir ${product.name} a la orden`}
          >
            <img src={cartIcon} alt="" aria-hidden="true" className="w-[9.33px] h-[9.33px]" />
            <span className="font-body font-bold text-label-sm text-primary uppercase tracking-[0.04em]">
              Añadir a la Orden
            </span>
          </button>
        </div>
      </div>
    </article>
  )
}

export function ProductShowcase() {
  return (
    <section className="bg-surface-container-low py-10">
      <div className="max-w-[1280px] mx-auto px-12 flex flex-col gap-6">

        {/* Section header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[2.5px] pt-[5.5px]">
            <span className="font-body font-semibold text-label-md text-secondary uppercase tracking-[0.1em]">
              Nuestra Esencia
            </span>
            <h2
              className="font-headline font-medium text-primary"
              style={{ fontSize: '40px', lineHeight: '48px', letterSpacing: '-0.015em' }}
            >
              Especialidades del Obrador
            </h2>
          </div>

          <a
            href="#carta"
            className="flex items-center gap-1 font-body font-semibold text-label-lg text-secondary hover:underline transition-all"
          >
            Ver Carta Completa
            <span className="w-3 h-3 flex items-center justify-center">
              <img src={arrowRightIcon} alt="" aria-hidden="true" className="w-3 h-3" style={{ filter: 'brightness(0) saturate(100%) invert(32%) sepia(96%) saturate(500%) hue-rotate(15deg) brightness(85%) contrast(101%)' }} />
            </span>
          </a>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  )
}
