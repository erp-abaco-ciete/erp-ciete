import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ pedido }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pedido #{pedido.id_pedido}
                </h2>
            }
        >
            <Head title={`Pedido #${pedido.id_pedido}`} />

            <div className="py-8">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <dl className="grid grid-cols-2 gap-4">
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Número</dt>
                                <dd className="mt-1 text-sm text-gray-900">#{pedido.id_pedido}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Estado</dt>
                                <dd className="mt-1 text-sm text-gray-900">{pedido.estado}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Fecha solicitud pedido</dt>
                                <dd className="mt-1 text-sm text-gray-900">{pedido.fecha_solicitud_pedido ?? '—'}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Fecha solicitud autofactura</dt>
                                <dd className="mt-1 text-sm text-gray-900">{pedido.fecha_solicitud_autofactura ?? '—'}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Fecha recepción pedido</dt>
                                <dd className="mt-1 text-sm text-gray-900">{pedido.fecha_recepcion_pedido ?? '—'}</dd>
                            </div>
                            {pedido.presupuesto && (
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Presupuesto de origen</dt>
                                    <dd className="mt-1 text-sm">
                                        <Link
                                            href={`/presupuestos/${pedido.presupuesto.id_presupuesto}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Presupuesto #{pedido.presupuesto.id_presupuesto}
                                        </Link>
                                    </dd>
                                </div>
                            )}
                        </dl>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                        <h3 className="mb-4 text-sm font-medium text-gray-700">Líneas del pedido</h3>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        ID Servicio
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Unidades
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {pedido.lineas.length === 0 && (
                                    <tr>
                                        <td colSpan={2} className="px-4 py-4 text-center text-sm text-gray-500">
                                            Sin líneas.
                                        </td>
                                    </tr>
                                )}
                                {pedido.lineas.map((linea) => (
                                    <tr key={linea.id_linea_pedido}>
                                        <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">
                                            {linea.id_servicio ?? '—'}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">
                                            {linea.unidades ?? '—'}
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
