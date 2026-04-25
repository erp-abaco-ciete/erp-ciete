import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { permisosGuard } from './core/guards/permisos.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: 'presupuestos',
    loadComponent: () =>
      import('./pages/presupuestos/list/presupuestos-list.component').then(m => m.PresupuestosListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'presupuestos/new',
    loadComponent: () =>
      import('./pages/presupuestos/form/presupuestos-form.component').then(m => m.PresupuestosFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'presupuestos/:id',
    loadComponent: () =>
      import('./pages/presupuestos/detail/presupuestos-detail.component').then(m => m.PresupuestosDetailComponent),
    canActivate: [authGuard]
  },
  {
    path: 'pedidos',
    loadComponent: () =>
      import('./pages/pedidos/list/pedidos-list.component').then(m => m.PedidosListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'pedidos/:id',
    loadComponent: () =>
      import('./pages/pedidos/detail/pedidos-detail.component').then(m => m.PedidosDetailComponent),
    canActivate: [authGuard]
  },
  // --- Empresas ---
  {
    path: 'empresas',
    loadComponent: () =>
      import('./pages/empresas/list/empresas-list.component').then(m => m.EmpresasListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'empresas/new',
    loadComponent: () =>
      import('./pages/empresas/form/empresas-form.component').then(m => m.EmpresasFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'empresas/:id',
    loadComponent: () =>
      import('./pages/empresas/detail/empresas-detail.component').then(m => m.EmpresasDetailComponent),
    canActivate: [authGuard]
  },
  {
    path: 'empresas/:id/edit',
    loadComponent: () =>
      import('./pages/empresas/form/empresas-form.component').then(m => m.EmpresasFormComponent),
    canActivate: [authGuard]
  },
  // --- Contactos ---
  {
    path: 'contactos',
    loadComponent: () =>
      import('./pages/contactos/list/contactos-list.component').then(m => m.ContactosListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'contactos/new',
    loadComponent: () =>
      import('./pages/contactos/form/contactos-form.component').then(m => m.ContactosFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'contactos/:id',
    loadComponent: () =>
      import('./pages/contactos/detail/contactos-detail.component').then(m => m.ContactosDetailComponent),
    canActivate: [authGuard]
  },
  {
    path: 'contactos/:id/edit',
    loadComponent: () =>
      import('./pages/contactos/form/contactos-form.component').then(m => m.ContactosFormComponent),
    canActivate: [authGuard]
  },
  // --- Estaciones de Servicio ---
  {
    path: 'estaciones',
    loadComponent: () =>
      import('./pages/estaciones/list/estaciones-list.component').then(m => m.EstacionesListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'estaciones/new',
    loadComponent: () =>
      import('./pages/estaciones/form/estaciones-form.component').then(m => m.EstacionesFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'estaciones/:id',
    loadComponent: () =>
      import('./pages/estaciones/detail/estaciones-detail.component').then(m => m.EstacionesDetailComponent),
    canActivate: [authGuard]
  },
  {
    path: 'estaciones/:id/edit',
    loadComponent: () =>
      import('./pages/estaciones/form/estaciones-form.component').then(m => m.EstacionesFormComponent),
    canActivate: [authGuard]
  },
  // --- Usuarios ---
  {
    path: 'usuarios',
    loadComponent: () =>
      import('./pages/usuarios/list/usuarios-list.component').then(m => m.UsuariosListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'usuarios/new',
    loadComponent: () =>
      import('./pages/usuarios/form/usuarios-form.component').then(m => m.UsuariosFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'usuarios/:id/edit',
    loadComponent: () =>
      import('./pages/usuarios/form/usuarios-form.component').then(m => m.UsuariosFormComponent),
    canActivate: [authGuard]
  },
  // --- Contratos ---
  {
    path: 'contratos',
    loadComponent: () =>
      import('./pages/contratos/list/contratos-list.component').then(m => m.ContratosListComponent),
    canActivate: [authGuard, permisosGuard],
    data: { modulo: 'contratos' }
  },
  {
    path: 'contratos/new',
    loadComponent: () =>
      import('./pages/contratos/form/contratos-form.component').then(m => m.ContratosFormComponent),
    canActivate: [authGuard, permisosGuard],
    data: { modulo: 'contratos' }
  },
  {
    path: 'contratos/:id/edit',
    loadComponent: () =>
      import('./pages/contratos/form/contratos-form.component').then(m => m.ContratosFormComponent),
    canActivate: [authGuard, permisosGuard],
    data: { modulo: 'contratos' }
  },
  // --- Tarifario ---
  {
    path: 'tarifario',
    loadComponent: () =>
      import('./pages/tarifario/list/tarifario-list.component').then(m => m.TarifarioListComponent),
    canActivate: [authGuard, permisosGuard],
    data: { modulo: 'tarifario' }
  },
  {
    path: 'tarifario/new',
    loadComponent: () =>
      import('./pages/tarifario/form/tarifario-form.component').then(m => m.TarifarioFormComponent),
    canActivate: [authGuard, permisosGuard],
    data: { modulo: 'tarifario' }
  },
  {
    path: 'tarifario/:id',
    loadComponent: () =>
      import('./pages/tarifario/detail/tarifario-detail.component').then(m => m.TarifarioDetailComponent),
    canActivate: [authGuard, permisosGuard],
    data: { modulo: 'tarifario' }
  },
  // --- Facturas ---
  {
    path: 'facturas',
    loadComponent: () =>
      import('./pages/facturas/list/facturas-list.component').then(m => m.FacturasListComponent),
    canActivate: [authGuard, permisosGuard],
    data: { modulo: 'facturas' }
  },
  {
    path: 'facturas/new',
    loadComponent: () =>
      import('./pages/facturas/form/facturas-form.component').then(m => m.FacturasFormComponent),
    canActivate: [authGuard, permisosGuard],
    data: { modulo: 'facturas' }
  },
  {
    path: 'facturas/:id',
    loadComponent: () =>
      import('./pages/facturas/detail/facturas-detail.component').then(m => m.FacturasDetailComponent),
    canActivate: [authGuard, permisosGuard],
    data: { modulo: 'facturas' }
  },
];
