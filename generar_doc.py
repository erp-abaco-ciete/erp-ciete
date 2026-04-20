# Script para generar la documentacion del ERP Ciete en formato Word (.docx)
# Ejecutar desde: c:\Users\Bernardo\Documents\erp-abaco\
from docx import Document
from docx.shared import Pt, RGBColor, Inches, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
import datetime

doc = Document()

# ── Estilos globales ──────────────────────────────────────────────────────────
style = doc.styles['Normal']
style.font.name = 'Calibri'
style.font.size = Pt(11)

def set_col_width(table, col_idx, width_cm):
    for row in table.rows:
        row.cells[col_idx].width = Cm(width_cm)

def shade_cell(cell, hex_color):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), hex_color)
    tcPr.append(shd)

def h1(text):
    p = doc.add_heading(text, level=1)
    p.runs[0].font.color.rgb = RGBColor(0x1E, 0x3A, 0x8A)
    return p

def h2(text):
    p = doc.add_heading(text, level=2)
    p.runs[0].font.color.rgb = RGBColor(0x25, 0x63, 0xEB)
    return p

def h3(text):
    return doc.add_heading(text, level=3)

def body(text):
    return doc.add_paragraph(text)

def bullet(text):
    p = doc.add_paragraph(text, style='List Bullet')
    return p

def code_block(text):
    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Inches(0.4)
    run = p.add_run(text)
    run.font.name = 'Courier New'
    run.font.size = Pt(9)
    run.font.color.rgb = RGBColor(0x1E, 0x29, 0x3B)
    shading = OxmlElement('w:shd')
    shading.set(qn('w:val'), 'clear')
    shading.set(qn('w:color'), 'auto')
    shading.set(qn('w:fill'), 'F1F5F9')
    pPr = p._p.get_or_add_pPr()
    pPr.append(shading)
    return p

def page_break():
    doc.add_page_break()

# ═══════════════════════════════════════════════════════════════════════════════
# PORTADA
# ═══════════════════════════════════════════════════════════════════════════════
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p.add_run('\n\n\n')

p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p.add_run('ERP CIETE INGENIEROS')
run.font.size = Pt(28)
run.font.bold = True
run.font.color.rgb = RGBColor(0x1E, 0x3A, 0x8A)

p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p.add_run('Documentación Técnica y de Usuario')
run.font.size = Pt(16)
run.font.color.rgb = RGBColor(0x37, 0x51, 0x8E)

doc.add_paragraph()
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p.add_run(f'Versión 2.0  ·  {datetime.date.today().strftime("%d/%m/%Y")}')
run.font.size = Pt(12)
run.font.color.rgb = RGBColor(0x64, 0x74, 0x8B)

page_break()

# ═══════════════════════════════════════════════════════════════════════════════
# ÍNDICE (manual)
# ═══════════════════════════════════════════════════════════════════════════════
h1('Índice')
indices = [
    ('1.', 'Arquitectura y estructura del proyecto'),
    ('2.', 'Esquema de la base de datos'),
    ('3.', 'Guía de instalación'),
    ('4.', 'Credenciales de acceso'),
    ('5.', 'Guía de uso diario'),
    ('6.', 'Módulo de Empresas'),
    ('7.', 'Módulo de Contactos'),
    ('8.', 'Módulo de Estaciones de Servicio'),
]
for num, title in indices:
    p = doc.add_paragraph()
    run = p.add_run(f'  {num}  {title}')
    run.font.size = Pt(12)

page_break()

# ═══════════════════════════════════════════════════════════════════════════════
# 1. ARQUITECTURA Y ESTRUCTURA
# ═══════════════════════════════════════════════════════════════════════════════
h1('1. Arquitectura y Estructura del Proyecto')

body(
    'El ERP Ciete es una aplicación web de dos capas: un backend REST API '
    'desarrollado en Python/FastAPI y un frontend SPA (Single Page Application) '
    'en Angular 17. Ambas piezas son completamente independientes y se comunican '
    'mediante HTTP/JSON.'
)

h2('1.1  Stack Tecnológico')
table = doc.add_table(rows=1, cols=3)
table.style = 'Light Grid Accent 1'
hdr = table.rows[0].cells
hdr[0].text = 'Capa'
hdr[1].text = 'Tecnología'
hdr[2].text = 'Versión'
for c in hdr:
    shade_cell(c, '1E3A8A')
    c.paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
    c.paragraphs[0].runs[0].font.bold = True

rows_data = [
    ('Backend', 'Python', '3.13'),
    ('Backend', 'FastAPI', '0.135+'),
    ('Backend', 'SQLAlchemy', '2.0+'),
    ('Backend', 'SQLite', '3.x (archivo)'),
    ('Backend', 'bcrypt', '4.x+'),
    ('Backend', 'python-jose', '3.5+'),
    ('Frontend', 'Angular', '17+'),
    ('Frontend', 'TypeScript', '5.4+'),
    ('Frontend', 'Node.js', '18+ / 20+'),
]
for capa, tech, ver in rows_data:
    row = table.add_row().cells
    row[0].text = capa
    row[1].text = tech
    row[2].text = ver

doc.add_paragraph()

