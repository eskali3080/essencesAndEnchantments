/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { ShoppingCartIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32 mb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-primary-color sm:text-4xl">Envíanos un mensaje</h2>
            <p className="mt-4 text-lg leading-8 text-gray">
              Queremos saber de ti. Si tienes alguna pregunta o necesitas más información sobre nuestros productos, no dudes en enviarnos un mensaje.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <div
                id="phone-number"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
              >
                +1 (555) 123-4567
              </div>
              <a href="https://api.whatsapp.com/send?phone=1234567890&text=Quiero%20hacer%20un%20pedido%20por%20Leonisa" target="_blank" rel="noopener noreferrer">
                <button
                  type="submit"
                  className="flex-none rounded-md bg-primary-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Enviar Mensaje
                </button>
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <ShoppingCartIcon aria-hidden="true" className="h-6 w-6 text-primary-color" />
              </div>
              <dt className="mt-4 font-semibold text-gray">Pedidos</dt>
              <dd className="mt-2 leading-7 text-gray">
                Contáctanos si deseas hacer un pedido de Natura o Leonisa. Responderemos lo antes posible.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <DevicePhoneMobileIcon aria-hidden="true" className="h-6 w-6 text-primary-color" />
              </div>
              <dt className="mt-4 font-semibold text-gray">Envianos un mensaje</dt>
              <dd className="mt-2 leading-7 text-gray">
                Envía un mensaje a nuestro WhatsApp. Nos gustaría resolver todas tus dudas.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
