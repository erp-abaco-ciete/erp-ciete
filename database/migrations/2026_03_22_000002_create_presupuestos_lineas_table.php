<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('presupuestos_lineas', function (Blueprint $table) {
            $table->id('id_linea_presupuesto');
            $table->unsignedBigInteger('id_presupuesto');
            $table->unsignedBigInteger('id_tarifario')->nullable();
            $table->unsignedBigInteger('id_servicio')->nullable();
            $table->decimal('unidades', 12, 2)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('presupuestos_lineas');
    }
};
