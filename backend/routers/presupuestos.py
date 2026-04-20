from datetime import datetime, date
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from auth import get_current_user
from database import get_db
from models.presupuesto import Presupuesto, PresupuestoLinea
from models.pedido import Pedido, LineaPedido
from models.user import User
from schemas.presupuesto import (
    PresupuestoCreate,
    PresupuestoEstadoUpdate,
    PresupuestoOut,
)
from schemas.pedido import PedidoOut

router = APIRouter(prefix="/presupuestos", tags=["presupuestos"])


@router.get("", response_model=List[PresupuestoOut])
def list_presupuestos(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return (
        db.query(Presupuesto)
        .order_by(Presupuesto.id_presupuesto.desc())
        .all()
    )


@router.post("", response_model=PresupuestoOut, status_code=status.HTTP_201_CREATED)
def create_presupuesto(
    data: PresupuestoCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    now = datetime.utcnow()
    presupuesto = Presupuesto(
        id_proyecto=data.id_proyecto,
        id_empresa=data.id_empresa,
        id_contactos_empresas=data.id_contactos_empresas,
        id_es=data.id_es,
        id_tarifario=data.id_tarifario,
        fecha_presupuesto=data.fecha_presupuesto,
        estado=data.estado,
        created_at=now,
        updated_at=now,
    )
    db.add(presupuesto)
    db.flush()

    for linea_data in data.lineas:
        linea = PresupuestoLinea(
            id_presupuesto=presupuesto.id_presupuesto,
            id_servicio=linea_data.id_servicio,
            id_tarifario=linea_data.id_tarifario,
            unidades=linea_data.unidades,
            created_at=now,
            updated_at=now,
        )
        db.add(linea)

    db.commit()
    db.refresh(presupuesto)
    return presupuesto


@router.get("/{id}", response_model=PresupuestoOut)
def get_presupuesto(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    presupuesto = db.query(Presupuesto).filter(Presupuesto.id_presupuesto == id).first()
    if not presupuesto:
        raise HTTPException(status_code=404, detail="Presupuesto no encontrado")
    return presupuesto


@router.patch("/{id}/estado", response_model=PresupuestoOut)
def update_estado(
    id: int,
    data: PresupuestoEstadoUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    presupuesto = db.query(Presupuesto).filter(Presupuesto.id_presupuesto == id).first()
    if not presupuesto:
        raise HTTPException(status_code=404, detail="Presupuesto no encontrado")
    presupuesto.estado = data.estado
    presupuesto.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(presupuesto)
    return presupuesto


@router.post("/{id}/convertir", response_model=PedidoOut)
def convertir_a_pedido(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    presupuesto = db.query(Presupuesto).filter(Presupuesto.id_presupuesto == id).first()
    if not presupuesto:
        raise HTTPException(status_code=404, detail="Presupuesto no encontrado")
    if presupuesto.estado != "aprobado":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El presupuesto debe estar en estado 'aprobado' para convertirlo en pedido",
        )

    now = datetime.utcnow()
    pedido = Pedido(
        id_presupuesto=presupuesto.id_presupuesto,
        id_proyecto=presupuesto.id_proyecto,
        id_empresa=presupuesto.id_empresa,
        id_es=presupuesto.id_es,
        id_tarifario=presupuesto.id_tarifario,
        fecha_solicitud_pedido=date.today(),
        estado="pendiente",
        created_at=now,
        updated_at=now,
    )
    db.add(pedido)
    db.flush()

    for linea in presupuesto.lineas:
        nueva_linea = LineaPedido(
            id_pedido=pedido.id_pedido,
            id_servicio=linea.id_servicio,
            unidades=linea.unidades,
            created_at=now,
            updated_at=now,
        )
        db.add(nueva_linea)

    db.commit()
    db.refresh(pedido)
    return pedido
