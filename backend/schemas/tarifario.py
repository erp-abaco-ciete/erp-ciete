from datetime import datetime, date
from typing import Optional, List
from decimal import Decimal
from pydantic import BaseModel


class TarifarioServicioBase(BaseModel):
    codigo_servicio: Optional[str] = None
    numero_tarifa: Optional[str] = None
    nombre_servicio: str
    precio_unitario: Decimal
    precio_anterior: Optional[Decimal] = None


class TarifarioServicioCreate(TarifarioServicioBase):
    pass


class TarifarioServicioOut(TarifarioServicioBase):
    id_tarifario: int
    id_servicio: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}


class TarifarioBase(BaseModel):
    nombre_tarifario: str
    id_empresa: Optional[int] = None
    fecha_tarifario: Optional[date] = None
    fecha_fin: Optional[date] = None


class TarifarioCreate(TarifarioBase):
    pass


class TarifarioOut(TarifarioBase):
    id_tarifario: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    servicios: List[TarifarioServicioOut] = []

    model_config = {"from_attributes": True}
