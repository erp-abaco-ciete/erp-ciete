import ApplicationLogo from '@/Components/ApplicationLogo';
import PortalNavbar from '@/Components/PortalNavbar';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, canLogin, canRegister }) {
    const isLoggedIn = !!auth.user;
    const isAdmin = auth.user?.role === 'admin';

    return (
        <>
            <Head title="Ciete Ingenieros" />

            <div className="ciete-shell">
                <img
                    src="/images/logo/Ciete-Ingenieros-SA.webp"
                    alt=""
                    className="ciete-watermark"
                />

                <PortalNavbar
                    user={auth.user}
                    canLogin={canLogin}
                    canRegister={canRegister}
                />

                <main className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center justify-center px-6 py-10">
                    <section className="w-full max-w-3xl text-center">
                        <ApplicationLogo className="mx-auto h-20 w-auto" />

                        <h1 className="mt-8 text-3xl font-bold tracking-tight text-[var(--ciete-slate)] sm:text-4xl">
                            Sistema de Gestion de Proyectos
                            <span className="mt-2 block text-2xl font-semibold text-[var(--ciete-red)] sm:text-3xl">
                                Ciete Ingenieros
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-600 sm:text-base">
                            Aplicacion interna para la gestion de empresas, contactos,
                            estaciones de servicio y proyectos.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            {!isLoggedIn && canLogin && (
                                <Link href={route('login')} className="ciete-btn-primary">
                                    Iniciar sesion
                                </Link>
                            )}

                            {!isLoggedIn && canRegister && (
                                <Link href={route('register')} className="ciete-btn-secondary">
                                    Registrarse
                                </Link>
                            )}

                            {isLoggedIn && (
                                <Link href={route('dashboard')} className="ciete-btn-primary">
                                    Ir al Dashboard
                                </Link>
                            )}

                            {isLoggedIn && isAdmin && (
                                <Link
                                    href={route('admin.dashboard')}
                                    className="ciete-btn-secondary"
                                >
                                    Panel de Administracion
                                </Link>
                            )}
                        </div>
                    </section>
                </main>

                <footer className="ciete-footer">
                    proyecto ciete v1.
                </footer>
            </div>
        </>
    );
}
