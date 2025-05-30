import { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import axios from 'axios';

export default function CartPage({ auth }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('/api/cart')
            .then(response => {
                console.log(response.data)
                setCartItems(response.data.items);
            })
            .catch(error => {
                console.error('Error al obtener el carrito:', error);
            });
    }, []);

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.total, 0);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="max-w-5xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
                
                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Tu carrito está vacío.</p>
                ) : (
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center border p-4 rounded shadow">
                                <img
                                    src={`/storage/${item.image}`}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded mr-6"
                                />
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">{item.description}</p>
                                    <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-green-600">${item.total.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}

                        <div className="text-right mt-6">
                            <h2 className="text-2xl font-bold">Total: ${getTotalPrice().toFixed(2)}</h2>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}