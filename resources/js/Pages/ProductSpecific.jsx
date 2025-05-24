import { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ProductSpecific({ auth }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/products')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setProduct(data[0]);
                }
            })
            .catch(error => console.error("Error al obtener el producto:", error));
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="max-w-4xl mx-auto p-6">
                {product ? (
                    <div className="flex flex-col md:flex-row items-center gap-8 border shadow-lg rounded p-6 bg-base-100">
                        <img 
                            src={`http://localhost:8000/storage/${product.image}`} 
                            alt={product.name} 
                            className="w-full md:w-1/2 h-96 object-cover rounded-lg"
                        />
                        <div className="w-full md:w-1/2">
                            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                            <p className="text-gray-700 mb-4">{product.description}</p>
                            <p className="text-xl text-green-600 font-semibold mb-2">Precio: ${product.price}</p>
                            <p className="text-sm text-gray-500">Stock disponible: {product.stock}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Cargando producto...</p>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
