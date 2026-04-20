from datetime import datetime, date
from typing import Optional, List
from decimal import Decimal
from pydantic import BaseModel
from schemas.presupuesto import PresupuestoOut


class LineaPedidoBase(BaseModel):
    id_servicio: Optional[int] = None
    unidades: Optional[Decimal] = None


class LineaPedidoOut(LineaPedidoBase):
    id_linea_pedido: int
    id_pedido: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}


class PedidoBase(BaseModel):
    id_presupuesto: Optional[int] = None
    id_proyecto: Optional[int] = None
    id_empresa: Optional[int] = None
    id_es: Optional[int] = None
    id_tarifario: Optional[int] = None
    fecha_solicitud_pedido: Optional[date] = None
    fecha_solicitud_autofactura: Optional[date] = None
    fecha_recepcion_pedido: Optional[date] = None
    estado: str = "pendiente"


class PedidoOut(PedidoBase):
    id_pedido: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    lineas: List[LineaPedidoOut] = []
    presupuesto: Optional[PresupuestoOut] = None

    model_config = {"from_attributes": True}
