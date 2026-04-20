import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ pedidos }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Pedidos</h2>}
        >
            <Head title="Pedidos" />

            <div className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        #
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Fecha solicitud
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Estado
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {pedidos.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                                            No hay pedidos.
                                        </td>
                                    </tr>
                                )}
                                {pedidos.map((p) => (
                                    <tr key={p.id_pedido}>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                            {p.id_pedido}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                            {p.fecha_solicitud_pedido ?? '—'}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                            {p.estado}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm">
                                            <Link
                                                href={`/pedidos/${p.id_pedido}`}
                                                className="text-blue-600 hover:underline"
                                            >
                                                Ver
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
