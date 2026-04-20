<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('presupuestos', function (Blueprint $table) {
            $table->id('id_presupuesto');
            $table->unsignedBigInteger('id_proyecto')->nullable();
            $table->unsignedBigInteger('id_empresa')->nullable();
            $table->unsignedBigInteger('id_contactos_empresas')->nullable();
            $table->unsignedBigInteger('id_es')->nullable();
            $table->unsignedBigInteger('id_tarifario')->nullable();
            $table->date('fecha_presupuesto')->nullable();
            $table->string('estado')->default('borrador');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('presupuestos');
    }
};
