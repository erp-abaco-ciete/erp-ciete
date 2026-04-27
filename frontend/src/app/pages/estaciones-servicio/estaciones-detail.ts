import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { EstacionesService } from '../../core/services/estaciones.service';

@Component({
  selector: 'app-estaciones-detail',
  imports: [CommonModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center;padding:48px;color:#64748b">Cargando...</div>
      <ng-container *ngIf="!loading && estacion">
        <div class="page-header">
          <h1>{{ estacion.nombre }}</h1>
          <div style="display:flex;gap:8px">
            <a [routerLink]="['/estaciones-servicio', estacion.id_estacion, 'edit']" class="btn btn-secondary">Editar</a>
            <a routerLink="/estaciones-servicio" class="btn btn-outline">← Volver</a>
          </div>
        </div>
        <div class="detail-grid">
          <div class="card">
            <div class="section-title">Identificación</div>
            <div class="detail-row"><span>Código ES</span><strong>{{ estacion.cod_es || '—' }}</strong></div>
            <div class="detail-row"><span>Tipo</span><strong>{{ estacion.tipo || '—' }}</strong></div>
            <div class="detail-row"><span>NIF</span><strong>{{ estacion.nif || '—' }}</strong></div>
          </div>
          <div class="card">
            <div class="section-title">Ubicación</div>
            <div class="detail-row"><span>Dirección</span><strong>{{ estacion.direccion || '—' }}</strong></div>
            <div class="detail-row"><span>Población</span><strong>{{ estacion.poblacion || '—' }}</strong></div>
            <div class="detail-row"><span>Provincia</span><strong>{{ estacion.provincia || '—' }}</strong></div>
          </div>
          <div class="card">
            <div class="section-title">Contacto</div>
            <div class="detail-row"><span>Teléfono móvil</span><strong>{{ estacion.tel_movil || '—' }}</strong></div>
            <div class="detail-row"><span>Teléfono oficina</span><strong>{{ estacion.tl_oficina || '—' }}</strong></div>
            <div class="detail-row"><span>Email</span><strong>{{ estacion.sede_email || '—' }}</strong></div>
          </div>
        </div>
      </ng-container>
    </div>
  `
})
export class EstacionesDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(EstacionesService);
  estacion: any = null;
  loading = true;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe({
      next: (data) => { this.estacion = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
