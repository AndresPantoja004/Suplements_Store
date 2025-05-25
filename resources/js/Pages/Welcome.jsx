import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function Welcome({ auth }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get('/api/products', {
        })
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
        })
            .catch(error => {
                setError('Error al cargar los productos');
                console.error(error);
        })
            .finally(() => {
                setLoading(false);
        });
    },[]);
    
    return (
        <>  
        <AuthenticatedLayout user={auth.user}>
            <div className='hero bg-base-100 '>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Bienvenido a SuplementsStore</h1>
                        <p className="py-6">
                            Aquí encontrarás los mejores suplementos para tu salud y bienestar.
                        </p>
                        <Link className="btn btn-primary">
                            Ver productos
                        </Link>
                    </div>
                    <img
                        src="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-protein-supplement-jar-mockup-png-image_4683038.png"
                        className="max-w-sm rounded-lg "
                    />
                </div>
            </div>
            <div className='container p-6'>
                <h3 className='text-xl font-bold'>Productos destacados</h3>
                <div className="divider"></div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5  gap-3 ">
                {products.map((product) => (
                        <div key={product.id} className="card bg-base-100 shadow-xl max-w-64">
                        <figure className='bg-gray-200'>
                            <img
                                src={"storage/"+product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="text-lg font-semibold">$ {product.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>  
                ))}

                </div>
                <div className='container mt-16'>
                    <h3 className='text-xl font-bold'>Productos nuevos</h3>
                    <div className='divider'></div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5  gap-3 ">
                        <div className="card bg-base-100 shadow-xl max-w-64">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Producto destacado"
                                    className="w-full h-48 object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Producto destacado</h2>
                                <p className="text-lg font-semibold">$19.99</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Agregar al carrito</button>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
        </>
    );
}
