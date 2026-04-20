<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('lineas_pedido', function (Blueprint $table) {
            $table->id('id_linea_pedido');
            $table->unsignedBigInteger('id_pedido');
            $table->unsignedBigInteger('id_servicio')->nullable();
            $table->decimal('unidades', 12, 2)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lineas_pedido');
    }
};
