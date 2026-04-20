from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class EmpresaBase(BaseModel):
    nombre: str
    razon_social: Optional[str] = None
    cif: Optional[str] = None
    id_direccion: Optional[int] = None
    id_telefono: Optional[int] = None
    id_email: Optional[int] = None


class EmpresaCreate(EmpresaBase):
    pass


class EmpresaOut(EmpresaBase):
    id_empresa: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}


class ContactoEmpresaBase(BaseModel):
    id_empresa: int
    id_contacto: int
    puesto: Optional[str] = None
    categoria: Optional[str] = None
    id_direccion: Optional[int] = None
    id_telefono: Optional[int] = None
    id_email: Optional[int] = None
    es_usuario: Optional[int] = 0


class ContactoEmpresaCreate(ContactoEmpresaBase):
    pass


class ContactoEmpresaOut(ContactoEmpresaBase):
    id_contactos_empresas: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}
