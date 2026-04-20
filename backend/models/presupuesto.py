from sqlalchemy import Column, Integer, String, DateTime, Date, Numeric, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Presupuesto(Base):
    __tablename__ = "presupuestos"

    id_presupuesto = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_proyecto = Column(Integer, nullable=True)
    id_empresa = Column(Integer, nullable=True)
    id_contactos_empresas = Column(Integer, nullable=True)
    id_es = Column(Integer, nullable=True)
    id_tarifario = Column(Integer, nullable=True)
    fecha_presupuesto = Column(Date, nullable=True)
    estado = Column(String, nullable=False, default="borrador")
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    lineas = relationship("PresupuestoLinea", back_populates="presupuesto", cascade="all, delete-orphan")
    pedidos = relationship("Pedido", back_populates="presupuesto")


class PresupuestoLinea(Base):
    __tablename__ = "presupuestos_lineas"

    id_linea_presupuesto = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_presupuesto = Column(Integer, ForeignKey("presupuestos.id_presupuesto"), nullable=False)
    id_tarifario = Column(Integer, nullable=True)
    id_servicio = Column(Integer, nullable=True)
    unidades = Column(Numeric, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    presupuesto = relationship("Presupuesto", back_populates="lineas")
