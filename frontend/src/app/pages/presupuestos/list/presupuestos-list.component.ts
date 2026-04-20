import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PresupuestosService } from '../../../core/services/presupuestos.service';

@Component({
  selector: 'app-presupuestos-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Presupuestos</h1>
        <a routerLink="/presupuestos/new" class="btn btn-primary">+ Nuevo Presupuesto</a>
      </div>
      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Líneas</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let p of presupuestos">
                <td><strong>#{{ p.id_presupuesto }}</strong></td>
                <td>{{ p.fecha_presupuesto || '—' }}</td>
                <td>
                  <span class="badge badge-{{ p.estado }}">{{ p.estado }}</span>
                </td>
                <td>{{ p.lineas?.length || 0 }}</td>
                <td>
                  <a [routerLink]="['/presupuestos', p.id_presupuesto]" class="btn btn-sm btn-outline">Ver</a>
                </td>
              </tr>
              <tr *ngIf="presupuestos.length === 0 && !loading">
                <td colspan="5" style="text-align:center; color:#94a3b8; padding:32px">No hay presupuestos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div *ngIf="loading" style="text-align:center; padding:32px; color:#64748b">Cargando...</div>
      </div>
    </div>
  `,
  styleUrls: ['./presupuestos-list.component.css']
})
export class PresupuestosListComponent implements OnInit {
  presupuestos: any[] = [];
  loading = true;

  constructor(private service: PresupuestosService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.presupuestos = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
