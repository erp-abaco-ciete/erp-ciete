import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        fecha_presupuesto: '',
        lineas: [],
    });

    function addLinea() {
        setData('lineas', [...data.lineas, { id_servicio: '', unidades: '' }]);
    }

    function removeLinea(index) {
        setData(
            'lineas',
            data.lineas.filter((_, i) => i !== index),
        );
    }

    function updateLinea(index, field, value) {
        const updated = data.lineas.map((linea, i) =>
            i === index ? { ...linea, [field]: value } : linea,
        );
        setData('lineas', updated);
    }

    function handleSubmit(e) {
        e.preventDefault();
        post('/presupuestos');
    }

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Nuevo Presupuesto</h2>}
        >
            <Head title="Nuevo Presupuesto" />

            <div className="py-8">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Fecha del presupuesto
                                </label>
                                <input
                                    type="date"
                                    value={data.fecha_presupuesto}
                                    onChange={(e) => setData('fecha_presupuesto', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                                {errors.fecha_presupuesto && (
                                    <p className="mt-1 text-sm text-red-600">{errors.fecha_presupuesto}</p>
                                )}
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">Líneas</span>
                                    <button
                                        type="button"
                                        onClick={addLinea}
                                        className="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
                                    >
                                        + Añadir línea
                                    </button>
                                </div>

                                {data.lineas.length === 0 && (
                                    <p className="text-sm text-gray-500">No hay líneas. Pulsa "Añadir línea".</p>
                                )}

                                <div className="space-y-2">
                                    {data.lineas.map((linea, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                placeholder="ID Servicio"
                                                value={linea.id_servicio}
                                                onChange={(e) => updateLinea(index, 'id_servicio', e.target.value)}
                                                className="flex-1 rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            />
                                            <input
                                                type="number"
                                                placeholder="Unidades"
                                                value={linea.unidades}
                                                onChange={(e) => updateLinea(index, 'unidades', e.target.value)}
                                                className="w-32 rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                min="0"
                                                step="0.01"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeLinea(index)}
                                                className="rounded bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                                >
                                    Guardar presupuesto
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
