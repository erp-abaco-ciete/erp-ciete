import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { PresupuestosService } from '../../core/services/presupuestos.service';

@Component({
  selector: 'app-presupuestos-detail',
  imports: [CommonModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center;padding:48px;color:#64748b">Cargando...</div>
      <ng-container *ngIf="!loading && presupuesto">
        <div class="page-header">
          <h1>Presupuesto #{{ presupuesto.id_presupuesto }}</h1>
          <a routerLink="/presupuestos" class="btn btn-outline">← Volver</a>
        </div>
        <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
        <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

        <div class="detail-grid">
          <div class="card">
            <div class="section-title">Datos generales</div>
            <div class="detail-row"><span>Fecha</span><strong>{{ presupuesto.fecha_presupuesto || '—' }}</strong></div>
            <div class="detail-row"><span>Estado</span><span class="badge badge-{{ presupuesto.estado }}">{{ presupuesto.estado }}</span></div>
          </div>
          <div class="card">
            <div class="section-title">Cambiar estado</div>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              <button *ngFor="let e of estados" class="btn btn-sm"
                [style.background]="presupuesto.estado === e.value ? e.color : ''"
                [style.color]="presupuesto.estado === e.value ? '#fff' : ''"
                [style.borderColor]="presupuesto.estado === e.value ? e.color : ''"
                (click)="cambiarEstado(e.value)">{{ e.label }}</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="section-title">Líneas del presupuesto</div>
          <div class="table-wrapper">
            <table>
              <thead><tr><th>ID Línea</th><th>ID Servicio</th><th>Unidades</th></tr></thead>
              <tbody>
                <tr *ngFor="let l of presupuesto.lineas">
                  <td>{{ l.id_linea_presupuesto }}</td>
                  <td>{{ l.id_servicio || '—' }}</td>
                  <td>{{ l.unidades || '—' }}</td>
                </tr>
                <tr *ngIf="!presupuesto.lineas?.length">
                  <td colspan="3" style="text-align:center;color:#94a3b8;padding:24px">Sin líneas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div *ngIf="presupuesto.estado === 'aprobado'" style="margin-top:1rem">
          <button class="btn btn-success" (click)="convertir()" [disabled]="converting">
            {{ converting ? 'Convirtiendo...' : '✓ Convertir a Pedido' }}
          </button>
        </div>
      </ng-container>
    </div>
  `
})
export class PresupuestosDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(PresupuestosService);

  presupuesto: any = null;
  loading = true;
  converting = false;
  errorMsg = '';
  successMsg = '';

  estados = [
    { value: 'borrador', label: 'Borrador', color: '#475569' },
    { value: 'enviado', label: 'Enviado', color: '#1d4ed8' },
    { value: 'aprobado', label: 'Aprobado', color: '#16a34a' },
    { value: 'rechazado', label: 'Rechazado', color: '#dc2626' },
  ];

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe({
      next: (data) => { this.presupuesto = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  cambiarEstado(estado: string): void {
    this.service.cambiarEstado(this.presupuesto.id_presupuesto, estado).subscribe({
      next: (data) => {
        this.presupuesto = data;
        this.successMsg = `Estado actualizado a "${estado}"`;
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: () => { this.errorMsg = 'Error al cambiar el estado'; }
    });
  }

  convertir(): void {
    this.converting = true;
    this.service.convertir(this.presupuesto.id_presupuesto).subscribe({
      next: (pedido: any) => this.router.navigate(['/pedidos', pedido.id_pedido]),
      error: (err) => { this.errorMsg = err?.error?.detail || 'Error al convertir'; this.converting = false; }
    });
  }
}
