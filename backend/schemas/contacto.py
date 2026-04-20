from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class ContactoBase(BaseModel):
    nombre: str
    apellido1: Optional[str] = None
    apellido2: Optional[str] = None
    id_direccion: Optional[int] = None
    id_telefono: Optional[int] = None
    id_email: Optional[int] = None


class ContactoCreate(ContactoBase):
    pass


class ContactoOut(ContactoBase):
    id_contacto: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}
