from datetime import datetime
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from auth import get_current_user
from database import get_db
from models.contrato import Contrato
from models.user import User
from schemas.contrato import ContratoCreate, ContratoOut

router = APIRouter()


@router.get("", response_model=List[ContratoOut])
def list_contratos(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return db.query(Contrato).order_by(Contrato.id_contrato.desc()).all()


@router.post("", response_model=ContratoOut, status_code=status.HTTP_201_CREATED)
def create_contrato(
    data: ContratoCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    now = datetime.utcnow()
    contrato = Contrato(
        id_empresa=data.id_empresa,
        numero_contrato=data.numero_contrato,
        nombre=data.nombre,
        id_tarifario=data.id_tarifario,
        fecha_inicio=data.fecha_inicio,
        fecha_fin=data.fecha_fin,
        descripcion=data.descripcion,
        created_at=now,
        updated_at=now,
    )
    db.add(contrato)
    db.commit()
    db.refresh(contrato)
    return contrato


@router.get("/{id}", response_model=ContratoOut)
def get_contrato(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    contrato = db.query(Contrato).filter(Contrato.id_contrato == id).first()
    if not contrato:
        raise HTTPException(status_code=404, detail="Contrato no encontrado")
    return contrato


@router.put("/{id}", response_model=ContratoOut)
def update_contrato(
    id: int,
    data: ContratoCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    contrato = db.query(Contrato).filter(Contrato.id_contrato == id).first()
    if not contrato:
        raise HTTPException(status_code=404, detail="Contrato no encontrado")
    contrato.id_empresa = data.id_empresa
    contrato.numero_contrato = data.numero_contrato
    contrato.nombre = data.nombre
    contrato.id_tarifario = data.id_tarifario
    contrato.fecha_inicio = data.fecha_inicio
    contrato.fecha_fin = data.fecha_fin
    contrato.descripcion = data.descripcion
    contrato.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(contrato)
    return contrato


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_contrato(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    contrato = db.query(Contrato).filter(Contrato.id_contrato == id).first()
    if not contrato:
        raise HTTPException(status_code=404, detail="Contrato no encontrado")
    db.delete(contrato)
    db.commit()
