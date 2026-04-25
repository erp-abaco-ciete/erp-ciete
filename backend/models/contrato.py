from sqlalchemy import Column, Integer, String, DateTime, Date, Text, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Contrato(Base):
    __tablename__ = "contratos"

    id_contrato = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_empresa = Column(Integer, ForeignKey("empresas.id_empresa"), nullable=True)
    numero_contrato = Column(String, nullable=True)
    nombre = Column(String, nullable=True)
    id_tarifario = Column(Integer, nullable=True)
    fecha_inicio = Column(Date, nullable=True)
    fecha_fin = Column(Date, nullable=True)
    descripcion = Column(Text, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    empresa = relationship("Empresa", foreign_keys=[id_empresa])
