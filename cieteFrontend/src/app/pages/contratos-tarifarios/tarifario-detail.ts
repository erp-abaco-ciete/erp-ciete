import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../shared/navbar/navbar';
import { TarifarioService } from '../../core/services/tarifario.service';

@Component({
  selector: 'app-tarifario-detail',
  imports: [CommonModule, RouterLink, FormsModule, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center;padding:48px;color:#64748b">Cargando...</div>
      <ng-container *ngIf="!loading && tarifario">
        <div class="page-header">
          <h1>{{ tarifario.nombre_tarifario }}</h1>
          <div style="display:flex;gap:8px">
            <a [routerLink]="['/tarifario', tarifario.id_tarifario, 'edit']" class="btn btn-secondary">Editar tarifario</a>
            <a routerLink="/contratos-tarifarios" class="btn btn-outline">← Volver</a>
          </div>
        </div>
        <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
        <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

        <div class="card" style="margin-bottom:1.5rem">
          <div class="section-title">Datos del tarifario</div>
          <div class="detail-row"><span>Descripción</span><strong>{{ tarifario.descripcion || '—' }}</strong></div>
        </div>

        <div class="card">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem">
            <div class="section-title" style="margin:0">Servicios del tarifario</div>
          </div>
          <div class="table-wrapper">
            <table>
              <thead><tr><th>Nombre servicio</th><th>Precio unitario</th><th>Unidad</th><th></th></tr></thead>
              <tbody>
                <tr *ngFor="let s of servicios">
                  <td>{{ s.nombre_servicio }}</td>
                  <td>{{ s.precio_unitario | number:'1.2-2' }} €</td>
                  <td>{{ s.unidad || '—' }}</td>
                  <td><button class="btn btn-sm btn-danger" (click)="eliminarServicio(s)">✕</button></td>
                </tr>
                <tr *ngIf="!servicios.length">
                  <td colspan="4" style="text-align:center;color:#94a3b8;padding:24px">Sin servicios</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="margin-top:1rem;border-top:1px solid #e5e7eb;padding-top:1rem">
            <div class="section-title">Añadir servicio</div>
            <div class="form-grid">
              <div class="form-group">
                <label>Nombre del servicio</label>
                <input type="text" class="form-control" [(ngModel)]="nuevoServicio.nombre_servicio" name="nom_s">
              </div>
              <div class="form-group">
                <label>Precio unitario (€)</label>
                <input type="number" class="form-control" [(ngModel)]="nuevoServicio.precio_unitario" name="precio_s" step="0.01">
              </div>
              <div class="form-group">
                <label>Unidad</label>
                <input type="text" class="form-control" [(ngModel)]="nuevoServicio.unidad" name="unidad_s" placeholder="hora, ud, km...">
              </div>
            </div>
            <button class="btn btn-primary btn-sm" (click)="addServicio()" [disabled]="addingS">
              {{ addingS ? 'Añadiendo...' : 'Añadir servicio' }}
            </button>
          </div>
        </div>
      </ng-container>
    </div>
  `
})
export class TarifarioDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(TarifarioService);

  tarifario: any = null;
  servicios: any[] = [];
  loading = true;
  errorMsg = '';
  successMsg = '';
  addingS = false;
  nuevoServicio: any = { nombre_servicio: '', precio_unitario: null, unidad: '' };

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe({
      next: (data) => {
        this.tarifario = data;
        this.loading = false;
        this.service.getServicios(id).subscribe({ next: (s) => this.servicios = s });
      },
      error: () => { this.loading = false; }
    });
  }

  addServicio(): void {
    if (!this.nuevoServicio.nombre_servicio) return;
    this.addingS = true;
    this.service.addServicio(this.tarifario.id_tarifario, this.nuevoServicio).subscribe({
      next: (s) => {
        this.servicios.push(s);
        this.nuevoServicio = { nombre_servicio: '', precio_unitario: null, unidad: '' };
        this.addingS = false;
        this.successMsg = 'Servicio añadido';
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (err) => { this.errorMsg = err?.error?.detail || 'Error'; this.addingS = false; }
    });
  }

  eliminarServicio(s: any): void {
    if (confirm('¿Eliminar este servicio?')) {
      this.service.deleteServicio(this.tarifario.id_tarifario, s.id_servicio).subscribe({
        next: () => { this.servicios = this.servicios.filter(x => x.id_servicio !== s.id_servicio); }
      });
    }
  }
}
