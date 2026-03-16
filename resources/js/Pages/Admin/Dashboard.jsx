import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AdminDashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-[var(--ciete-slate)]">
                    Panel de Administracion
                </h2>
            }
        >
            <Head title="Panel admin" />

            <div className="ciete-panel mx-auto max-w-3xl">
                <p className="text-lg font-semibold text-[var(--ciete-slate)]">
                    Panel de Administracion
                </p>
                <p className="mt-2 text-sm text-slate-600">
                    Zona reservada para administradores.
                </p>
            </div>
        </AuthenticatedLayout>
    );
}
