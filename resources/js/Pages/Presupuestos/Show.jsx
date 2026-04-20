import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

const ESTADOS = ['borrador', 'enviado', 'aprobado', 'rechazado'];

export default function Show({ presupuesto }) {
    function cambiarEstado(estado) {
        router.patch(`/presupuestos/${presupuesto.id_presupuesto}/estado`, { estado });
    }

    function convertirAPedido() {
        router.post(`/presupuestos/${presupuesto.id_presupuesto}/convertir`);
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Presupuesto #{presupuesto.id_presupuesto}
                </h2>
            }
        >
            <Head title={`Presupuesto #${presupuesto.id_presupuesto}`} />

            <div className="py-8">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <dl className="grid grid-cols-2 gap-4">
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Número</dt>
                                <dd className="mt-1 text-sm text-gray-900">#{presupuesto.id_presupuesto}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">Fecha</dt>
                                <dd className="mt-1 text-sm text-gray-900">{presupuesto.fecha_presupuesto ?? '—'}</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                        <p className="mb-3 text-sm font-medium text-gray-700">Estado</p>
                        <div className="flex gap-2 flex-wrap">
                            {ESTADOS.map((estado) => (
                                <button
                                    key={estado}
                                    onClick={() => cambiarEstado(estado)}
                                    className={`rounded px-4 py-2 text-sm font-medium capitalize ${
                                        presupuesto.estado === estado
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {estado}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                        <h3 className="mb-4 text-sm font-medium text-gray-700">Líneas del presupuesto</h3>
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
                                {presupuesto.lineas.length === 0 && (
                                    <tr>
                                        <td colSpan={2} className="px-4 py-4 text-center text-sm text-gray-500">
                                            Sin líneas.
                                        </td>
                                    </tr>
                                )}
                                {presupuesto.lineas.map((linea) => (
                                    <tr key={linea.id_linea_presupuesto}>
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

                    {presupuesto.estado === 'aprobado' && (
                        <div className="flex justify-end">
                            <button
                                onClick={convertirAPedido}
                                className="rounded bg-green-600 px-6 py-2 text-white hover:bg-green-700"
                            >
                                Convertir a Pedido
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
