import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { EmpresasService } from '../../../core/services/empresas.service';

@Component({
  selector: 'app-empresas-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center; padding:48px; color:#64748b">Cargando...</div>
      <div *ngIf="!loading && empresa">
        <div class="page-header">
          <h1>Empresa #{{ empresa.id_empresa }}</h1>
          <div style="display:flex; gap:8px">
            <a [routerLink]="['/empresas', empresa.id_empresa, 'edit']" class="btn btn-secondary">✎ Editar</a>
            <a routerLink="/empresas" class="btn btn-outline">← Volver</a>
          </div>
        </div>

        <div class="detail-grid">
          <div class="card">
            <h3 class="section-title">Datos generales</h3>
            <div class="detail-row"><span>Nombre</span><strong>{{ empresa.nombre }}</strong></div>
            <div class="detail-row"><span>Razón Social</span><strong>{{ empresa.razon_social || '—' }}</strong></div>
            <div class="detail-row"><span>CIF</span><strong>{{ empresa.cif || '—' }}</strong></div>
          </div>
          <div class="card">
            <h3 class="section-title">Metadatos</h3>
            <div class="detail-row"><span>Creado</span><strong>{{ empresa.created_at || '—' }}</strong></div>
            <div class="detail-row"><span>Actualizado</span><strong>{{ empresa.updated_at || '—' }}</strong></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./empresas-detail.component.css']
})
export class EmpresasDetailComponent implements OnInit {
  empresa: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EmpresasService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe({
      next: (data) => { this.empresa = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
