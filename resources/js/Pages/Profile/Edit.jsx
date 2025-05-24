import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-bold text-2xl text-base-content">Perfil</h2>}
        >
            <Head title="Perfil" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    {/* Información del perfil */}
                        <div className="bg-base-100 shadow-xl rounded-box p-6">
                                <h3 className="font-semibold text-lg text-base-content mb-4">
                                    Información del perfil
                                </h3>
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-5xl"
                                />
                        </div>
                    

                    {/* Actualizar contraseña */}
                    <div className="bg-base-100 shadow-xl rounded-box p-6">
                        <h3 className="font-semibold text-lg text-base-content mb-4">
                            Cambiar contraseña
                        </h3>
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {/* Eliminar cuenta */}
                    <div className="bg-base-200 shadow-xl rounded-box p-6 border border-error">
                        <h3 className="font-semibold text-lg text-error mb-4">
                            Eliminar cuenta
                        </h3>
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
