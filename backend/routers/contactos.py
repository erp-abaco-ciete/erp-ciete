from datetime import datetime
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from auth import get_current_user
from database import get_db
from models.contacto import Contacto
from models.user import User
from schemas.contacto import ContactoCreate, ContactoOut

router = APIRouter(prefix="/contactos", tags=["contactos"])


@router.get("", response_model=List[ContactoOut])
def list_contactos(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return db.query(Contacto).order_by(Contacto.id_contacto.desc()).all()


@router.post("", response_model=ContactoOut, status_code=status.HTTP_201_CREATED)
def create_contacto(
    data: ContactoCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    now = datetime.utcnow()
    contacto = Contacto(
        nombre=data.nombre,
        apellido1=data.apellido1,
        apellido2=data.apellido2,
        id_direccion=data.id_direccion,
        id_telefono=data.id_telefono,
        id_email=data.id_email,
        created_at=now,
        updated_at=now,
    )
    db.add(contacto)
    db.commit()
    db.refresh(contacto)
    return contacto


@router.get("/{id}", response_model=ContactoOut)
def get_contacto(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    contacto = db.query(Contacto).filter(Contacto.id_contacto == id).first()
    if not contacto:
        raise HTTPException(status_code=404, detail="Contacto no encontrado")
    return contacto


@router.put("/{id}", response_model=ContactoOut)
def update_contacto(
    id: int,
    data: ContactoCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    contacto = db.query(Contacto).filter(Contacto.id_contacto == id).first()
    if not contacto:
        raise HTTPException(status_code=404, detail="Contacto no encontrado")
    contacto.nombre = data.nombre
    contacto.apellido1 = data.apellido1
    contacto.apellido2 = data.apellido2
    contacto.id_direccion = data.id_direccion
    contacto.id_telefono = data.id_telefono
    contacto.id_email = data.id_email
    contacto.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(contacto)
    return contacto


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_contacto(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    contacto = db.query(Contacto).filter(Contacto.id_contacto == id).first()
    if not contacto:
        raise HTTPException(status_code=404, detail="Contacto no encontrado")
    db.delete(contacto)
    db.commit()
