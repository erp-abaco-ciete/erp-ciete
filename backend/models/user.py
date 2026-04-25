from sqlalchemy import Column, Integer, String, DateTime, Text
from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True, index=True)
    email_verified_at = Column(DateTime, nullable=True)
    role = Column(String, nullable=False, default="user")
    password = Column(String, nullable=False)
    permisos = Column(Text, nullable=True)
    remember_token = Column(String, nullable=True)
    created_at = Column(DateTime, nullable=True)
    updated_at = Column(DateTime, nullable=True)
