import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { EstacionesService } from '../../../core/services/estaciones.service';

@Component({
  selector: 'app-estaciones-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Estaciones de Servicio</h1>
        <a routerLink="/estaciones/new" class="btn btn-primary">+ Nueva Estación</a>
      </div>

      <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Código ES</th>
                <th>Nombre</th>
                <th>Población</th>
                <th>Provincia</th>
                <th>Tipo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let es of estaciones">
                <td><strong>#{{ es.id_es }}</strong></td>
                <td>{{ es.cod_es || '—' }}</td>
                <td>{{ es.nombre || '—' }}</td>
                <td>{{ es.poblacion || '—' }}</td>
                <td>{{ es.provincia || '—' }}</td>
                <td>
                  <span *ngIf="es.tipo" class="badge badge-tipo">{{ es.tipo }}</span>
                  <span *ngIf="!es.tipo">—</span>
                </td>
                <td class="actions-cell">
                  <a [routerLink]="['/estaciones', es.id_es]" class="btn btn-sm btn-outline">Ver</a>
                  <a [routerLink]="['/estaciones', es.id_es, 'edit']" class="btn btn-sm btn-secondary">Editar</a>
                  <button class="btn btn-sm btn-danger" (click)="eliminar(es)">Eliminar</button>
                </td>
              </tr>
              <tr *ngIf="estaciones.length === 0 && !loading">
                <td colspan="7" style="text-align:center; color:#94a3b8; padding:32px">No hay estaciones registradas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div *ngIf="loading" style="text-align:center; padding:32px; color:#64748b">Cargando...</div>
      </div>
    </div>
  `,
  styleUrls: ['./estaciones-list.component.css']
})
export class EstacionesListComponent implements OnInit {
  estaciones: any[] = [];
  loading = true;
  successMsg = '';

  constructor(private service: EstacionesService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.estaciones = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  eliminar(estacion: any): void {
    if (confirm(`¿Eliminar la estación "${estacion.nombre || estacion.cod_es}"?`)) {
      this.service.delete(estacion.id_es).subscribe({
        next: () => {
          this.successMsg = 'Estación eliminada correctamente';
          this.estaciones = this.estaciones.filter(e => e.id_es !== estacion.id_es);
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
