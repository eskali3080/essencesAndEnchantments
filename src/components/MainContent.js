import { ShoppingBagIcon, HomeIcon, PercentBadgeIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Compra rápida y sencilla.',
    description:
      'Navega por nuestras categorías y elige los productos que más te gusten. Nuestro sitio está diseñado para hacer tu compra más fácil y eficiente.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Nuevas ofertas.',
    description: 'Descubre promociones y productos nuevos que se ajustan a tus necesidades. Siempre estamos actualizando nuestras ofertas para brindarte lo mejor.',
    icon: PercentBadgeIcon,
  },
  {
    name: 'A tu ritmo.',
    description: 'Disfruta de la comodidad de comprar desde casa, sin presiones y a cualquier hora. Estamos aquí para que encuentres lo que buscas de manera simple y placentera.',
    icon: HomeIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary-color">Compra con facilidad</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Una experiencia de compra mejorada</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Explora nuestra colección de productos de belleza y encuentra los favoritos que realzarán tu rutina de cuidado personal.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-primary-color" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
