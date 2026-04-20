from datetime import datetime, date
from typing import Optional
from pydantic import BaseModel


class EstacionBase(BaseModel):
    id_empresa: Optional[int] = None
    cod_es: Optional[str] = None
    cod_retailgas: Optional[str] = None
    cod_sociedad: Optional[str] = None
    cod_solred: Optional[str] = None
    concesion: Optional[str] = None
    tipo: Optional[str] = None
    nombre: Optional[str] = None
    direccion: Optional[str] = None
    cod_postal: Optional[str] = None
    poblacion: Optional[str] = None
    provincia: Optional[str] = None
    ccaa: Optional[str] = None
    pais: Optional[str] = "España"
    num_margenes: Optional[int] = None
    y_wgs84: Optional[float] = None
    x_wgs84: Optional[float] = None
    vinculo: Optional[str] = None
    vinculo_2: Optional[str] = None
    delegacion: Optional[str] = None
    delegado: Optional[str] = None
    tecnico_gestion: Optional[str] = None
    tl_tecnico_gestion: Optional[str] = None
    email_tecnico_gestion: Optional[str] = None
    responsable_gestor: Optional[str] = None
    tel_movil: Optional[str] = None
    tl_oficina: Optional[str] = None
    sede_email: Optional[str] = None
    tipo_mantenimiento: Optional[str] = None
    f_alta: Optional[date] = None
    f_baja: Optional[date] = None
    f_alta_modificacion: Optional[date] = None
    nif: Optional[str] = None
    horario_apertura: Optional[str] = None


class EstacionCreate(EstacionBase):
    pass


class EstacionOut(EstacionBase):
    id_es: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}
