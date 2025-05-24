import { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ProductList({ auth }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error al cargar productos:", error));
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
            <div className='container flex  items-center gap-4'>
                <fieldset className="fieldset">
                    <select defaultValue="Pick a browser" className="select">
                        <option disabled={true}>Seleccionar categoria</option>
                        <option value={2}>Proteina</option>
                        <option value={4}>Pre-Entreno</option>
                        <option value={3}>Creatina</option>
                    </select>
                </fieldset>
                <button className='btn btn-primary'>
                    Filtrar
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <img src={`http://localhost:8000/storage/${product.image}`} alt={product.name} className="w-full h-48 object-cover mb-4" />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        <p className="text-green-600 font-bold">${product.price}</p>
                        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
