from datetime import datetime

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine, SessionLocal
from auth import get_password_hash

# Import all models to ensure they are registered with Base
import models.user  # noqa: F401
import models.presupuesto  # noqa: F401
import models.pedido  # noqa: F401
import models.empresa  # noqa: F401
import models.contacto  # noqa: F401
import models.estacion  # noqa: F401

from routers import auth as auth_router
from routers import presupuestos as presupuestos_router
from routers import pedidos as pedidos_router
from routers import empresas as empresas_router
from routers import contactos as contactos_router
from routers import estaciones as estaciones_router

app = FastAPI(title="ERP Ciete API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth_router.router)
app.include_router(presupuestos_router.router)
app.include_router(pedidos_router.router)
app.include_router(empresas_router.router)
app.include_router(contactos_router.router)
app.include_router(estaciones_router.router)


@app.on_event("startup")
def startup_event():
    # Create all tables
    Base.metadata.create_all(bind=engine)

    # Create default admin user if not exists
    db = SessionLocal()
    try:
        from models.user import User
        admin = db.query(User).filter(User.email == "admin@ciete.es").first()
        if not admin:
            hashed_password = get_password_hash("admin123")
            admin_user = User(
                name="Admin",
                email="admin@ciete.es",
                password=hashed_password,
                role="admin",
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
            )
            db.add(admin_user)
            db.commit()
    finally:
        db.close()


@app.get("/")
def root():
    return {"message": "ERP Ciete API v1.0.0"}
