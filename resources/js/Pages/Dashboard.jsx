import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-[var(--ciete-slate)]">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="ciete-panel mx-auto max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Portal interno
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--ciete-slate)]">
                    Bienvenido, {user.name}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                    Ya tienes acceso al sistema de gestion de proyectos de Ciete
                    Ingenieros.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={route('profile.edit')} className="ciete-btn-secondary">
                        Mi perfil
                    </Link>
                    {user.role === 'admin' && (
                        <Link href={route('admin.dashboard')} className="ciete-btn-primary">
                            Panel de Administracion
                        </Link>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
