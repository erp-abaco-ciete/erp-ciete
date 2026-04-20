import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { EstacionesService } from '../../../core/services/estaciones.service';

@Component({
  selector: 'app-estaciones-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center; padding:48px; color:#64748b">Cargando...</div>
      <div *ngIf="!loading && es">
        <div class="page-header">
          <h1>Estación #{{ es.id_es }} — {{ es.nombre || es.cod_es }}</h1>
          <div style="display:flex; gap:8px">
            <a [routerLink]="['/estaciones', es.id_es, 'edit']" class="btn btn-secondary">✎ Editar</a>
            <a routerLink="/estaciones" class="btn btn-outline">← Volver</a>
          </div>
        </div>

        <div class="detail-grid">
          <div class="card">
            <h3 class="section-title">Identificación</h3>
            <div class="detail-row"><span>Nombre</span><strong>{{ es.nombre || '—' }}</strong></div>
            <div class="detail-row"><span>Código ES</span><strong>{{ es.cod_es || '—' }}</strong></div>
            <div class="detail-row"><span>Tipo</span><strong>{{ es.tipo || '—' }}</strong></div>
            <div class="detail-row"><span>NIF</span><strong>{{ es.nif || '—' }}</strong></div>
            <div class="detail-row"><span>Concesión</span><strong>{{ es.concesion || '—' }}</strong></div>
            <div class="detail-row"><span>ID Empresa</span><strong>{{ es.id_empresa || '—' }}</strong></div>
          </div>

          <div class="card">
            <h3 class="section-title">Códigos</h3>
            <div class="detail-row"><span>Retailgas</span><strong>{{ es.cod_retailgas || '—' }}</strong></div>
            <div class="detail-row"><span>Sociedad</span><strong>{{ es.cod_sociedad || '—' }}</strong></div>
            <div class="detail-row"><span>SOLRED</span><strong>{{ es.cod_solred || '—' }}</strong></div>
            <div class="detail-row"><span>Vínculos</span><strong>{{ es.vinculo || '—' }}</strong></div>
          </div>
        </div>

        <div class="detail-grid" style="margin-top:20px">
          <div class="card">
            <h3 class="section-title">Ubicación</h3>
            <div class="detail-row"><span>Dirección</span><strong>{{ es.direccion || '—' }}</strong></div>
            <div class="detail-row"><span>CP</span><strong>{{ es.cod_postal || '—' }}</strong></div>
            <div class="detail-row"><span>Población</span><strong>{{ es.poblacion || '—' }}</strong></div>
            <div class="detail-row"><span>Provincia</span><strong>{{ es.provincia || '—' }}</strong></div>
            <div class="detail-row"><span>CCAA</span><strong>{{ es.ccaa || '—' }}</strong></div>
            <div class="detail-row"><span>País</span><strong>{{ es.pais || '—' }}</strong></div>
          </div>

          <div class="card">
            <h3 class="section-title">Gestión y Contacto</h3>
            <div class="detail-row"><span>Delegación</span><strong>{{ es.delegacion || '—' }}</strong></div>
            <div class="detail-row"><span>Delegado</span><strong>{{ es.delegado || '—' }}</strong></div>
            <div class="detail-row"><span>Técnico Gestión</span><strong>{{ es.tecnico_gestion || '—' }}</strong></div>
            <div class="detail-row"><span>Responsable</span><strong>{{ es.responsable_gestor || '—' }}</strong></div>
            <div class="detail-row"><span>Móvil</span><strong>{{ es.tel_movil || '—' }}</strong></div>
            <div class="detail-row"><span>Oficina</span><strong>{{ es.tl_oficina || '—' }}</strong></div>
            <div class="detail-row"><span>Email</span><strong>{{ es.sede_email || '—' }}</strong></div>
          </div>
        </div>

        <div class="detail-grid" style="margin-top:20px">
          <div class="card">
            <h3 class="section-title">Fechas</h3>
            <div class="detail-row"><span>Alta</span><strong>{{ es.f_alta || '—' }}</strong></div>
            <div class="detail-row"><span>Baja</span><strong>{{ es.f_baja || '—' }}</strong></div>
            <div class="detail-row"><span>Mantenimiento</span><strong>{{ es.tipo_mantenimiento || '—' }}</strong></div>
            <div class="detail-row"><span>Horario</span><strong>{{ es.horario_apertura || '—' }}</strong></div>
          </div>
          <div class="card">
            <h3 class="section-title">Metadatos</h3>
            <div class="detail-row"><span>Creado</span><strong>{{ es.created_at || '—' }}</strong></div>
            <div class="detail-row"><span>Actualizado</span><strong>{{ es.updated_at || '—' }}</strong></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./estaciones-detail.component.css']
})
export class EstacionesDetailComponent implements OnInit {
  es: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EstacionesService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe({
      next: (data) => { this.es = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
