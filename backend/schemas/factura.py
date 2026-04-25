from datetime import datetime, date
from typing import Optional, List
from decimal import Decimal
from pydantic import BaseModel


class LineaFacturaBase(BaseModel):
    id_servicio: Optional[int] = None
    id_tarifario: Optional[int] = None
    unidades: Optional[Decimal] = None
    precio_unitario: Optional[Decimal] = None
    importe: Optional[Decimal] = None


class LineaFacturaCreate(LineaFacturaBase):
    pass


class LineaFacturaOut(LineaFacturaBase):
    id_linea_factura: int
    id_factura: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}


class CobroBase(BaseModel):
    importe: Decimal
    fecha: date
    tipologia_cobro: Optional[str] = None
    cuenta_bancaria: Optional[str] = None


class CobroCreate(CobroBase):
    pass


class CobroOut(CobroBase):
    id_cobro: int
    id_factura: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}


class FacturaPedidoOut(BaseModel):
    id_factura_pedido: int
    id_factura: int
    id_pedido: int

    model_config = {"from_attributes": True}


class FacturaBase(BaseModel):
    numero_factura: Optional[str] = None
    id_proyecto: Optional[int] = None
    id_empresa: Optional[int] = None
    id_es: Optional[int] = None
    id_contrato: Optional[int] = None
    id_tarifario: Optional[int] = None
    id_direccion: Optional[int] = None
    fecha_factura: Optional[date] = None
    fecha_solicitud: Optional[date] = None
    importe_total: Optional[Decimal] = None


class FacturaCreate(FacturaBase):
    pedidos_ids: List[int] = []
    lineas: List[LineaFacturaCreate] = []


class FacturaOut(FacturaBase):
    id_factura: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    lineas: List[LineaFacturaOut] = []
    cobros: List[CobroOut] = []
    pedidos_vinculados: List[FacturaPedidoOut] = []

    model_config = {"from_attributes": True}
