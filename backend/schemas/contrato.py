from datetime import datetime, date
from typing import Optional
from pydantic import BaseModel


class ContratoBase(BaseModel):
    id_empresa: Optional[int] = None
    numero_contrato: Optional[str] = None
    nombre: Optional[str] = None
    id_tarifario: Optional[int] = None
    fecha_inicio: Optional[date] = None
    fecha_fin: Optional[date] = None
    descripcion: Optional[str] = None


class ContratoCreate(ContratoBase):
    pass


class ContratoOut(ContratoBase):
    id_contrato: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}
