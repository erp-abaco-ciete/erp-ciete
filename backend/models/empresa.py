from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Empresa(Base):
    __tablename__ = "empresas"

    id_empresa = Column(Integer, primary_key=True, autoincrement=True, index=True)
    nombre = Column(String, nullable=False)
    razon_social = Column(String, nullable=True)
    cif = Column(String, unique=True, nullable=True)
    id_direccion = Column(Integer, nullable=True)
    id_telefono = Column(Integer, nullable=True)
    id_email = Column(Integer, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    contactos_empresas = relationship(
        "ContactoEmpresa", back_populates="empresa", cascade="all, delete-orphan"
    )
    estaciones = relationship(
        "EstacionServicio", back_populates="empresa"
    )


class ContactoEmpresa(Base):
    __tablename__ = "contactos_empresas"

    id_contactos_empresas = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_empresa = Column(Integer, ForeignKey("empresas.id_empresa"), nullable=False)
    id_contacto = Column(Integer, ForeignKey("contactos.id_contacto"), nullable=False)
    puesto = Column(String, nullable=True)
    categoria = Column(String, nullable=True)
    id_direccion = Column(Integer, nullable=True)
    id_telefono = Column(Integer, nullable=True)
    id_email = Column(Integer, nullable=True)
    es_usuario = Column(Integer, default=0)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    empresa = relationship("Empresa", back_populates="contactos_empresas")
    contacto = relationship("Contacto", back_populates="contactos_empresas")