h2('1.2  Estructura de Carpetas — Backend')
code_block(
    'backend/\n'
    '├── main.py                  ← Punto de entrada FastAPI. Configura CORS,\n'
    '│                              registra routers y crea el usuario admin\n'
    '│                              al arrancar (startup event).\n'
    '├── database.py              ← Conexión SQLite con SQLAlchemy.\n'
    '│                              Expone get_db() como dependencia.\n'
    '├── auth.py                  ← JWT (python-jose) + hashing bcrypt.\n'
    '│                              Funciones: create_access_token,\n'
    '│                              get_current_user, verify_password,\n'
    '│                              get_password_hash.\n'
    '├── requirements.txt         ← Dependencias Python del proyecto.\n'
    '├── database.sqlite          ← Archivo de base de datos (auto-generado).\n'
    '│\n'
    '├── models/                  ← Modelos SQLAlchemy (tablas de la BD)\n'
    '│   ├── user.py              ← Tabla users\n'
    '│   ├── presupuesto.py       ← Tablas presupuestos + presupuestos_lineas\n'
    '│   ├── pedido.py            ← Tablas pedidos + lineas_pedido\n'
    '│   ├── empresa.py           ← Tablas empresas + contactos_empresas\n'
    '│   ├── contacto.py          ← Tabla contactos\n'
    '│   └── estacion.py          ← Tabla es (estaciones de servicio)\n'
    '│\n'
    '├── schemas/                 ← Schemas Pydantic (validación + serialización)\n'
    '│   ├── user.py              ← UserOut, UserCreate, Token, LoginRequest\n'
    '│   ├── presupuesto.py       ← PresupuestoOut, PresupuestoCreate, etc.\n'
    '│   ├── pedido.py            ← PedidoOut, LineaPedidoOut\n'
    '│   ├── empresa.py           ← EmpresaOut, EmpresaCreate,\n'
    '│   │                          ContactoEmpresaOut, ContactoEmpresaCreate\n'
    '│   ├── contacto.py          ← ContactoOut, ContactoCreate\n'
    '│   └── estacion.py          ← EstacionOut, EstacionCreate\n'
    '│\n'
    '└── routers/                 ← Endpoints REST organizados por área\n'
    '    ├── auth.py              ← POST /auth/login, /auth/registro, GET /auth/me\n'
    '    ├── presupuestos.py      ← CRUD presupuestos + cambio estado + convertir\n'
    '    ├── pedidos.py           ← GET /pedidos, GET /pedidos/{id}\n'
    '    ├── empresas.py          ← CRUD empresas + gestión contactos-empresa\n'
    '    ├── contactos.py         ← CRUD contactos\n'
    '    └── estaciones.py        ← CRUD estaciones de servicio'
)

