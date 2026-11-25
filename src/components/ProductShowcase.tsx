import churrosLazoImg from '../assets/images/product-churros-lazo-755b5e.png'
import porrasMadrilenasImg from '../assets/images/product-porras-madrilenas-7e4461.png'
import chocolateTazaImg from '../assets/images/product-chocolate-taza-755b5e.png'
import churrosRellenosImg from '../assets/images/product-churros-rellenos-755b5e.png'

interface Product {
  id: string
  name: string
  description: string
  image: string
  imageAlt: string
}

const products: Product[] = [
  {
    id: 'churros-lazo',
    name: 'Churros de Lazo',
    description:
      'La ración clásica de 6 unidades, recién prensados y escurridos en aceite de oliva suave.',
    image: churrosLazoImg,
    imageAlt: 'Churros de lazo recién fritos',
  },
  {
    id: 'porras-madrilenas',
    name: 'Porras Madrileñas',
    description:
      'Ración de 4 porras esponjosas, amasadas con masa madre y mayor reposo para un alveolado perfecto.',
    image: porrasMadrilenasImg,
    imageAlt: 'Porras madrileñas esponjosas',
  },
  {
    id: 'chocolate-taza',
    name: 'Chocolate a la Taza',
    description:
      'Espeso, aromático, 72% cacao criollo. El espesor justo que abraza el churro sin gotear.',
    image: chocolateTazaImg,
    imageAlt: 'Taza de chocolate espeso artesanal',
  },
  {
    id: 'churros-rellenos',
    name: 'Churros Rellenos',
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
        {/* Name */}
        <div className="pt-1">
          <h3 className="font-headline font-semibold text-headline-sm text-primary">
            {product.name}
          </h3>
        </div>

        {/* Description */}
        <p className="font-body text-body-sm text-on-surface-variant leading-5">
          {product.description}
        </p>
      </div>
    </article>
  )
}

export function ProductShowcase() {
  return (
    <section className="bg-surface-container-low py-10">
      <div className="max-w-[1280px] mx-auto px-12 flex flex-col gap-6">

        {/* Section header */}
        <div>
          <h2
            className="font-headline font-medium text-primary"
            style={{ fontSize: '40px', lineHeight: '48px', letterSpacing: '-0.015em' }}
          >
            Nuestros productos
          </h2>
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
