import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Rutas con parámetros dinámicos → renderizar en el servidor por petición
  { path: 'presupuestos/:id',              renderMode: RenderMode.Server },
  { path: 'presupuestos/new',              renderMode: RenderMode.Server },
  { path: 'pedidos/:id',                   renderMode: RenderMode.Server },
  { path: 'facturas/:id',                  renderMode: RenderMode.Server },
  { path: 'facturas/new',                  renderMode: RenderMode.Server },
  { path: 'contactos/:id',                 renderMode: RenderMode.Server },
  { path: 'contactos/new',                 renderMode: RenderMode.Server },
  { path: 'contactos/:id/edit',            renderMode: RenderMode.Server },
  { path: 'empresas/:id',                  renderMode: RenderMode.Server },
  { path: 'empresas/new',                  renderMode: RenderMode.Server },
  { path: 'empresas/:id/edit',             renderMode: RenderMode.Server },
  { path: 'estaciones-servicio/:id',       renderMode: RenderMode.Server },
  { path: 'estaciones-servicio/new',       renderMode: RenderMode.Server },
  { path: 'estaciones-servicio/:id/edit',  renderMode: RenderMode.Server },
  { path: 'contratos/new',                 renderMode: RenderMode.Server },
  { path: 'contratos/:id/edit',            renderMode: RenderMode.Server },
  { path: 'tarifario/new',                 renderMode: RenderMode.Server },
  { path: 'tarifario/:id',                 renderMode: RenderMode.Server },
  { path: 'usuarios/new',                  renderMode: RenderMode.Server },
  { path: 'usuarios/:id/edit',             renderMode: RenderMode.Server },

  // Resto de rutas → prerender estático
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