doc.add_paragraph()
h2('1.3  Endpoints de la API')
table = doc.add_table(rows=1, cols=4)
table.style = 'Light Grid Accent 1'
hdr = table.rows[0].cells
for i, t in enumerate(['Método', 'Ruta', 'Auth', 'Descripción']):
    hdr[i].text = t
    shade_cell(hdr[i], '2563EB')
    hdr[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
    hdr[i].paragraphs[0].runs[0].font.bold = True

endpoints = [
    ('POST', '/auth/login',                   'No',  'Login → devuelve JWT'),
    ('POST', '/auth/registro',                'No',  'Registra nuevo usuario'),
    ('GET',  '/auth/me',                      'Sí',  'Datos del usuario actual'),
    ('GET',  '/presupuestos',                 'Sí',  'Lista todos los presupuestos'),
    ('POST', '/presupuestos',                 'Sí',  'Crea presupuesto con líneas'),
    ('GET',  '/presupuestos/{id}',            'Sí',  'Detalle de un presupuesto'),
    ('PATCH','/presupuestos/{id}/estado',     'Sí',  'Cambia estado del presupuesto'),
    ('POST', '/presupuestos/{id}/convertir',  'Sí',  'Convierte presupuesto a pedido'),
    ('GET',  '/pedidos',                      'Sí',  'Lista todos los pedidos'),
    ('GET',  '/pedidos/{id}',                 'Sí',  'Detalle de un pedido'),
    ('GET',  '/empresas',                     'Sí',  'Lista todas las empresas'),
    ('POST', '/empresas',                     'Sí',  'Crea una nueva empresa'),
    ('GET',  '/empresas/{id}',                'Sí',  'Detalle de una empresa'),
    ('PUT',  '/empresas/{id}',                'Sí',  'Actualiza una empresa'),
    ('DELETE','/empresas/{id}',               'Sí',  'Elimina una empresa'),
    ('GET',  '/empresas/{id}/contactos',      'Sí',  'Contactos de la empresa'),
    ('POST', '/empresas/{id}/contactos',      'Sí',  'Vincula contacto a empresa'),
    ('GET',  '/contactos',                    'Sí',  'Lista todos los contactos'),
    ('POST', '/contactos',                    'Sí',  'Crea un nuevo contacto'),
    ('GET',  '/contactos/{id}',               'Sí',  'Detalle de un contacto'),
    ('PUT',  '/contactos/{id}',               'Sí',  'Actualiza un contacto'),
    ('DELETE','/contactos/{id}',              'Sí',  'Elimina un contacto'),
    ('GET',  '/estaciones',                   'Sí',  'Lista todas las estaciones'),
    ('POST', '/estaciones',                   'Sí',  'Crea una nueva estación'),
    ('GET',  '/estaciones/{id}',              'Sí',  'Detalle de una estación'),
    ('PUT',  '/estaciones/{id}',              'Sí',  'Actualiza una estación'),
    ('DELETE','/estaciones/{id}',             'Sí',  'Elimina una estación'),
]
for metodo, ruta, auth, desc in endpoints:
    row = table.add_row().cells
    row[0].text = metodo
    row[1].text = ruta
    row[2].text = auth
    row[3].text = desc

doc.add_paragraph()
h2('1.4  Estructura de Carpetas — Frontend')
code_block(
    'frontend/src/app/\n'
    '├── app.component.ts         ← Componente raíz (solo renderiza <router-outlet>)\n'
    '├── app.config.ts            ← Configura provideHttpClient + provideRouter\n'
    '├── app.routes.ts            ← Definición de rutas con lazy loading\n'
    '│\n'
    '├── core/\n'
    '│   ├── services/\n'
    '│   │   ├── auth.service.ts          ← login, logout, getToken, getMe\n'
    '│   │   ├── presupuestos.service.ts  ← getAll, getOne, create,\n'
    '│   │   │                               cambiarEstado, convertir\n'
    '│   │   ├── pedidos.service.ts       ← getAll, getOne\n'
    '│   │   ├── empresas.service.ts      ← getAll, getOne, create,\n'
    '│   │   │                               update, delete\n'
    '│   │   ├── contactos.service.ts     ← getAll, getOne, create,\n'
    '│   │   │                               update, delete\n'
    '│   │   └── estaciones.service.ts    ← getAll, getOne, create,\n'
    '│   │                                   update, delete\n'
    '│   ├── interceptors/\n'
    '│   │   └── auth.interceptor.ts      ← Añade Bearer token a cada petición\n'
    '│   └── guards/\n'
    '│       └── auth.guard.ts            ← Redirige a /login si no hay token\n'
    '│\n'
    '├── pages/\n'
    '│   ├── login/                       ← Formulario de inicio de sesión\n'
    '│   ├── dashboard/                   ← Pantalla principal con accesos\n'
    '│   ├── presupuestos/\n'
    '│   │   ├── list/                    ← Tabla de presupuestos\n'
    '│   │   ├── form/                    ← Nuevo presupuesto con líneas\n'
    '│   │   └── detail/                  ← Detalle + cambio estado + convertir\n'
    '│   ├── pedidos/\n'
    '│   │   ├── list/                    ← Tabla de pedidos\n'
    '│   │   └── detail/                  ← Detalle completo del pedido\n'
    '│   ├── empresas/\n'
    '│   │   ├── list/                    ← Tabla de empresas\n'
    '│   │   ├── form/                    ← Crear / editar empresa\n'
    '│   │   └── detail/                  ← Detalle de la empresa\n'
    '│   ├── contactos/\n'
    '│   │   ├── list/                    ← Tabla de contactos\n'
    '│   │   ├── form/                    ← Crear / editar contacto\n'
    '│   │   └── detail/                  ← Detalle del contacto\n'
    '│   └── estaciones/\n'
    '│       ├── list/                    ← Tabla de estaciones\n'
    '│       ├── form/                    ← Crear / editar estación\n'
    '│       └── detail/                  ← Detalle de la estación\n'
    '│\n'
    '└── shared/\n'
    '    └── navbar/                      ← Barra de navegación compartida'
)

doc.add_paragraph()
h2('1.5  Rutas del Frontend')
table = doc.add_table(rows=1, cols=3)
table.style = 'Light Grid Accent 1'
hdr = table.rows[0].cells
for i, t in enumerate(['Ruta', 'Componente', 'Protegida']):
    hdr[i].text = t
    shade_cell(hdr[i], '2563EB')
    hdr[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
    hdr[i].paragraphs[0].runs[0].font.bold = True

rutas = [
    ('/login',              'LoginComponent',              'No'),
    ('/dashboard',          'DashboardComponent',          'Sí'),
    ('/presupuestos',       'PresupuestosListComponent',   'Sí'),
    ('/presupuestos/new',   'PresupuestosFormComponent',   'Sí'),
    ('/presupuestos/:id',   'PresupuestosDetailComponent', 'Sí'),
    ('/pedidos',            'PedidosListComponent',        'Sí'),
    ('/pedidos/:id',        'PedidosDetailComponent',      'Sí'),
    ('/empresas',           'EmpresasListComponent',       'Sí'),
    ('/empresas/new',       'EmpresasFormComponent',       'Sí'),
    ('/empresas/:id',       'EmpresasDetailComponent',     'Sí'),
    ('/empresas/:id/edit',  'EmpresasFormComponent',       'Sí'),
    ('/contactos',          'ContactosListComponent',      'Sí'),
    ('/contactos/new',      'ContactosFormComponent',      'Sí'),
    ('/contactos/:id',      'ContactosDetailComponent',    'Sí'),
    ('/contactos/:id/edit', 'ContactosFormComponent',      'Sí'),
    ('/estaciones',         'EstacionesListComponent',     'Sí'),
    ('/estaciones/new',     'EstacionesFormComponent',     'Sí'),
    ('/estaciones/:id',     'EstacionesDetailComponent',   'Sí'),
    ('/estaciones/:id/edit','EstacionesFormComponent',     'Sí'),
]
for r, c, p in rutas:
    row = table.add_row().cells
    row[0].text = r
    row[1].text = c
    row[2].text = p

page_break()

# ═══════════════════════════════════════════════════════════════════════════════
# 2. ESQUEMA DE LA BASE DE DATOS
# ═══════════════════════════════════════════════════════════════════════════════
h1('2. Esquema de la Base de Datos')
body(
    'La base de datos es un único archivo SQLite ubicado en backend/database.sqlite. '
    'Se crea automáticamente al arrancar el servidor por primera vez. '
    'Contiene 9 tablas:'
)

# users
h2('Tabla: users')
t = doc.add_table(rows=1, cols=4)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Campo', 'Tipo', 'Nulo', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '1E3A8A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for row in [
    ('id',                 'INTEGER PK AUTOINCREMENT', 'No',  'Identificador único'),
    ('name',               'VARCHAR',                  'No',  'Nombre completo'),
    ('email',              'VARCHAR UNIQUE',            'No',  'Correo electrónico (login)'),
    ('email_verified_at',  'DATETIME',                 'Sí',  'Verificación de email'),
    ('role',               'VARCHAR',                  'No',  "'user' o 'admin'"),
    ('password',           'VARCHAR',                  'No',  'Hash bcrypt de la contraseña'),
    ('remember_token',     'VARCHAR',                  'Sí',  'Token sesión persistente'),
    ('created_at',         'DATETIME',                 'Sí',  'Fecha de creación'),
    ('updated_at',         'DATETIME',                 'Sí',  'Última modificación'),
]:
    cells = t.add_row().cells
    for i, v in enumerate(row):
        cells[i].text = v
doc.add_paragraph()

# presupuestos
h2('Tabla: presupuestos')
t = doc.add_table(rows=1, cols=4)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Campo', 'Tipo', 'Nulo', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '1E3A8A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for row in [
    ('id_presupuesto',        'INTEGER PK AUTOINCREMENT', 'No',  'Identificador único'),
    ('id_proyecto',           'INTEGER',                  'Sí',  'Referencia a proyecto externo'),
    ('id_empresa',            'INTEGER',                  'Sí',  'Referencia a empresa'),
    ('id_contactos_empresas', 'INTEGER',                  'Sí',  'Referencia a contacto'),
    ('id_es',                 'INTEGER',                  'Sí',  'Referencia a ES'),
    ('id_tarifario',          'INTEGER',                  'Sí',  'Referencia a tarifario'),
    ('fecha_presupuesto',     'DATE',                     'Sí',  'Fecha del presupuesto'),
    ('estado',                'VARCHAR',                  'No',  'borrador/enviado/aprobado/rechazado'),
    ('created_at',            'DATETIME',                 'Sí',  'Fecha de creación'),
    ('updated_at',            'DATETIME',                 'Sí',  'Última modificación'),
]:
    cells = t.add_row().cells
    for i, v in enumerate(row):
        cells[i].text = v
doc.add_paragraph()

# presupuestos_lineas
h2('Tabla: presupuestos_lineas')
t = doc.add_table(rows=1, cols=4)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Campo', 'Tipo', 'Nulo', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '1E3A8A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for row in [
    ('id_linea_presupuesto', 'INTEGER PK AUTOINCREMENT', 'No', 'Identificador único'),
    ('id_presupuesto',       'INTEGER FK → presupuestos','No', 'Presupuesto al que pertenece'),
    ('id_tarifario',         'INTEGER',                  'Sí', 'Referencia a tarifario'),
    ('id_servicio',          'INTEGER',                  'Sí', 'Referencia al servicio'),
    ('unidades',             'NUMERIC',                  'Sí', 'Cantidad de unidades'),
    ('created_at',           'DATETIME',                 'Sí', 'Fecha de creación'),
    ('updated_at',           'DATETIME',                 'Sí', 'Última modificación'),
]:
    cells = t.add_row().cells
    for i, v in enumerate(row):
        cells[i].text = v
doc.add_paragraph()

# pedidos
h2('Tabla: pedidos')
t = doc.add_table(rows=1, cols=4)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Campo', 'Tipo', 'Nulo', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '1E3A8A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for row in [
    ('id_pedido',                  'INTEGER PK AUTOINCREMENT',     'No', 'Identificador único'),
    ('id_presupuesto',             'INTEGER FK → presupuestos',    'Sí', 'Presupuesto de origen'),
    ('id_proyecto',                'INTEGER',                      'Sí', 'Referencia a proyecto'),
    ('id_empresa',                 'INTEGER',                      'Sí', 'Referencia a empresa'),
    ('id_es',                      'INTEGER',                      'Sí', 'Referencia a ES'),
    ('id_tarifario',               'INTEGER',                      'Sí', 'Referencia a tarifario'),
    ('fecha_solicitud_pedido',     'DATE',                         'Sí', 'Fecha de solicitud del pedido'),
    ('fecha_solicitud_autofactura','DATE',                         'Sí', 'Fecha de solicitud de autofactura'),
    ('fecha_recepcion_pedido',     'DATE',                         'Sí', 'Fecha de recepción'),
    ('estado',                     'VARCHAR',                      'No', 'pendiente/completado/etc.'),
    ('created_at',                 'DATETIME',                     'Sí', 'Fecha de creación'),
    ('updated_at',                 'DATETIME',                     'Sí', 'Última modificación'),
]:
    cells = t.add_row().cells
    for i, v in enumerate(row):
        cells[i].text = v
doc.add_paragraph()

# lineas_pedido
h2('Tabla: lineas_pedido')
t = doc.add_table(rows=1, cols=4)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Campo', 'Tipo', 'Nulo', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '1E3A8A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for row in [
    ('id_linea_pedido', 'INTEGER PK AUTOINCREMENT', 'No', 'Identificador único'),
    ('id_pedido',       'INTEGER FK → pedidos',     'No', 'Pedido al que pertenece'),
    ('id_servicio',     'INTEGER',                  'Sí', 'Referencia al servicio'),
    ('unidades',        'NUMERIC',                  'Sí', 'Cantidad de unidades'),
    ('created_at',      'DATETIME',                 'Sí', 'Fecha de creación'),
    ('updated_at',      'DATETIME',                 'Sí', 'Última modificación'),
]:
    cells = t.add_row().cells
    for i, v in enumerate(row):
        cells[i].text = v
doc.add_paragraph()

# empresas
h2('Tabla: empresas')
t = doc.add_table(rows=1, cols=4)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Campo', 'Tipo', 'Nulo', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '1E3A8A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for row in [
    ('id_empresa',   'INTEGER PK AUTOINCREMENT', 'No',  'Identificador único'),
    ('nombre',       'TEXT',                      'No',  'Nombre de la empresa'),
    ('razon_social', 'TEXT',                      'Sí',  'Razón social'),
    ('cif',          'TEXT UNIQUE',                'Sí',  'CIF de la empresa'),
    ('id_direccion', 'INTEGER',                   'Sí',  'Referencia a dirección'),
    ('id_telefono',  'INTEGER',                   'Sí',  'Referencia a teléfono'),
    ('id_email',     'INTEGER',                   'Sí',  'Referencia a email'),
    ('created_at',   'DATETIME',                  'Sí',  'Fecha de creación'),
    ('updated_at',   'DATETIME',                  'Sí',  'Última modificación'),
]:
    cells = t.add_row().cells
    for i, v in enumerate(row):
        cells[i].text = v
doc.add_paragraph()

# contactos
h2('Tabla: contactos')
t = doc.add_table(rows=1, cols=4)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Campo', 'Tipo', 'Nulo', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '1E3A8A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for row in [
    ('id_contacto',  'INTEGER PK AUTOINCREMENT', 'No',  'Identificador único'),
    ('nombre',       'TEXT',                      'No',  'Nombre del contacto'),
    ('apellido1',    'TEXT',                      'Sí',  'Primer apellido'),
    ('apellido2',    'TEXT',                      'Sí',  'Segundo apellido'),
    ('id_direccion', 'INTEGER',                   'Sí',  'Referencia a dirección'),
    ('id_telefono',  'INTEGER',                   'Sí',  'Referencia a teléfono'),
    ('id_email',     'INTEGER',                   'Sí',  'Referencia a email'),
    ('created_at',   'DATETIME',                  'Sí',  'Fecha de creación'),
    ('updated_at',   'DATETIME',                  'Sí',  'Última modificación'),
]:
    cells = t.add_row().cells
    for i, v in enumerate(row):
        cells[i].text = v
doc.add_paragraph()

# contactos_empresas
h2('Tabla: contactos_empresas')
t = doc.add_table(rows=1, cols=4)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Campo', 'Tipo', 'Nulo', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '1E3A8A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for row in [
    ('id_contactos_empresas', 'INTEGER PK AUTOINCREMENT',   'No',  'Identificador único'),
    ('id_empresa',            'INTEGER FK → empresas',      'No',  'Empresa asociada'),
    ('id_contacto',           'INTEGER FK → contactos',     'No',  'Contacto asociado'),
    ('puesto',                'TEXT',                        'Sí',  'Puesto del contacto'),
    ('categoria',             'TEXT',                        'Sí',  'Categoría del contacto'),
    ('id_direccion',          'INTEGER',                    'Sí',  'Referencia a dirección'),
    ('id_telefono',           'INTEGER',                    'Sí',  'Referencia a teléfono'),
    ('id_email',              'INTEGER',                    'Sí',  'Referencia a email'),
    ('es_usuario',            'INTEGER',                    'Sí',  '1 si es usuario del sistema'),
    ('created_at',            'DATETIME',                   'Sí',  'Fecha de creación'),
    ('updated_at',            'DATETIME',                   'Sí',  'Última modificación'),
]:
    cells = t.add_row().cells
    for i, v in enumerate(row):
        cells[i].text = v
doc.add_paragraph()

# es (estaciones de servicio)
h2('Tabla: es (Estaciones de Servicio)')
t = doc.add_table(rows=1, cols=4)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Campo', 'Tipo', 'Nulo', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '1E3A8A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for row in [
    ('id_es',                 'INTEGER PK AUTOINCREMENT', 'No',  'Identificador único'),
    ('id_empresa',            'INTEGER FK → empresas',    'Sí',  'Empresa propietaria'),
    ('cod_es',                'TEXT',                     'Sí',  'Código de la estación'),
    ('cod_retailgas',         'TEXT',                     'Sí',  'Código Retailgas'),
    ('cod_sociedad',          'TEXT',                     'Sí',  'Código de sociedad'),
    ('cod_solred',            'TEXT',                     'Sí',  'Código SOLRED'),
    ('concesion',             'TEXT',                     'Sí',  'Concesión'),
    ('tipo',                  'TEXT',                     'Sí',  'Tipo de estación'),
    ('nombre',                'TEXT',                     'Sí',  'Nombre de la estación'),
    ('direccion',             'TEXT',                     'Sí',  'Dirección completa'),
    ('cod_postal',            'TEXT',                     'Sí',  'Código postal'),
    ('poblacion',             'TEXT',                     'Sí',  'Población'),
    ('provincia',             'TEXT',                     'Sí',  'Provincia'),
    ('ccaa',                  'TEXT',                     'Sí',  'Comunidad autónoma'),
    ('pais',                  'TEXT',                     'Sí',  'País (def: España)'),
    ('num_margenes',          'INTEGER',                  'Sí',  'Número de márgenes'),
    ('y_wgs84',               'REAL',                    'Sí',  'Coordenada Y (latitud)'),
    ('x_wgs84',               'REAL',                    'Sí',  'Coordenada X (longitud)'),
    ('vinculo',               'TEXT',                    'Sí',  'Vínculo'),
    ('vinculo_2',             'TEXT',                    'Sí',  'Vínculo secundario'),
    ('delegacion',            'TEXT',                    'Sí',  'Delegación'),
    ('delegado',              'TEXT',                    'Sí',  'Delegado asignado'),
    ('tecnico_gestion',       'TEXT',                    'Sí',  'Técnico de gestión'),
    ('tl_tecnico_gestion',    'TEXT',                    'Sí',  'Teléfono técnico gestión'),
    ('email_tecnico_gestion', 'TEXT',                    'Sí',  'Email técnico gestión'),
    ('responsable_gestor',    'TEXT',                    'Sí',  'Responsable gestor'),
    ('tel_movil',             'TEXT',                    'Sí',  'Teléfono móvil'),
    ('tl_oficina',            'TEXT',                    'Sí',  'Teléfono oficina'),
    ('sede_email',            'TEXT',                    'Sí',  'Email de la sede'),
    ('tipo_mantenimiento',    'TEXT',                    'Sí',  'Tipo de mantenimiento'),
    ('f_alta',                'DATE',                    'Sí',  'Fecha de alta'),
    ('f_baja',                'DATE',                    'Sí',  'Fecha de baja'),
    ('f_alta_modificacion',   'DATE',                    'Sí',  'Fecha modificación alta'),
    ('nif',                   'TEXT',                    'Sí',  'NIF de la estación'),
    ('horario_apertura',      'TEXT',                    'Sí',  'Horario de apertura'),
    ('created_at',            'DATETIME',                'Sí',  'Fecha de creación'),
    ('updated_at',            'DATETIME',                'Sí',  'Última modificación'),
]:
    cells = t.add_row().cells
    for i, v in enumerate(row):
        cells[i].text = v
doc.add_paragraph()

h2('Relaciones entre Tablas')
code_block(
    'users\n'
    '  (sin FK salientes)\n'
    '\n'
    'presupuestos\n'
    '  └─ presupuestos_lineas  (id_presupuesto → presupuestos.id_presupuesto)\n'
    '  └─ pedidos              (id_presupuesto → presupuestos.id_presupuesto)\n'
    '\n'
    'pedidos\n'
    '  └─ lineas_pedido        (id_pedido → pedidos.id_pedido)\n'
    '\n'
    'empresas\n'
    '  └─ contactos_empresas   (id_empresa → empresas.id_empresa)\n'
    '  └─ es                   (id_empresa → empresas.id_empresa)\n'
    '\n'
    'contactos\n'
    '  └─ contactos_empresas   (id_contacto → contactos.id_contacto)\n'
    '\n'
    'contactos_empresas\n'
    '  ├─ id_empresa  → empresas.id_empresa\n'
    '  └─ id_contacto → contactos.id_contacto'
)

page_break()

# ═══════════════════════════════════════════════════════════════════════════════
# 3. GUÍA DE INSTALACIÓN
# ═══════════════════════════════════════════════════════════════════════════════
h1('3. Guía de Instalación')

h2('3.1  Requisitos previos')
body('Instala las siguientes herramientas antes de continuar:')

h3('Python 3.11 o superior')
bullet('Descarga: https://www.python.org/downloads/')
bullet('Marca la opción "Add Python to PATH" durante la instalación.')
bullet('Verifica en terminal: python --version')

h3('Node.js 18 o superior (incluye npm)')
bullet('Descarga: https://nodejs.org/  (versión LTS recomendada)')
bullet('Verifica en terminal: node --version  y  npm --version')

h3('Angular CLI')
code_block('npm install -g @angular/cli')
bullet('Verifica: ng version')

h3('(Opcional) Visual Studio Code')
bullet('Descarga: https://code.visualstudio.com/')
bullet('Extensiones recomendadas: Python (Microsoft), Angular Language Service, '
       'SQLite Viewer (Florian Klampfer).')

doc.add_paragraph()
h2('3.2  Instalación del Backend')
body('Abre una terminal (PowerShell o CMD) y ejecuta:')
code_block(
    '# 1. Entra en la carpeta del backend\n'
    'cd C:\\Users\\Bernardo\\Documents\\erp-abaco\\backend\n'
    '\n'
    '# 2. Instala las dependencias\n'
    'python -m pip install -r requirements.txt\n'
    '\n'
    '# 3. Comprueba que no hay errores'
)
body('Si la instalación es correcta verás "Successfully installed ..." sin errores en rojo.')
body(
    'NOTA: No es necesario crear la base de datos manualmente. '
    'El servidor la crea automáticamente en el primer arranque.'
)

doc.add_paragraph()
h2('3.3  Instalación del Frontend')
body('Abre otra terminal y ejecuta:')
code_block(
    '# 1. Entra en la carpeta del frontend\n'
    'cd C:\\Users\\Bernardo\\Documents\\erp-abaco\\frontend\n'
    '\n'
    '# 2. Instala los paquetes de Node\n'
    'npm install\n'
    '\n'
    '# (puede tardar 1-2 minutos la primera vez)'
)

page_break()

# ═══════════════════════════════════════════════════════════════════════════════
# 4. CREDENCIALES
# ═══════════════════════════════════════════════════════════════════════════════
h1('4. Credenciales de Acceso')

h2('4.1  Usuario Administrador por Defecto')
body(
    'Al arrancar el backend por primera vez se crea automáticamente '
    'un usuario administrador con las siguientes credenciales:'
)
t = doc.add_table(rows=1, cols=2)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Campo', 'Valor']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '1E3A8A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for k, v in [
    ('Email',      'admin@ciete.es'),
    ('Contraseña', 'admin123'),
    ('Rol',        'admin'),
    ('Nombre',     'Admin'),
]:
    row = t.add_row().cells
    row[0].text = k
    row[1].text = v

doc.add_paragraph()
p = doc.add_paragraph()
run = p.add_run(
    '⚠  IMPORTANTE: Cambia la contraseña del administrador en producción. '
    'Puedes hacerlo directamente en la base de datos con un cliente SQLite '
    '(p.ej. DB Browser for SQLite) o añadiendo un endpoint de cambio de contraseña.'
)
run.font.color.rgb = RGBColor(0xB9, 0x1C, 0x1C)
run.font.bold = True

doc.add_paragraph()
h2('4.2  Clave Secreta JWT')
body(
    'La clave secreta usada para firmar los tokens JWT está definida en '
    'backend/auth.py en la constante SECRET_KEY. '
    'En un entorno de producción debe moverse a una variable de entorno.'
)
code_block(
    'SECRET_KEY = "4f3e2a1b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2"\n'
    'ALGORITHM  = "HS256"\n'
    'Expiración = 8 horas'
)

doc.add_paragraph()
h2('4.3  URLs de Acceso')
t = doc.add_table(rows=1, cols=2)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Servicio', 'URL']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '1E3A8A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for s, u in [
    ('Aplicación web (frontend)',     'http://localhost:4200'),
    ('API REST (backend)',            'http://localhost:8000'),
    ('Documentación Swagger (API)',   'http://localhost:8000/docs'),
    ('Documentación ReDoc (API)',     'http://localhost:8000/redoc'),
]:
    row = t.add_row().cells
    row[0].text = s
    row[1].text = u

page_break()

# ═══════════════════════════════════════════════════════════════════════════════
# 5. GUÍA DE USO DIARIO
# ═══════════════════════════════════════════════════════════════════════════════
h1('5. Guía de Uso Diario')

h2('5.1  Arrancar el Sistema (cada vez que quieras usar el ERP)')
body(
    'Para que la aplicación funcione necesitas tener DOS terminales abiertas '
    'de forma simultánea: una para el backend y otra para el frontend.'
)

h3('Terminal 1 — Backend')
code_block(
    'cd C:\\Users\\Bernardo\\Documents\\erp-abaco\\backend\n'
    'uvicorn main:app --reload'
)
body('Debes ver algo similar a:')
code_block(
    'INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)\n'
    'INFO:     Started reloader process [...]\n'
    'INFO:     Application startup complete.'
)
bullet('El flag --reload hace que el servidor se reinicie automáticamente al editar archivos Python.')
bullet('Deja esta terminal abierta mientras usas el ERP.')

doc.add_paragraph()
h3('Terminal 2 — Frontend')
code_block(
    'cd C:\\Users\\Bernardo\\Documents\\erp-abaco\\frontend\n'
    'ng serve'
)
body('Debes ver algo similar a:')
code_block(
    '✔ Compiled successfully.\n'
    'Watch mode enabled. Watching for file changes...\n'
    '  ➜  Local:   http://localhost:4200/'
)
bullet('Abre http://localhost:4200 en el navegador.')
bullet('El frontend se recompila automáticamente cuando editas archivos TypeScript/HTML/CSS.')
bullet('Deja esta terminal abierta mientras usas el ERP.')

doc.add_paragraph()
h2('5.2  Acceder a la Aplicación')
body('Abre el navegador y ve a: http://localhost:4200')
bullet('Introduce el email y contraseña del administrador.')
bullet('Al hacer login, tu sesión se guarda en el navegador (localStorage) y '
       'dura 8 horas antes de expirar.')

doc.add_paragraph()
h2('5.3  Flujo Principal: Presupuesto → Pedido')
steps = [
    ('1', 'Ir a Presupuestos',   'Haz clic en "Presupuestos" en el menú lateral.'),
    ('2', 'Nuevo Presupuesto',   'Pulsa "+ Nuevo Presupuesto", elige la fecha y añade líneas '
                                  '(id_servicio + unidades). Pulsa "Guardar".'),
    ('3', 'Enviar',              'En el detalle del presupuesto, cambia el estado a "Enviado" '
                                  'usando los botones de estado.'),
    ('4', 'Aprobar',             'Cuando el cliente acepte, cambia el estado a "Aprobado".'),
    ('5', 'Convertir a Pedido',  'Con estado "Aprobado" aparece el botón verde '
                                  '"Convertir a Pedido". Al pulsarlo se crea automáticamente '
                                  'el pedido copiando todos los datos y líneas.'),
    ('6', 'Gestionar el Pedido', 'Ve a la sección Pedidos para ver y gestionar el estado '
                                  'del pedido generado.'),
]
t = doc.add_table(rows=1, cols=3)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Paso', 'Acción', 'Detalle']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '16A34A')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for num, acc, det in steps:
    row = t.add_row().cells
    row[0].text = num
    row[1].text = acc
    row[2].text = det

doc.add_paragraph()
h2('5.4  Parar el Sistema')
bullet('En cada terminal pulsa Ctrl + C para detener el servidor.')
bullet('La base de datos se guarda automáticamente; no hay que hacer nada adicional.')

doc.add_paragraph()
h2('5.5  Preguntas Frecuentes')
faqs = [
    ('¿Se pierden los datos al parar?',
     'No. Los datos se guardan en backend/database.sqlite, que persiste entre reinicios.'),
    ('¿Cómo añadir nuevos usuarios?',
     'Desde la app ve a /auth/registro, o usa directamente el endpoint POST /auth/registro '
     'desde Swagger (http://localhost:8000/docs).'),
    ('El login dice "Credenciales incorrectas"',
     'Asegúrate de que el backend está corriendo en http://localhost:8000 '
     'y de que la terminal no muestra errores.'),
    ('¿Cómo ver la base de datos?',
     'Descarga "DB Browser for SQLite" (https://sqlitebrowser.org/) '
     'y abre el archivo backend/database.sqlite para explorar y editar tablas.'),
    ('¿Dónde cambiar la URL del backend?',
     'En frontend/src/environments/environment.ts, variable apiUrl.'),
]
for q, a in faqs:
    p = doc.add_paragraph()
    run = p.add_run(f'P: {q}')
    run.font.bold = True
    run.font.color.rgb = RGBColor(0x1E, 0x3A, 0x8A)
    p2 = doc.add_paragraph(f'R: {a}')
    p2.paragraph_format.left_indent = Inches(0.3)
    doc.add_paragraph()

page_break()

# ═══════════════════════════════════════════════════════════════════════════════
# 6. MÓDULO DE EMPRESAS
# ═══════════════════════════════════════════════════════════════════════════════
h1('6. Módulo de Empresas')

body(
    'El módulo de Empresas permite gestionar las empresas registradas en el sistema. '
    'Cada empresa se identifica por su CIF y puede tener contactos asociados a través '
    'de la tabla intermedia contactos_empresas.'
)

h2('6.1  Acceso')
bullet('Desde el Dashboard, haz clic en la tarjeta "Empresas".')
bullet('También puedes acceder desde el menú de navegación superior → Empresas.')

h2('6.2  Listado de Empresas')
bullet('Se muestra una tabla con ID, Nombre, Razón Social y CIF.')
bullet('Desde la lista puedes Ver el detalle, Editar o Eliminar cada empresa.')

h2('6.3  Crear una Empresa')
bullet('Pulsa el botón "+ Nueva Empresa".')
bullet('Rellena el formulario: Nombre (obligatorio), Razón Social y CIF.')
bullet('Pulsa "Guardar Empresa" para registrarla.')

h2('6.4  Editar una Empresa')
bullet('Desde el listado o el detalle, pulsa "Editar".')
bullet('Modifica los campos necesarios y pulsa "Actualizar".')

h2('6.5  Eliminar una Empresa')
bullet('Desde el listado, pulsa "Eliminar" en la fila correspondiente.')
bullet('Confirma la eliminación en el diálogo emergente.')
bullet('⚠ Se eliminarán también las relaciones en contactos_empresas y estaciones asociadas.')

h2('6.6  Endpoints API')
t = doc.add_table(rows=1, cols=3)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Método', 'Ruta', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], 'D97706')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for m, r, d in [
    ('GET',    '/empresas',               'Lista todas las empresas'),
    ('POST',   '/empresas',               'Crea una nueva empresa'),
    ('GET',    '/empresas/{id}',           'Detalle de una empresa'),
    ('PUT',    '/empresas/{id}',           'Actualiza una empresa'),
    ('DELETE', '/empresas/{id}',           'Elimina una empresa'),
    ('GET',    '/empresas/{id}/contactos', 'Contactos de una empresa'),
    ('POST',   '/empresas/{id}/contactos', 'Vincula contacto a empresa'),
]:
    row = t.add_row().cells
    row[0].text = m
    row[1].text = r
    row[2].text = d

page_break()

# ═══════════════════════════════════════════════════════════════════════════════
# 7. MÓDULO DE CONTACTOS
# ═══════════════════════════════════════════════════════════════════════════════
h1('7. Módulo de Contactos')

body(
    'El módulo de Contactos permite gestionar las personas de contacto. '
    'Un contacto puede vincularse a una o varias empresas a través de la '
    'tabla contactos_empresas, donde se registra su puesto y categoría.'
)

h2('7.1  Acceso')
bullet('Desde el Dashboard, haz clic en la tarjeta "Contactos".')
bullet('También puedes acceder desde el menú de navegación superior → Contactos.')

h2('7.2  Listado de Contactos')
bullet('Se muestra una tabla con ID, Nombre, Primer Apellido y Segundo Apellido.')
bullet('Desde la lista puedes Ver, Editar o Eliminar cada contacto.')

h2('7.3  Crear un Contacto')
bullet('Pulsa el botón "+ Nuevo Contacto".')
bullet('Rellena el formulario: Nombre (obligatorio), Primer Apellido y Segundo Apellido.')
bullet('Pulsa "Guardar Contacto" para registrarlo.')

h2('7.4  Editar un Contacto')
bullet('Desde el listado o el detalle, pulsa "Editar".')
bullet('Modifica los campos necesarios y pulsa "Actualizar".')

h2('7.5  Eliminar un Contacto')
bullet('Desde el listado, pulsa "Eliminar" en la fila correspondiente.')
bullet('Confirma la eliminación en el diálogo emergente.')

h2('7.6  Endpoints API')
t = doc.add_table(rows=1, cols=3)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Método', 'Ruta', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], '7C3AED')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for m, r, d in [
    ('GET',    '/contactos',       'Lista todos los contactos'),
    ('POST',   '/contactos',       'Crea un nuevo contacto'),
    ('GET',    '/contactos/{id}',  'Detalle de un contacto'),
    ('PUT',    '/contactos/{id}',  'Actualiza un contacto'),
    ('DELETE', '/contactos/{id}',  'Elimina un contacto'),
]:
    row = t.add_row().cells
    row[0].text = m
    row[1].text = r
    row[2].text = d

