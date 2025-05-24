import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="relative flex w-60 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      {/* Imagen del producto */}
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
        <img
          src={`http://127.0.0.1:8000/storage/${product.image}`} // Asegúrate que las imágenes estén en public/storage
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h5 className="mb-2 block text-xl font-semibold leading-snug text-blue-gray-900">
          {product.name}
        </h5>
        <p className="text-base font-light leading-relaxed text-gray-700">
          {product.description}
        </p>
        <p className="mt-2 text-lg font-bold text-green-600">${product.price}</p>
      </div>

      {/* Botón (puedes enlazar a más detalles si deseas) */}
      <div className="p-6 pt-0">
        <button
          type="button"
          className="rounded-lg bg-blue-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Card;
