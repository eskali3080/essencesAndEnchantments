import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/?category=colonias', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => setError(error));
  }, []);

  const formatPrice = (price) => {
    // Convertir a número y formatear
    return parseFloat(price).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };


  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href="/contact" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.nombre}
                  src={product.imagen}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.nombre}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${formatPrice(product.precio)}</p>
              <p className= "mt-1 text-lg font-medium text-gray-600">Stock: {product.stock}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
