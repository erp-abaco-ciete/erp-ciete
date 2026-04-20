import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PedidosService } from '../../../core/services/pedidos.service';

@Component({
  selector: 'app-pedidos-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center; padding:48px; color:#64748b">Cargando...</div>
      <div *ngIf="!loading && pedido">
        <div class="page-header">
          <h1>Pedido #{{ pedido.id_pedido }}</h1>
          <a routerLink="/pedidos" class="btn btn-outline">← Volver a pedidos</a>
        </div>

        <div class="detail-grid">
          <div class="card">
            <h3 class="section-title">Datos del pedido</h3>
            <div class="detail-row"><span>Estado</span>
              <span class="badge badge-{{ pedido.estado }}">{{ pedido.estado }}</span>
            </div>
            <div class="detail-row"><span>Fecha solicitud</span><strong>{{ pedido.fecha_solicitud_pedido || '—' }}</strong></div>
            <div class="detail-row"><span>Fecha autofactura</span><strong>{{ pedido.fecha_solicitud_autofactura || '—' }}</strong></div>
            <div class="detail-row"><span>Fecha recepción</span><strong>{{ pedido.fecha_recepcion_pedido || '—' }}</strong></div>
          </div>

          <div class="card" *ngIf="pedido.id_presupuesto">
            <h3 class="section-title">Presupuesto de origen</h3>
            <div class="detail-row">
              <span>Presupuesto</span>
              <a [routerLink]="['/presupuestos', pedido.id_presupuesto]" class="btn btn-sm btn-outline">
                Ver Presupuesto #{{ pedido.id_presupuesto }}
              </a>
            </div>
            <div class="detail-row" *ngIf="pedido.presupuesto">
              <span>Estado presupuesto</span>
              <span class="badge badge-{{ pedido.presupuesto.estado }}">{{ pedido.presupuesto.estado }}</span>
            </div>
          </div>
        </div>

        <div class="card" style="margin-top:20px">
          <h3 class="section-title">Líneas del pedido</h3>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr><th>ID Línea</th><th>ID Servicio</th><th>Unidades</th></tr>
              </thead>
              <tbody>
                <tr *ngFor="let l of pedido.lineas">
                  <td>{{ l.id_linea_pedido }}</td>
                  <td>{{ l.id_servicio || '—' }}</td>
                  <td>{{ l.unidades || '—' }}</td>
                </tr>
                <tr *ngIf="!pedido.lineas?.length">
                  <td colspan="3" style="text-align:center; color:#94a3b8; padding:24px">Sin líneas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./pedidos-detail.component.css']
})
export class PedidosDetailComponent implements OnInit {
  pedido: any = null;
  loading = true;

  constructor(private route: ActivatedRoute, private service: PedidosService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe({
      next: (data) => { this.pedido = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
