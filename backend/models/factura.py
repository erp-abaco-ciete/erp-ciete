from sqlalchemy import Column, Integer, String, DateTime, Date, Numeric, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Factura(Base):
    __tablename__ = "facturas"

    id_factura = Column(Integer, primary_key=True, autoincrement=True, index=True)
    numero_factura = Column(String, nullable=True)
    id_proyecto = Column(Integer, nullable=True)
    id_empresa = Column(Integer, nullable=True)
    id_es = Column(Integer, nullable=True)
    id_contrato = Column(Integer, nullable=True)
    id_tarifario = Column(Integer, nullable=True)
    id_direccion = Column(Integer, nullable=True)
    fecha_factura = Column(Date, nullable=True)
    fecha_solicitud = Column(Date, nullable=True)
    importe_total = Column(Numeric, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    pedidos_vinculados = relationship(
        "FacturaPedido", back_populates="factura", cascade="all, delete-orphan"
    )
    lineas = relationship(
        "LineaFactura", back_populates="factura", cascade="all, delete-orphan"
    )
    cobros = relationship(
        "CobroFactura", back_populates="factura", cascade="all, delete-orphan"
    )


class FacturaPedido(Base):
    __tablename__ = "factura_pedidos"

    id_factura_pedido = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_factura = Column(Integer, ForeignKey("facturas.id_factura"), nullable=False)
    id_pedido = Column(Integer, nullable=False)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    factura = relationship("Factura", back_populates="pedidos_vinculados")


class LineaFactura(Base):
    __tablename__ = "lineas_factura"

    id_linea_factura = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_factura = Column(Integer, ForeignKey("facturas.id_factura"), nullable=False)
    id_servicio = Column(Integer, nullable=True)
    id_tarifario = Column(Integer, nullable=True)
    unidades = Column(Numeric, nullable=True)
    precio_unitario = Column(Numeric, nullable=True)
    importe = Column(Numeric, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    factura = relationship("Factura", back_populates="lineas")


class CobroFactura(Base):
    __tablename__ = "cobros"

    id_cobro = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_factura = Column(Integer, ForeignKey("facturas.id_factura"), nullable=False)
    importe = Column(Numeric, nullable=False)
    fecha = Column(Date, nullable=False)
    tipologia_cobro = Column(String, nullable=True)
    cuenta_bancaria = Column(String, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    factura = relationship("Factura", back_populates="cobros")
