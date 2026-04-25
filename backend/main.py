from datetime import datetime

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from database import Base, engine, SessionLocal
from auth import get_password_hash

# Import all models to ensure they are registered with Base
import models.user  # noqa: F401
import models.presupuesto  # noqa: F401
import models.pedido  # noqa: F401
import models.empresa  # noqa: F401
import models.contacto  # noqa: F401
import models.estacion  # noqa: F401
import models.contrato  # noqa: F401
import models.tarifario  # noqa: F401
import models.factura  # noqa: F401

from routers import auth as auth_router
from routers import presupuestos as presupuestos_router
from routers import pedidos as pedidos_router
from routers import empresas as empresas_router
from routers import contactos as contactos_router
from routers import estaciones as estaciones_router
from routers import contratos as contratos_router
from routers import tarifario as tarifario_router
from routers import facturas as facturas_router
from routers import usuarios as usuarios_router

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
app.include_router(contratos_router.router, prefix="/contratos", tags=["Contratos"])
app.include_router(tarifario_router.router, prefix="/tarifario", tags=["Tarifario"])
app.include_router(facturas_router.router, prefix="/facturas", tags=["Facturas"])
app.include_router(usuarios_router.router, prefix="/usuarios", tags=["Usuarios"])


@app.on_event("startup")
def startup_event():
    # Create all tables
    Base.metadata.create_all(bind=engine)

    # Add permisos column to users if not exists (migration)
    try:
        with engine.connect() as conn:
            conn.execute(text("ALTER TABLE users ADD COLUMN permisos TEXT"))
            conn.commit()
    except Exception:
        pass  # Column already exists

    # Create default admin user if not exists
    db = SessionLocal()
    try:
        import json
        from models.user import User
        admin = db.query(User).filter(User.email == "admin@ciete.es").first()
        if not admin:
            hashed_password = get_password_hash("admin123")
            permisos_admin = json.dumps({
                "presupuestos": True, "pedidos": True, "facturas": True,
                "contratos": True, "tarifario": True, "usuarios": True
            })
            admin_user = User(
                name="Admin",
                email="admin@ciete.es",
                password=hashed_password,
                role="admin",
                permisos=permisos_admin,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
            )
            db.add(admin_user)
            db.commit()
        else:
            # Update existing admin with permisos if missing
            if not admin.permisos:
                permisos_admin = json.dumps({
                    "presupuestos": True, "pedidos": True, "facturas": True,
                    "contratos": True, "tarifario": True, "usuarios": True
                })
                admin.permisos = permisos_admin
                db.commit()
    finally:
        db.close()


@app.get("/")
def root():
    return {"message": "ERP Ciete API v1.0.0"}
