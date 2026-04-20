<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LineaPedido extends Model
{
    protected $table = 'lineas_pedido';

    protected $primaryKey = 'id_linea_pedido';

    protected $fillable = [
        'id_pedido',
        'id_servicio',
        'unidades',
    ];

    public function pedido()
    {
        return $this->belongsTo(Pedido::class, 'id_pedido');
    }
}
