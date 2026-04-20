<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PedidoController extends Controller
{
    public function index()
    {
        $pedidos = Pedido::with('presupuesto')->orderByDesc('id_pedido')->get();

        return Inertia::render('Pedidos/Index', [
            'pedidos' => $pedidos,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Pedido $pedido)
    {
        return Inertia::render('Pedidos/Show', [
            'pedido' => $pedido->load(['lineas', 'presupuesto']),
        ]);
    }

    public function edit(Pedido $pedido)
    {
        //
    }

    public function update(Request $request, Pedido $pedido)
    {
        //
    }

    public function destroy(Pedido $pedido)
    {
        //
    }
}
