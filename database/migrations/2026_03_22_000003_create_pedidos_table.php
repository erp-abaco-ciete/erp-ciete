<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id('id_pedido');
            $table->unsignedBigInteger('id_presupuesto')->nullable();
            $table->unsignedBigInteger('id_proyecto')->nullable();
            $table->unsignedBigInteger('id_empresa')->nullable();
            $table->unsignedBigInteger('id_es')->nullable();
            $table->unsignedBigInteger('id_tarifario')->nullable();
            $table->date('fecha_solicitud_pedido')->nullable();
            $table->date('fecha_solicitud_autofactura')->nullable();
            $table->date('fecha_recepcion_pedido')->nullable();
            $table->string('estado')->default('pendiente');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pedidos');
    }
};
