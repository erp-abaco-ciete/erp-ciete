import PortalNavbar from '@/Components/PortalNavbar';
import { usePage } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    const user = usePage().props.auth?.user;

    return (
        <div className="ciete-shell">
            <img
                src="/images/logo/Ciete-Ingenieros-SA.webp"
                alt=""
                className="ciete-watermark"
            />

            <PortalNavbar user={user} canLogin canRegister />

            <main className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center justify-center px-6 py-10">
                <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                    {children}
                </div>
            </main>

            <footer className="ciete-footer">
                proyecto ciete v1.
            </footer>
        </div>
    );
}
