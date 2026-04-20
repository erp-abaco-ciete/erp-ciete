from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship
from database import Base


class Contacto(Base):
    __tablename__ = "contactos"

    id_contacto = Column(Integer, primary_key=True, autoincrement=True, index=True)
    nombre = Column(String, nullable=False)
    apellido1 = Column(String, nullable=True)
    apellido2 = Column(String, nullable=True)
    id_direccion = Column(Integer, nullable=True)
    id_telefono = Column(Integer, nullable=True)
    id_email = Column(Integer, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    contactos_empresas = relationship(
        "ContactoEmpresa", back_populates="contacto", cascade="all, delete-orphan"
    )
