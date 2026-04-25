import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FacturasService } from '../../../core/services/facturas.service';
import { EmpresasService } from '../../../core/services/empresas.service';

@Component({
  selector: 'app-facturas-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Facturas</h1>
        <a routerLink="/facturas/new" class="btn btn-primary">+ Nueva Factura</a>
      </div>

      <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Nº Factura</th>
                <th>Empresa</th>
                <th>Fecha</th>
                <th>Importe total</th>
                <th>Estado cobro</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let f of facturas">
                <td><strong>{{ f.numero_factura || '#' + f.id_factura }}</strong></td>
                <td>{{ getNombreEmpresa(f.id_empresa) }}</td>
                <td>{{ f.fecha_factura || '—' }}</td>
                <td>{{ (f.importe_total | number:'1.2-2') || '—' }} €</td>
                <td>
                  <span [class]="getEstadoCobro(f).clase">{{ getEstadoCobro(f).label }}</span>
                </td>
                <td class="actions-cell">
                  <a [routerLink]="['/facturas', f.id_factura]" class="btn btn-sm btn-outline">Ver</a>
                  <button class="btn btn-sm btn-danger" (click)="eliminar(f)">Eliminar</button>
                </td>
              </tr>
              <tr *ngIf="facturas.length === 0 && !loading">
                <td colspan="6" style="text-align:center; color:#94a3b8; padding:32px">No hay facturas registradas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div *ngIf="loading" style="text-align:center; padding:32px; color:#64748b">Cargando...</div>
      </div>
    </div>
  `,
  styleUrls: ['./facturas-list.component.css']
})
export class FacturasListComponent implements OnInit {
  facturas: any[] = [];
  empresas: any[] = [];
  loading = true;
  successMsg = '';

  constructor(
    private service: FacturasService,
    private empresasService: EmpresasService
  ) {}

  ngOnInit(): void {
    this.empresasService.getAll().subscribe({ next: (d) => this.empresas = d });
    this.service.getAll().subscribe({
      next: (data) => { this.facturas = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  getNombreEmpresa(id: number): string {
    const e = this.empresas.find(x => x.id_empresa === id);
    return e ? e.nombre : (id ? `#${id}` : '—');
  }

  getEstadoCobro(f: any): { label: string; clase: string } {
    const total = parseFloat(f.importe_total) || 0;
    const cobrado = (f.cobros || []).reduce((s: number, c: any) => s + parseFloat(c.importe || 0), 0);
    if (cobrado <= 0) return { label: 'Pendiente', clase: 'badge-pendiente' };
    if (cobrado >= total) return { label: 'Cobrada', clase: 'badge-aprobado' };
    return { label: 'Cobro parcial', clase: 'badge-borrador' };
  }

  eliminar(f: any): void {
    if (confirm(`¿Eliminar la factura "${f.numero_factura || f.id_factura}"?`)) {
      this.service.delete(f.id_factura).subscribe({
        next: () => {
          this.successMsg = 'Factura eliminada correctamente';
          this.facturas = this.facturas.filter(x => x.id_factura !== f.id_factura);
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
