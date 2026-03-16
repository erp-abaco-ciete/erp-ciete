import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function PortalNavbar({ user = null, canLogin = true, canRegister = true }) {
    const navItems = user
        ? [
              { label: 'Dashboard', href: route('dashboard') },
              ...(user.role === 'admin'
                  ? [{ label: 'Panel Admin', href: route('admin.dashboard') }]
                  : []),
          ]
        : [
              ...(canLogin ? [{ label: 'Login', href: route('login') }] : []),
              ...(canRegister ? [{ label: 'Register', href: route('register') }] : []),
          ];

    return (
        <header className="ciete-nav">
            <nav className="mx-auto flex h-12 w-full max-w-6xl items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2.5">
                    <ApplicationLogo className="h-7 w-auto" />
                    <span className="text-sm font-semibold tracking-wide text-[var(--ciete-slate)]">
                        Ciete Ingenieros
                    </span>
                </Link>

                <div className="flex items-center gap-2 text-sm">
                    {navItems.map((item, index) => (
                        <div key={item.label} className="flex items-center gap-2">
                            {index > 0 && <span className="text-slate-400">|</span>}
                            <Link href={item.href} className="ciete-link">
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
}
