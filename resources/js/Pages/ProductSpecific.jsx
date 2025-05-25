import { useEffect, useState } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';

export default function ProductSpecific({ auth }) {
    const [product, setProduct] = useState(null);
    const { props } = usePage();
    const { id } = props;

    useEffect(() => {
        if (!id) return;

        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error al obtener el producto:", error);
            });
    }, [id]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="max-w-4xl mx-auto p-6">
                {product ? (
                    <div className="flex flex-col md:flex-row items-center gap-8 border shadow-lg rounded p-6 bg-base-100">
                        <img 
                            src={`/storage/${product.image}`} 
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