page_break()

# ═══════════════════════════════════════════════════════════════════════════════
# 8. MÓDULO DE ESTACIONES DE SERVICIO
# ═══════════════════════════════════════════════════════════════════════════════
h1('8. Módulo de Estaciones de Servicio')

body(
    'El módulo de Estaciones de Servicio (ES) gestiona la información completa de cada '
    'estación: identificación, códigos, ubicación geográfica, datos de gestión, '
    'contacto y fechas operativas. Cada estación puede estar vinculada a una empresa.'
)

h2('8.1  Acceso')
bullet('Desde el Dashboard, haz clic en la tarjeta "Estaciones de Servicio".')
bullet('También puedes acceder desde el menú de navegación superior → Estaciones.')

h2('8.2  Listado de Estaciones')
bullet('Se muestra una tabla con ID, Código ES, Nombre, Población, Provincia y Tipo.')
bullet('Desde la lista puedes Ver, Editar o Eliminar cada estación.')

h2('8.3  Crear una Estación')
bullet('Pulsa el botón "+ Nueva Estación".')
bullet('El formulario se organiza en secciones: Identificación, Códigos, Ubicación, '
       'Gestión, Contacto y Fechas.')
bullet('Rellena los campos necesarios y pulsa "Guardar Estación".')

h2('8.4  Editar una Estación')
bullet('Desde el listado o el detalle, pulsa "Editar".')
bullet('Modifica los campos necesarios y pulsa "Actualizar".')

