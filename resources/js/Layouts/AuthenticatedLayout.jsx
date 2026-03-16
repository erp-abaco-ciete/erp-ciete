import PortalNavbar from '@/Components/PortalNavbar';
import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="ciete-shell">
            <img
                src="/images/logo/Ciete-Ingenieros-SA.webp"
                alt=""
                className="ciete-watermark"
            />

            <PortalNavbar user={user} />

            <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-8 sm:py-10">
                {header && <div className="mb-6 border-b border-slate-200 pb-3">{header}</div>}

                {children}

                <div className="mt-8 flex justify-end">
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="text-xs font-medium text-slate-500 transition hover:text-slate-700"
                    >
                        Cerrar sesion
                    </Link>
                </div>
            </main>

            <footer className="ciete-footer">
                proyecto ciete v1.
            </footer>
        </div>
    );
}
