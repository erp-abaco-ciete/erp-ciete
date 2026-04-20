from datetime import datetime
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from auth import get_current_user
from database import get_db
from models.estacion import EstacionServicio
from models.user import User
from schemas.estacion import EstacionCreate, EstacionOut

router = APIRouter(prefix="/estaciones", tags=["estaciones"])


@router.get("", response_model=List[EstacionOut])
def list_estaciones(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return db.query(EstacionServicio).order_by(EstacionServicio.id_es.desc()).all()


@router.post("", response_model=EstacionOut, status_code=status.HTTP_201_CREATED)
def create_estacion(
    data: EstacionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    now = datetime.utcnow()
    estacion = EstacionServicio(
        id_empresa=data.id_empresa,
        cod_es=data.cod_es,
        cod_retailgas=data.cod_retailgas,
        cod_sociedad=data.cod_sociedad,
        cod_solred=data.cod_solred,
        concesion=data.concesion,
        tipo=data.tipo,
        nombre=data.nombre,
        direccion=data.direccion,
        cod_postal=data.cod_postal,
        poblacion=data.poblacion,
        provincia=data.provincia,
        ccaa=data.ccaa,
        pais=data.pais,
        num_margenes=data.num_margenes,
        y_wgs84=data.y_wgs84,
        x_wgs84=data.x_wgs84,
        vinculo=data.vinculo,
        vinculo_2=data.vinculo_2,
        delegacion=data.delegacion,
        delegado=data.delegado,
        tecnico_gestion=data.tecnico_gestion,
        tl_tecnico_gestion=data.tl_tecnico_gestion,
        email_tecnico_gestion=data.email_tecnico_gestion,
        responsable_gestor=data.responsable_gestor,
        tel_movil=data.tel_movil,
        tl_oficina=data.tl_oficina,
        sede_email=data.sede_email,
        tipo_mantenimiento=data.tipo_mantenimiento,
        f_alta=data.f_alta,
        f_baja=data.f_baja,
        f_alta_modificacion=data.f_alta_modificacion,
        nif=data.nif,
        horario_apertura=data.horario_apertura,
        created_at=now,
        updated_at=now,
    )
    db.add(estacion)
    db.commit()
    db.refresh(estacion)
    return estacion


@router.get("/{id}", response_model=EstacionOut)
def get_estacion(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    estacion = db.query(EstacionServicio).filter(EstacionServicio.id_es == id).first()
    if not estacion:
        raise HTTPException(status_code=404, detail="Estación no encontrada")
    return estacion


@router.put("/{id}", response_model=EstacionOut)
def update_estacion(
    id: int,
    data: EstacionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    estacion = db.query(EstacionServicio).filter(EstacionServicio.id_es == id).first()
    if not estacion:
        raise HTTPException(status_code=404, detail="Estación no encontrada")
    for field in [
        "id_empresa", "cod_es", "cod_retailgas", "cod_sociedad", "cod_solred",
        "concesion", "tipo", "nombre", "direccion", "cod_postal", "poblacion",
        "provincia", "ccaa", "pais", "num_margenes", "y_wgs84", "x_wgs84",
        "vinculo", "vinculo_2", "delegacion", "delegado", "tecnico_gestion",
        "tl_tecnico_gestion", "email_tecnico_gestion", "responsable_gestor",
        "tel_movil", "tl_oficina", "sede_email", "tipo_mantenimiento",
        "f_alta", "f_baja", "f_alta_modificacion", "nif", "horario_apertura",
    ]:
        setattr(estacion, field, getattr(data, field))
    estacion.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(estacion)
    return estacion


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_estacion(
    id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    estacion = db.query(EstacionServicio).filter(EstacionServicio.id_es == id).first()
    if not estacion:
        raise HTTPException(status_code=404, detail="Estación no encontrada")
    db.delete(estacion)
    db.commit()