h2('8.5  Eliminar una Estación')
bullet('Desde el listado, pulsa "Eliminar" en la fila correspondiente.')
bullet('Confirma la eliminación en el diálogo emergente.')

h2('8.6  Campos de la Estación')
body('La ficha de una estación contiene los siguientes grupos de información:')
bullet('Identificación: nombre, código ES, tipo, NIF, concesión, empresa asociada.')
bullet('Códigos: Retailgas, sociedad, SOLRED, vínculos.')
bullet('Ubicación: dirección, CP, población, provincia, CCAA, país, coordenadas.')
bullet('Gestión: delegación, delegado, técnico de gestión, responsable, mantenimiento.')
bullet('Contacto: teléfono móvil, teléfono oficina, email de la sede.')
bullet('Fechas: alta, baja, modificación de alta, horario de apertura.')

h2('8.7  Endpoints API')
t = doc.add_table(rows=1, cols=3)
t.style = 'Light Grid Accent 1'
for i, h in enumerate(['Método', 'Ruta', 'Descripción']):
    t.rows[0].cells[i].text = h
    shade_cell(t.rows[0].cells[i], 'DC2626')
    t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF,0xFF,0xFF)
    t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
for m, r, d in [
    ('GET',    '/estaciones',       'Lista todas las estaciones'),
    ('POST',   '/estaciones',       'Crea una nueva estación'),
    ('GET',    '/estaciones/{id}',  'Detalle de una estación'),
    ('PUT',    '/estaciones/{id}',  'Actualiza una estación'),
    ('DELETE', '/estaciones/{id}',  'Elimina una estación'),
]:
    row = t.add_row().cells
    row[0].text = m
    row[1].text = r
    row[2].text = d

# ═══════════════════════════════════════════════════════════════════════════════
# PIE DE PÁGINA
# ═══════════════════════════════════════════════════════════════════════════════
section = doc.sections[0]
footer = section.footer
p = footer.paragraphs[0]
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p.add_run(f'ERP Ciete Ingenieros · Documentación Técnica v2.0 · {datetime.date.today().strftime("%d/%m/%Y")}')
run.font.size = Pt(9)
run.font.color.rgb = RGBColor(0x94, 0xA3, 0xB8)

# GUARDAR
output_path = r'C:\Users\Bernardo\Documents\erp-abaco\Documentacion_ERP_Ciete.docx'
doc.save(output_path)
print(f'[OK] Documento guardado en: {output_path}')

# Guardar también copia en backend/
import shutil
backend_copy = r'C:\Users\Bernardo\Documents\erp-abaco\backend\Documentacion_ERP_Ciete.docx'
shutil.copy2(output_path, backend_copy)
print(f'[OK] Copia guardada en: {backend_copy}')
