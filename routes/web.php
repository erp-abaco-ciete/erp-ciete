<?php

use App\Http\Controllers\PedidoController;
use App\Http\Controllers\PresupuestoController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admin', function () {
        abort_unless(auth()->user()?->isAdmin(), 403);

        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    Route::resource('presupuestos', PresupuestoController::class);
    Route::resource('pedidos', PedidoController::class);
    Route::post('presupuestos/{presupuesto}/convertir',
        [PresupuestoController::class, 'convertirAPedido'])
        ->name('presupuestos.convertir');
    Route::patch('presupuestos/{presupuesto}/estado',
        [PresupuestoController::class, 'cambiarEstado'])
        ->name('presupuestos.estado');
});

require __DIR__.'/auth.php';
