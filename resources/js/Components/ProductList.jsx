import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/api/products', {
        })
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            setError('Error al cargar los productos');
            console.error(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            {loading && <span className="place-center loading loading-spinner text-secondary"></span>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={`/storage/${product.image}`} alt={product.name} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="text-lg font-semibold">${product.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
