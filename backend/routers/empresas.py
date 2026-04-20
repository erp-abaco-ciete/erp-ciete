from datetime import datetime
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from auth import get_current_user
from database import get_db
from models.empresa import Empresa, ContactoEmpresa
from models.user import User
from schemas.empresa import (
    EmpresaCreate,
    EmpresaOut,
    ContactoEmpresaCreate,
    ContactoEmpresaOut,
)

router = APIRouter(prefix="/empresas", tags=["empresas"])


@router.get("", response_model=List[EmpresaOut])
def list_empresas(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return db.query(Empresa).order_by(Empresa.id_empresa.desc()).all()


@router.post("", response_model=EmpresaOut, status_code=status.HTTP_201_CREATED)
def create_empresa(
    data: EmpresaCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    now = datetime.utcnow()
    empresa = Empresa(
        nombre=data.nombre,
        razon_social=data.razon_social,
        cif=data.cif,
        id_direccion=data.id_direccion,
        id_telefono=data.id_telefono,
        id_email=data.id_email,
        created_at=now,
        updated_at=now,
    )
    db.add(empresa)
    db.commit()
    db.refresh(empresa)
    return empresa


@router.get("/{id}", response_model=EmpresaOut)
def get_empresa(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    empresa = db.query(Empresa).filter(Empresa.id_empresa == id).first()
    if not empresa:
        raise HTTPException(status_code=404, detail="Empresa no encontrada")
    return empresa


@router.put("/{id}", response_model=EmpresaOut)
def update_empresa(
    id: int,
    data: EmpresaCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    empresa = db.query(Empresa).filter(Empresa.id_empresa == id).first()
    if not empresa:
        raise HTTPException(status_code=404, detail="Empresa no encontrada")
    empresa.nombre = data.nombre
    empresa.razon_social = data.razon_social
    empresa.cif = data.cif
    empresa.id_direccion = data.id_direccion
    empresa.id_telefono = data.id_telefono
    empresa.id_email = data.id_email
    empresa.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(empresa)
    return empresa


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_empresa(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    empresa = db.query(Empresa).filter(Empresa.id_empresa == id).first()
    if not empresa:
        raise HTTPException(status_code=404, detail="Empresa no encontrada")
    db.delete(empresa)
    db.commit()


@router.get("/{id}/contactos", response_model=List[ContactoEmpresaOut])
def list_contactos_empresa(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    empresa = db.query(Empresa).filter(Empresa.id_empresa == id).first()
    if not empresa:
        raise HTTPException(status_code=404, detail="Empresa no encontrada")
    return (
        db.query(ContactoEmpresa)
        .filter(ContactoEmpresa.id_empresa == id)
        .all()
    )


@router.post(
    "/{id}/contactos",
    response_model=ContactoEmpresaOut,
    status_code=status.HTTP_201_CREATED,
)
def add_contacto_empresa(
    id: int,
    data: ContactoEmpresaCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    empresa = db.query(Empresa).filter(Empresa.id_empresa == id).first()
    if not empresa:
        raise HTTPException(status_code=404, detail="Empresa no encontrada")
    now = datetime.utcnow()
    ce = ContactoEmpresa(
        id_empresa=id,
        id_contacto=data.id_contacto,
        puesto=data.puesto,
        categoria=data.categoria,
        id_direccion=data.id_direccion,
        id_telefono=data.id_telefono,
        id_email=data.id_email,
        es_usuario=data.es_usuario,
        created_at=now,
        updated_at=now,
    )
    db.add(ce)
    db.commit()
    db.refresh(ce)
    return ce
