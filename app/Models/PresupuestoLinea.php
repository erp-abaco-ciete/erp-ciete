<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PresupuestoLinea extends Model
{
    protected $table = 'presupuestos_lineas';

    protected $primaryKey = 'id_linea_presupuesto';

    protected $fillable = [
        'id_presupuesto',
        'id_tarifario',
        'id_servicio',
        'unidades',
    ];

    public function presupuesto()
    {
        return $this->belongsTo(Presupuesto::class, 'id_presupuesto');
    }
}
