<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $primaryKey = 'id_pedido';

    protected $fillable = [
        'id_presupuesto',
        'id_proyecto',
        'id_empresa',
        'id_es',
        'id_tarifario',
        'fecha_solicitud_pedido',
        'fecha_solicitud_autofactura',
        'fecha_recepcion_pedido',
        'estado',
    ];

    public function lineas()
    {
        return $this->hasMany(LineaPedido::class, 'id_pedido');
    }

    public function presupuesto()
    {
        return $this->belongsTo(Presupuesto::class, 'id_presupuesto');
    }
}
