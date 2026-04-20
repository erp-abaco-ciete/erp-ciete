<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Presupuesto extends Model
{
    protected $primaryKey = 'id_presupuesto';

    protected $fillable = [
        'id_proyecto',
        'id_empresa',
        'id_contactos_empresas',
        'id_es',
        'id_tarifario',
        'fecha_presupuesto',
        'estado',
    ];

    public function lineas()
    {
        return $this->hasMany(PresupuestoLinea::class, 'id_presupuesto');
    }
}
