from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class UsuarioCreate(BaseModel):
    name: str
    email: str
    password: str
    role: str = "user"
    permisos: Optional[str] = None


class UsuarioUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    password: Optional[str] = None
    role: Optional[str] = None
    permisos: Optional[str] = None


class UsuarioOut(BaseModel):
    id: int
    name: str
    email: str
    role: str
    permisos: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}
