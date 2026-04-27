import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { ContactosService } from '../../core/services/contactos.service';

@Component({
  selector: 'app-contactos-detail',
  imports: [CommonModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center;padding:48px;color:#64748b">Cargando...</div>
      <ng-container *ngIf="!loading && contacto">
        <div class="page-header">
          <h1>{{ contacto.nombre }}</h1>
          <div style="display:flex;gap:8px">
            <a [routerLink]="['/contactos', contacto.id_contacto, 'edit']" class="btn btn-secondary">Editar</a>
            <a routerLink="/contactos" class="btn btn-outline">← Volver</a>
          </div>
        </div>
        <div class="card">
          <div class="section-title">Datos del contacto</div>
          <div class="detail-row"><span>Email</span><strong>{{ contacto.email || '—' }}</strong></div>
          <div class="detail-row"><span>Teléfono</span><strong>{{ contacto.telefono || '—' }}</strong></div>
          <div class="detail-row"><span>Cargo</span><strong>{{ contacto.cargo || '—' }}</strong></div>
          <div class="detail-row"><span>Empresa</span><strong>{{ contacto.id_empresa || '—' }}</strong></div>
        </div>
      </ng-container>
    </div>
  `
})
export class ContactosDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(ContactosService);
  contacto: any = null;
  loading = true;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe({
      next: (data) => { this.contacto = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
