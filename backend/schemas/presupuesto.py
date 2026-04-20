from datetime import datetime, date
from typing import Optional, List
from decimal import Decimal
from pydantic import BaseModel


class PresupuestoLineaBase(BaseModel):
    id_servicio: Optional[int] = None
    id_tarifario: Optional[int] = None
    unidades: Optional[Decimal] = None


class PresupuestoLineaCreate(PresupuestoLineaBase):
    pass


class PresupuestoLineaOut(PresupuestoLineaBase):
    id_linea_presupuesto: int
    id_presupuesto: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}


class PresupuestoBase(BaseModel):
    id_proyecto: Optional[int] = None
    id_empresa: Optional[int] = None
    id_contactos_empresas: Optional[int] = None
    id_es: Optional[int] = None
    id_tarifario: Optional[int] = None
    fecha_presupuesto: Optional[date] = None
    estado: str = "borrador"


class PresupuestoCreate(PresupuestoBase):
    lineas: List[PresupuestoLineaCreate] = []


class PresupuestoEstadoUpdate(BaseModel):
    estado: str


class PresupuestoOut(PresupuestoBase):
    id_presupuesto: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    lineas: List[PresupuestoLineaOut] = []

    model_config = {"from_attributes": True}
