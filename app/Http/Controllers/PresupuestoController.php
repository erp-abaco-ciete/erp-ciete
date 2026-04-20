<?php

namespace App\Http\Controllers;

use App\Models\LineaPedido;
use App\Models\Pedido;
use App\Models\Presupuesto;
use App\Models\PresupuestoLinea;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PresupuestoController extends Controller
{
    public function index()
    {
        $presupuestos = Presupuesto::orderByDesc('id_presupuesto')->get();

        return Inertia::render('Presupuestos/Index', [
            'presupuestos' => $presupuestos,
        ]);
    }

    public function create()
    {
        return Inertia::render('Presupuestos/Create');
    }

    public function store(Request $request)
    {
        $presupuesto = Presupuesto::create([
            'fecha_presupuesto' => $request->fecha_presupuesto,
            'estado' => 'borrador',
        ]);

        foreach ($request->lineas ?? [] as $linea) {
            PresupuestoLinea::create([
                'id_presupuesto' => $presupuesto->id_presupuesto,
                'id_servicio' => $linea['id_servicio'] ?? null,
                'unidades' => $linea['unidades'] ?? null,
            ]);
        }

        return redirect()->route('presupuestos.index');
    }

    public function show(Presupuesto $presupuesto)
    {
        return Inertia::render('Presupuestos/Show', [
            'presupuesto' => $presupuesto->load('lineas'),
        ]);
    }

    public function edit(Presupuesto $presupuesto)
    {
        //
    }

    public function update(Request $request, Presupuesto $presupuesto)
    {
        //
    }

    public function destroy(Presupuesto $presupuesto)
    {
        //
    }

    public function convertirAPedido(Presupuesto $presupuesto)
    {
        abort_unless($presupuesto->estado === 'aprobado', 422, 'El presupuesto debe estar aprobado para convertirlo en pedido.');

        $pedido = Pedido::create([
            'id_presupuesto' => $presupuesto->id_presupuesto,
            'id_proyecto' => $presupuesto->id_proyecto,
            'id_empresa' => $presupuesto->id_empresa,
            'id_es' => $presupuesto->id_es,
            'id_tarifario' => $presupuesto->id_tarifario,
            'fecha_solicitud_pedido' => now()->toDateString(),
            'estado' => 'pendiente',
        ]);

        foreach ($presupuesto->lineas as $linea) {
            LineaPedido::create([
                'id_pedido' => $pedido->id_pedido,
                'id_servicio' => $linea->id_servicio,
                'unidades' => $linea->unidades,
            ]);
        }

        return redirect()->route('pedidos.show', $pedido->id_pedido)
            ->with('success', 'Pedido creado correctamente a partir del presupuesto.');
    }

    public function cambiarEstado(Request $request, Presupuesto $presupuesto)
    {
        $presupuesto->update(['estado' => $request->estado]);

        return back()->with('success', 'Estado actualizado correctamente.');
    }
}
