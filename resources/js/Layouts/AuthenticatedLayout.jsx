import { Link } from '@inertiajs/react';
import { useEffect } from 'react';
import Footer from '@/Components/Footer';

export default function Authenticated({ user, header, children }) {
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);

        // Actualiza el estado del checkbox según el tema
        const checkbox = document.querySelector('.theme-controller');
        if (checkbox) checkbox.checked = theme === 'dark';
    }, []);

    const toggleDarkMode = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="drawer lg:drawer-false bg-base-200">
            <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar superior */}
                <div className="navbar bg-base-300 px-4 shadow-md">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
                            <svg width="45px" height="45px" viewBox="0 0 24 24" fill="white"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.4 7H4.6C4.27 7 4 7.27 4 7.6v8.8c0 .33.27.6.6.6h2.8c.33 0 .6-.27.6-.6V7.6c0-.33-.27-.6-.6-.6z" />
                                <path d="M19.4 7h-2.8c-.33 0-.6.27-.6.6v8.8c0 .33.27.6.6.6h2.8c.33 0 .6-.27.6-.6V7.6c0-.33-.27-.6-.6-.6z" />
                                <path d="M8 12h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            SuplementsStore
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 flex-none hidden lg:flex">
                        {/* Buscador */}
                        <input
                            type="text"
                            placeholder="Buscar productos"
                            className="input input-bordered w-32 md:w-60"
                        />
                        {/* Boton modo oscuro */}
                        <label className="swap swap-rotate ">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller hidden" onChange={toggleDarkMode} value="synthwave" />

                            {/* sun icon */}
                            <svg
                                className="swap-off h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>

                        {/* Carrito */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.3 2.3c-.63.63-.18 1.7.7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zM9 19a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div className="dropdown-content card card-compact bg-base-100 shadow mt-3 w-52 z-10">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 artículos</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">Ver carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Usuario */}
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={`/storage/${user.avatar}`} alt="avatar" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                                    <li><Link href={route('profile.edit')}>Perfil</Link></li>
                                    <li><Link href={route('logout')} method="post" as="button">Cerrar sesión</Link></li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Link href={route('login')} className="btn btn-outline btn-sm">Iniciar sesión</Link>
                                <Link href={route('register')} className="btn btn-primary btn-sm">Registrarse</Link>
                            </>
                        )}
                    </div>
                </div>

                {/* Header y contenido */}
                {header && (
                    <header className="bg-base-100 shadow-md">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {children}
                </main>
                <Footer />
            </div>

            {/* Sidebar para móviles */}
            <div className="drawer-side lg:hidden z-40">
                <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content space-y-2">
                    <li><input type="text" placeholder="Buscar..." className="input input-bordered w-full" /></li>
                    <li><button onClick={toggleDarkMode} className="btn btn-outline">Modo oscuro</button></li>
                    <li><Link href="#" className="btn btn-outline">Ver carrito (8)</Link></li>
                    {user ? (
                        <>
                            <li><Link href={route('profile.edit')}>Perfil</Link></li>
                            <li><Link href={route('logout')} method="post" as="button">Cerrar sesión</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link href={route('login')}>Iniciar sesión</Link></li>
                            <li><Link href={route('register')}>Registrarse</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}
