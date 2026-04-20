from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from auth import get_current_user
from database import get_db
from models.pedido import Pedido
from models.user import User
from schemas.pedido import PedidoOut

router = APIRouter(prefix="/pedidos", tags=["pedidos"])


@router.get("", response_model=List[PedidoOut])
def list_pedidos(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return db.query(Pedido).order_by(Pedido.id_pedido.desc()).all()


@router.get("/{id}", response_model=PedidoOut)
def get_pedido(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    pedido = db.query(Pedido).filter(Pedido.id_pedido == id).first()
    if not pedido:
        raise HTTPException(status_code=404, detail="Pedido no encontrado")
    return pedido
