import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { EmpresasService } from '../../core/services/empresas.service';

@Component({
  selector: 'app-empresas-detail',
  imports: [CommonModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center;padding:48px;color:#64748b">Cargando...</div>
      <ng-container *ngIf="!loading && empresa">
        <div class="page-header">
          <h1>{{ empresa.nombre }}</h1>
          <div style="display:flex;gap:8px">
            <a [routerLink]="['/empresas', empresa.id_empresa, 'edit']" class="btn btn-secondary">Editar</a>
            <a routerLink="/empresas" class="btn btn-outline">← Volver</a>
          </div>
        </div>
        <div class="card">
          <div class="section-title">Datos generales</div>
          <div class="detail-row"><span>CIF</span><strong>{{ empresa.cif || '—' }}</strong></div>
          <div class="detail-row"><span>Dirección</span><strong>{{ empresa.direccion || '—' }}</strong></div>
          <div class="detail-row"><span>Municipio</span><strong>{{ empresa.municipio || '—' }}</strong></div>
          <div class="detail-row"><span>Provincia</span><strong>{{ empresa.provincia || '—' }}</strong></div>
          <div class="detail-row"><span>País</span><strong>{{ empresa.pais || '—' }}</strong></div>
          <div class="detail-row"><span>Email</span><strong>{{ empresa.email || '—' }}</strong></div>
          <div class="detail-row"><span>Teléfono</span><strong>{{ empresa.telefono || '—' }}</strong></div>
        </div>
      </ng-container>
    </div>
  `
})
export class EmpresasDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(EmpresasService);
  empresa: any = null;
  loading = true;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe({
      next: (data) => { this.empresa = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
