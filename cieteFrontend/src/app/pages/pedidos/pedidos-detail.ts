import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { PedidosService } from '../../core/services/pedidos.service';

@Component({
  selector: 'app-pedidos-detail',
  imports: [CommonModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center;padding:48px;color:#64748b">Cargando...</div>
      <ng-container *ngIf="!loading && pedido">
        <div class="page-header">
          <h1>Pedido #{{ pedido.id_pedido }}</h1>
          <a routerLink="/pedidos" class="btn btn-outline">← Volver</a>
        </div>

        <div class="detail-grid">
          <div class="card">
            <div class="section-title">Datos generales</div>
            <div class="detail-row"><span>Fecha solicitud</span><strong>{{ pedido.fecha_solicitud_pedido || '—' }}</strong></div>
            <div class="detail-row"><span>Estado</span><span class="badge badge-{{ pedido.estado }}">{{ pedido.estado }}</span></div>
            <div class="detail-row"><span>Presupuesto origen</span>
              <a *ngIf="pedido.id_presupuesto" [routerLink]="['/presupuestos', pedido.id_presupuesto]">#{{ pedido.id_presupuesto }}</a>
              <span *ngIf="!pedido.id_presupuesto">—</span>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="section-title">Líneas del pedido</div>
          <div class="table-wrapper">
            <table>
              <thead><tr><th>ID Línea</th><th>ID Servicio</th><th>Unidades</th></tr></thead>
              <tbody>
                <tr *ngFor="let l of pedido.lineas">
                  <td>{{ l.id_linea_pedido }}</td>
                  <td>{{ l.id_servicio || '—' }}</td>
                  <td>{{ l.unidades || '—' }}</td>
                </tr>
                <tr *ngIf="!pedido.lineas?.length">
                  <td colspan="3" style="text-align:center;color:#94a3b8;padding:24px">Sin líneas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ng-container>
    </div>
  `
})
export class PedidosDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(PedidosService);

  pedido: any = null;
  loading = true;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe({
      next: (data) => { this.pedido = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
