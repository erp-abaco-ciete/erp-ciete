from sqlalchemy import Column, Integer, String, DateTime, Date, Float, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class EstacionServicio(Base):
    __tablename__ = "es"

    id_es = Column(Integer, primary_key=True, autoincrement=True, index=True)
    id_empresa = Column(Integer, ForeignKey("empresas.id_empresa"), nullable=True)
    cod_es = Column(String, nullable=True)
    cod_retailgas = Column(String, nullable=True)
    cod_sociedad = Column(String, nullable=True)
    cod_solred = Column(String, nullable=True)
    concesion = Column(String, nullable=True)
    tipo = Column(String, nullable=True)
    nombre = Column(String, nullable=True)
    direccion = Column(String, nullable=True)
    cod_postal = Column(String, nullable=True)
    poblacion = Column(String, nullable=True)
    provincia = Column(String, nullable=True)
    ccaa = Column(String, nullable=True)
    pais = Column(String, default="España", nullable=True)
    num_margenes = Column(Integer, nullable=True)
    y_wgs84 = Column(Float, nullable=True)
    x_wgs84 = Column(Float, nullable=True)
    vinculo = Column(String, nullable=True)
    vinculo_2 = Column(String, nullable=True)
    delegacion = Column(String, nullable=True)
    delegado = Column(String, nullable=True)
    tecnico_gestion = Column(String, nullable=True)
    tl_tecnico_gestion = Column(String, nullable=True)
    email_tecnico_gestion = Column(String, nullable=True)
    responsable_gestor = Column(String, nullable=True)
    tel_movil = Column(String, nullable=True)
    tl_oficina = Column(String, nullable=True)
    sede_email = Column(String, nullable=True)
    tipo_mantenimiento = Column(String, nullable=True)
    f_alta = Column(Date, nullable=True)
    f_baja = Column(Date, nullable=True)
    f_alta_modificacion = Column(Date, nullable=True)
    nif = Column(String, nullable=True)
    horario_apertura = Column(String, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)

    empresa = relationship("Empresa", back_populates="estaciones")
