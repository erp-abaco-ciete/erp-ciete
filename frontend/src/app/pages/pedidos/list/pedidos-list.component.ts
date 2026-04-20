import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PedidosService } from '../../../core/services/pedidos.service';

@Component({
  selector: 'app-pedidos-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Pedidos</h1>
      </div>
      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha solicitud</th>
                <th>Estado</th>
                <th>Presupuesto origen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let p of pedidos">
                <td><strong>#{{ p.id_pedido }}</strong></td>
                <td>{{ p.fecha_solicitud_pedido || '—' }}</td>
                <td>
                  <span class="badge badge-{{ p.estado }}">{{ p.estado }}</span>
                </td>
                <td>
                  <a *ngIf="p.id_presupuesto" [routerLink]="['/presupuestos', p.id_presupuesto]">
                    #{{ p.id_presupuesto }}
                  </a>
                  <span *ngIf="!p.id_presupuesto">—</span>
                </td>
                <td>
                  <a [routerLink]="['/pedidos', p.id_pedido]" class="btn btn-sm btn-outline">Ver</a>
                </td>
              </tr>
              <tr *ngIf="pedidos.length === 0 && !loading">
                <td colspan="5" style="text-align:center; color:#94a3b8; padding:32px">No hay pedidos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div *ngIf="loading" style="text-align:center; padding:32px; color:#64748b">Cargando...</div>
      </div>
    </div>
  `,
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {
  pedidos: any[] = [];
  loading = true;

  constructor(private service: PedidosService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.pedidos = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
