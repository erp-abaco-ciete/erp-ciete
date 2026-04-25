from datetime import datetime
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from auth import get_current_user
from database import get_db
from models.factura import Factura, FacturaPedido, LineaFactura, CobroFactura
from models.user import User
from schemas.factura import FacturaCreate, FacturaOut, CobroCreate, CobroOut

router = APIRouter()


@router.get("", response_model=List[FacturaOut])
def list_facturas(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return db.query(Factura).order_by(Factura.id_factura.desc()).all()


@router.post("", response_model=FacturaOut, status_code=status.HTTP_201_CREATED)
def create_factura(
    data: FacturaCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    now = datetime.utcnow()
    factura = Factura(
        numero_factura=data.numero_factura,
        id_proyecto=data.id_proyecto,
        id_empresa=data.id_empresa,
        id_es=data.id_es,
        id_contrato=data.id_contrato,
        id_tarifario=data.id_tarifario,
        id_direccion=data.id_direccion,
        fecha_factura=data.fecha_factura,
        fecha_solicitud=data.fecha_solicitud,
        importe_total=data.importe_total,
        created_at=now,
        updated_at=now,
    )
    db.add(factura)
    db.flush()

    for pedido_id in data.pedidos_ids:
        fp = FacturaPedido(
            id_factura=factura.id_factura,
            id_pedido=pedido_id,
            created_at=now,
            updated_at=now,
        )
        db.add(fp)

    for linea_data in data.lineas:
        linea = LineaFactura(
            id_factura=factura.id_factura,
            id_servicio=linea_data.id_servicio,
            id_tarifario=linea_data.id_tarifario,
            unidades=linea_data.unidades,
            precio_unitario=linea_data.precio_unitario,
            importe=linea_data.importe,
            created_at=now,
            updated_at=now,
        )
        db.add(linea)

    db.commit()
    db.refresh(factura)
    return factura


@router.get("/{id}", response_model=FacturaOut)
def get_factura(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    factura = db.query(Factura).filter(Factura.id_factura == id).first()
    if not factura:
        raise HTTPException(status_code=404, detail="Factura no encontrada")
    return factura


@router.put("/{id}", response_model=FacturaOut)
def update_factura(
    id: int,
    data: FacturaCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    factura = db.query(Factura).filter(Factura.id_factura == id).first()
    if not factura:
        raise HTTPException(status_code=404, detail="Factura no encontrada")
    factura.numero_factura = data.numero_factura
    factura.id_proyecto = data.id_proyecto
    factura.id_empresa = data.id_empresa
    factura.id_es = data.id_es
    factura.id_contrato = data.id_contrato
    factura.id_tarifario = data.id_tarifario
    factura.id_direccion = data.id_direccion
    factura.fecha_factura = data.fecha_factura
    factura.fecha_solicitud = data.fecha_solicitud
    factura.importe_total = data.importe_total
    factura.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(factura)
    return factura


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_factura(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    factura = db.query(Factura).filter(Factura.id_factura == id).first()
    if not factura:
        raise HTTPException(status_code=404, detail="Factura no encontrada")
    db.delete(factura)
    db.commit()


@router.get("/{id}/cobros", response_model=List[CobroOut])
def list_cobros(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    factura = db.query(Factura).filter(Factura.id_factura == id).first()
    if not factura:
        raise HTTPException(status_code=404, detail="Factura no encontrada")
    return factura.cobros


@router.post("/{id}/cobros", response_model=CobroOut, status_code=status.HTTP_201_CREATED)
def add_cobro(
    id: int,
    data: CobroCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    factura = db.query(Factura).filter(Factura.id_factura == id).first()
    if not factura:
        raise HTTPException(status_code=404, detail="Factura no encontrada")
    now = datetime.utcnow()
    cobro = CobroFactura(
        id_factura=id,
        importe=data.importe,
        fecha=data.fecha,
        tipologia_cobro=data.tipologia_cobro,
        cuenta_bancaria=data.cuenta_bancaria,
        created_at=now,
        updated_at=now,
    )
    db.add(cobro)
    db.commit()
    db.refresh(cobro)
    return cobro


@router.delete("/{id}/cobros/{id_cobro}", status_code=status.HTTP_204_NO_CONTENT)
def delete_cobro(
    id: int,
    id_cobro: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    cobro = (
        db.query(CobroFactura)
        .filter(CobroFactura.id_cobro == id_cobro, CobroFactura.id_factura == id)
        .first()
    )
    if not cobro:
        raise HTTPException(status_code=404, detail="Cobro no encontrado")
    db.delete(cobro)
    db.commit()
