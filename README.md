# ERP Ciete Ingenieros

Sistema ERP completo para gestión de presupuestos y pedidos.

## Stack

- **Backend**: Python 3.11 + FastAPI + SQLAlchemy + SQLite
- **Frontend**: Angular 17+ (Standalone components)

## Puesta en marcha

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

La API estará disponible en `http://localhost:8000`.  
Documentación interactiva en `http://localhost:8000/docs`.

**Usuario por defecto:**
- Email: `admin@ciete.es`
- Contraseña: `admin123`

### Frontend

```bash
cd frontend
npm install
ng serve
```

La aplicación estará disponible en `http://localhost:4200`.

## Estructura

```
erp-abaco/
├── backend/
│   ├── main.py             # App FastAPI + startup
│   ├── database.py         # Conexión SQLite
│   ├── auth.py             # JWT + bcrypt
│   ├── models/             # SQLAlchemy models
│   ├── schemas/            # Pydantic schemas
│   └── routers/            # Endpoints REST
└── frontend/
    └── src/app/
        ├── core/           # Services, interceptors, guards
        ├── pages/          # Componentes de página
        └── shared/         # Navbar compartida
```
