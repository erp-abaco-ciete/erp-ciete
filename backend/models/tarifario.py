from sqlalchemy import Column, Integer, String, DateTime, Date, Numeric, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Tarifario(Base):
    __tablename__ = "tarifario"

    id_tarifario = Column(Integer, primary_key=True, autoincrement=True, index=True)
    nombre_tarifario = Column(String, nullable=False)
    id_empresa = Column(Integer, nullable=True)
    fecha_tarifario = Column(Date, nullable=True)
    fecha_fin = Column(Date, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    servicios = relationship(
        "TarifarioServicio", back_populates="tarifario", cascade="all, delete-orphan"
    )


class TarifarioServicio(Base):
    __tablename__ = "tarifario_servicios"

    id_tarifario = Column(
        Integer, ForeignKey("tarifario.id_tarifario"), primary_key=True, nullable=False
    )
    id_servicio = Column(Integer, primary_key=True, nullable=False)
    codigo_servicio = Column(String, nullable=True)
    numero_tarifa = Column(String, nullable=True)
    nombre_servicio = Column(String, nullable=False)
    precio_unitario = Column(Numeric, nullable=False)
    precio_anterior = Column(Numeric, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    tarifario = relationship("Tarifario", back_populates="servicios")
