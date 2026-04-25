from datetime import datetime
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from auth import get_current_user
from database import get_db
from models.tarifario import Tarifario, TarifarioServicio
from models.user import User
from schemas.tarifario import (
    TarifarioCreate,
    TarifarioOut,
    TarifarioServicioCreate,
    TarifarioServicioOut,
)

router = APIRouter()


@router.get("", response_model=List[TarifarioOut])
def list_tarifarios(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return db.query(Tarifario).order_by(Tarifario.id_tarifario.desc()).all()


@router.post("", response_model=TarifarioOut, status_code=status.HTTP_201_CREATED)
def create_tarifario(
    data: TarifarioCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    now = datetime.utcnow()
    tarifario = Tarifario(
        nombre_tarifario=data.nombre_tarifario,
        id_empresa=data.id_empresa,
        fecha_tarifario=data.fecha_tarifario,
        fecha_fin=data.fecha_fin,
        created_at=now,
        updated_at=now,
    )
    db.add(tarifario)
    db.commit()
    db.refresh(tarifario)
    return tarifario


@router.get("/{id}", response_model=TarifarioOut)
def get_tarifario(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    tarifario = db.query(Tarifario).filter(Tarifario.id_tarifario == id).first()
    if not tarifario:
        raise HTTPException(status_code=404, detail="Tarifario no encontrado")
    return tarifario


@router.put("/{id}", response_model=TarifarioOut)
def update_tarifario(
    id: int,
    data: TarifarioCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    tarifario = db.query(Tarifario).filter(Tarifario.id_tarifario == id).first()
    if not tarifario:
        raise HTTPException(status_code=404, detail="Tarifario no encontrado")
    tarifario.nombre_tarifario = data.nombre_tarifario
    tarifario.id_empresa = data.id_empresa
    tarifario.fecha_tarifario = data.fecha_tarifario
    tarifario.fecha_fin = data.fecha_fin
    tarifario.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(tarifario)
    return tarifario


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_tarifario(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    tarifario = db.query(Tarifario).filter(Tarifario.id_tarifario == id).first()
    if not tarifario:
        raise HTTPException(status_code=404, detail="Tarifario no encontrado")
    db.delete(tarifario)
    db.commit()


@router.get("/{id}/servicios", response_model=List[TarifarioServicioOut])
def list_servicios(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    tarifario = db.query(Tarifario).filter(Tarifario.id_tarifario == id).first()
    if not tarifario:
        raise HTTPException(status_code=404, detail="Tarifario no encontrado")
    return tarifario.servicios


@router.post(
    "/{id}/servicios",
    response_model=TarifarioServicioOut,
    status_code=status.HTTP_201_CREATED,
)
def add_servicio(
    id: int,
    data: TarifarioServicioCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    tarifario = db.query(Tarifario).filter(Tarifario.id_tarifario == id).first()
    if not tarifario:
        raise HTTPException(status_code=404, detail="Tarifario no encontrado")
    # Generate next id_servicio for this tarifario
    last = (
        db.query(TarifarioServicio)
        .filter(TarifarioServicio.id_tarifario == id)
        .order_by(TarifarioServicio.id_servicio.desc())
        .first()
    )
    next_id = (last.id_servicio + 1) if last else 1
    now = datetime.utcnow()
    servicio = TarifarioServicio(
        id_tarifario=id,
        id_servicio=next_id,
        codigo_servicio=data.codigo_servicio,
        numero_tarifa=data.numero_tarifa,
        nombre_servicio=data.nombre_servicio,
        precio_unitario=data.precio_unitario,
        precio_anterior=data.precio_anterior,
        created_at=now,
        updated_at=now,
    )
    db.add(servicio)
    db.commit()
    db.refresh(servicio)
    return servicio


@router.put(
    "/{id_tarifario}/servicios/{id_servicio}",
    response_model=TarifarioServicioOut,
)
def update_servicio(
    id_tarifario: int,
    id_servicio: int,
    data: TarifarioServicioCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    servicio = (
        db.query(TarifarioServicio)
        .filter(
            TarifarioServicio.id_tarifario == id_tarifario,
            TarifarioServicio.id_servicio == id_servicio,
        )
        .first()
    )
    if not servicio:
        raise HTTPException(status_code=404, detail="Servicio no encontrado")
    servicio.codigo_servicio = data.codigo_servicio
    servicio.numero_tarifa = data.numero_tarifa
    servicio.nombre_servicio = data.nombre_servicio
    servicio.precio_unitario = data.precio_unitario
    servicio.precio_anterior = data.precio_anterior
    servicio.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(servicio)
    return servicio


@router.delete(
    "/{id_tarifario}/servicios/{id_servicio}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_servicio(
    id_tarifario: int,
    id_servicio: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    servicio = (
        db.query(TarifarioServicio)
        .filter(
            TarifarioServicio.id_tarifario == id_tarifario,
            TarifarioServicio.id_servicio == id_servicio,
        )
        .first()
    )
    if not servicio:
        raise HTTPException(status_code=404, detail="Servicio no encontrado")
    db.delete(servicio)
    db.commit()
