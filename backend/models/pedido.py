from sqlalchemy import Column, Integer, String, DateTime, Date, Numeric, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Pedido(Base):
    __tablename__ = "pedidos"

    id_pedido = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_presupuesto = Column(Integer, ForeignKey("presupuestos.id_presupuesto"), nullable=True)
    id_proyecto = Column(Integer, nullable=True)
    id_empresa = Column(Integer, nullable=True)
    id_es = Column(Integer, nullable=True)
    id_tarifario = Column(Integer, nullable=True)
    fecha_solicitud_pedido = Column(Date, nullable=True)
    fecha_solicitud_autofactura = Column(Date, nullable=True)
    fecha_recepcion_pedido = Column(Date, nullable=True)
    estado = Column(String, nullable=False, default="pendiente")
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    presupuesto = relationship("Presupuesto", back_populates="pedidos")
    lineas = relationship("LineaPedido", back_populates="pedido", cascade="all, delete-orphan")


class LineaPedido(Base):
    __tablename__ = "lineas_pedido"

    id_linea_pedido = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_pedido = Column(Integer, ForeignKey("pedidos.id_pedido"), nullable=False)
    id_servicio = Column(Integer, nullable=True)
    unidades = Column(Numeric, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    pedido = relationship("Pedido", back_populates="lineas")
