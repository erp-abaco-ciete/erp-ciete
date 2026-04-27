import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Proyectos } from './pages/proyectos/proyectos';
import { EstacionesServicio } from './pages/estaciones-servicio/estaciones-servicio';
import { Pedidos } from './pages/pedidos/pedidos';
import { Facturas } from './pages/facturas/facturas';
import { Contactos } from './pages/contactos/contactos';
import { Empresas } from './pages/empresas/empresas';
import { ContratosTarifarios } from './pages/contratos-tarifarios/contratos-tarifarios';
import { Presupuestos } from './pages/presupuestos/presupuestos';
import { Login } from './auth/login/login';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Landing, canActivate: [authGuard] },
  { path: 'login', component: Login },

  // Presupuestos
  { path: 'presupuestos', component: Presupuestos, canActivate: [authGuard] },
  {
    path: 'presupuestos/new',
    loadComponent: () => import('./pages/presupuestos/presupuestos-form').then(m => m.PresupuestosForm),
    canActivate: [authGuard]
  },
  {
    path: 'presupuestos/:id',
    loadComponent: () => import('./pages/presupuestos/presupuestos-detail').then(m => m.PresupuestosDetail),
    canActivate: [authGuard]
  },

  // Pedidos
  { path: 'pedidos', component: Pedidos, canActivate: [authGuard] },
  {
    path: 'pedidos/:id',
    loadComponent: () => import('./pages/pedidos/pedidos-detail').then(m => m.PedidosDetail),
    canActivate: [authGuard]
  },

  // Facturas
  { path: 'facturas', component: Facturas, canActivate: [authGuard] },
  {
    path: 'facturas/new',
    loadComponent: () => import('./pages/facturas/facturas-form').then(m => m.FacturasForm),
    canActivate: [authGuard]
  },
  {
    path: 'facturas/:id',
    loadComponent: () => import('./pages/facturas/facturas-detail').then(m => m.FacturasDetail),
    canActivate: [authGuard]
  },

  // Contactos
  { path: 'contactos', component: Contactos, canActivate: [authGuard] },
  {
    path: 'contactos/new',
    loadComponent: () => import('./pages/contactos/contactos-form').then(m => m.ContactosForm),
    canActivate: [authGuard]
  },
  {
    path: 'contactos/:id/edit',
    loadComponent: () => import('./pages/contactos/contactos-form').then(m => m.ContactosForm),
    canActivate: [authGuard]
  },
  {
    path: 'contactos/:id',
    loadComponent: () => import('./pages/contactos/contactos-detail').then(m => m.ContactosDetail),
    canActivate: [authGuard]
  },

  // Empresas
  { path: 'empresas', component: Empresas, canActivate: [authGuard] },
  {
    path: 'empresas/new',
    loadComponent: () => import('./pages/empresas/empresas-form').then(m => m.EmpresasForm),
    canActivate: [authGuard]
  },
  {
    path: 'empresas/:id/edit',
    loadComponent: () => import('./pages/empresas/empresas-form').then(m => m.EmpresasForm),
    canActivate: [authGuard]
  },
  {
    path: 'empresas/:id',
    loadComponent: () => import('./pages/empresas/empresas-detail').then(m => m.EmpresasDetail),
    canActivate: [authGuard]
  },

  // Estaciones de Servicio
  { path: 'estaciones-servicio', component: EstacionesServicio, canActivate: [authGuard] },
  {
    path: 'estaciones-servicio/new',
    loadComponent: () => import('./pages/estaciones-servicio/estaciones-form').then(m => m.EstacionesForm),
    canActivate: [authGuard]
  },
  {
    path: 'estaciones-servicio/:id/edit',
    loadComponent: () => import('./pages/estaciones-servicio/estaciones-form').then(m => m.EstacionesForm),
    canActivate: [authGuard]
  },
  {
    path: 'estaciones-servicio/:id',
    loadComponent: () => import('./pages/estaciones-servicio/estaciones-detail').then(m => m.EstacionesDetail),
    canActivate: [authGuard]
  },

  // Contratos-Tarifarios (hub combinado)
  { path: 'contratos-tarifarios', component: ContratosTarifarios, canActivate: [authGuard] },

  // Contratos (sub-rutas desde el hub)
  {
    path: 'contratos/new',
    loadComponent: () => import('./pages/contratos-tarifarios/contratos-form').then(m => m.ContratosForm),
    canActivate: [authGuard]
  },
  {
    path: 'contratos/:id/edit',
    loadComponent: () => import('./pages/contratos-tarifarios/contratos-form').then(m => m.ContratosForm),
    canActivate: [authGuard]
  },

  // Tarifario (sub-rutas desde el hub)
  {
    path: 'tarifario/new',
    loadComponent: () => import('./pages/contratos-tarifarios/tarifario-form').then(m => m.TarifarioForm),
    canActivate: [authGuard]
  },
  {
    path: 'tarifario/:id',
    loadComponent: () => import('./pages/contratos-tarifarios/tarifario-detail').then(m => m.TarifarioDetail),
    canActivate: [authGuard]
  },

  // Usuarios
  {
    path: 'usuarios',
    loadComponent: () => import('./pages/usuarios/usuarios').then(m => m.Usuarios),
    canActivate: [authGuard]
  },
  {
    path: 'usuarios/new',
    loadComponent: () => import('./pages/usuarios/usuarios-form').then(m => m.UsuariosForm),
    canActivate: [authGuard]
  },
  {
    path: 'usuarios/:id/edit',
    loadComponent: () => import('./pages/usuarios/usuarios-form').then(m => m.UsuariosForm),
    canActivate: [authGuard]
  },

  // Proyectos
  { path: 'proyectos', component: Proyectos, canActivate: [authGuard] },

  { path: '**', redirectTo: '' }
];
