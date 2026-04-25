import json
from datetime import datetime
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from auth import get_current_user, get_password_hash
from database import get_db
from models.user import User
from schemas.usuario import UsuarioCreate, UsuarioUpdate, UsuarioOut

router = APIRouter()

DEFAULT_PERMISOS_ADMIN = json.dumps({
    "presupuestos": True, "pedidos": True, "facturas": True,
    "contratos": True, "tarifario": True, "usuarios": True
})
DEFAULT_PERMISOS_USER = json.dumps({
    "presupuestos": False, "pedidos": False, "facturas": False,
    "contratos": False, "tarifario": False, "usuarios": False
})


def require_admin(current_user: User = Depends(get_current_user)):
    if current_user.role != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Acceso restringido a administradores",
        )
    return current_user


@router.get("", response_model=List[UsuarioOut])
def list_usuarios(
    db: Session = Depends(get_db),
    current_user: User = Depends(require_admin),
):
    return db.query(User).order_by(User.id.desc()).all()


@router.post("", response_model=UsuarioOut, status_code=status.HTTP_201_CREATED)
def create_usuario(
    data: UsuarioCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_admin),
):
    existing = db.query(User).filter(User.email == data.email).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El identificador ya está en uso",
        )
    permisos = data.permisos
    if permisos is None:
        permisos = DEFAULT_PERMISOS_ADMIN if data.role == "admin" else DEFAULT_PERMISOS_USER

    now = datetime.utcnow()
    user = User(
        name=data.name,
        email=data.email,
        password=get_password_hash(data.password),
        role=data.role,
        permisos=permisos,
        created_at=now,
        updated_at=now,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.get("/{id}", response_model=UsuarioOut)
def get_usuario(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_admin),
):
    user = db.query(User).filter(User.id == id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return user


@router.put("/{id}", response_model=UsuarioOut)
def update_usuario(
    id: int,
    data: UsuarioUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_admin),
):
    user = db.query(User).filter(User.id == id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    if data.name is not None:
        user.name = data.name
    if data.email is not None:
        existing = db.query(User).filter(User.email == data.email, User.id != id).first()
        if existing:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="El identificador ya está en uso",
            )
        user.email = data.email
    if data.role is not None:
        user.role = data.role
    if data.permisos is not None:
        user.permisos = data.permisos
    if data.password:
        user.password = get_password_hash(data.password)
    user.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(user)
    return user


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_usuario(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_admin),
):
    if current_user.id == id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No puedes eliminar tu propio usuario",
        )
    user = db.query(User).filter(User.id == id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    db.delete(user)
    db.commit()
