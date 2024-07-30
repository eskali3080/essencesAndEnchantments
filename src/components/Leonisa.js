
export default function Leonisa() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-[325px] grid max-w-full grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-y-10 lg:px-0">
        <div className="lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-none lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight text-primary-color sm:text-4xl">Catalogo Campaña 18 2024</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Te invitamos a explorar nuestro exclusivo catálogo de la Campaña 18 de Leonisa.Diseños innovadores y la calidad que caracteriza a nuestra marca. No te pierdas las ofertas especiales y las novedades que hemos preparado para ti. ¡Sumérgete en la moda y el confort que Leonisa tiene para ofrecerte!
              <br></br>
              <br></br>
                ¿Te gustó algo? Entonces ¡contáctanos!
              </p>
              <a href="/contact">
                <button
                  type="submit"
                  className="flex-none rounded-md mt-4 bg-primary-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Contacto
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 lg:row-start-1 lg:overflow-hidden">
          <iframe
            src="./catalogo.pdf" // Reemplaza URL_DEL_PDF con el enlace de tu PDF
            className="w-full h-[700px] border-none"
            title="Catalogo Campaña 18 2024"
          />
        </div>
      </div>
    </div>
  );
}
