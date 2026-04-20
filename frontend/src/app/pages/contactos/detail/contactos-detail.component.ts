import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { ContactosService } from '../../../core/services/contactos.service';

@Component({
  selector: 'app-contactos-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center; padding:48px; color:#64748b">Cargando...</div>
      <div *ngIf="!loading && contacto">
        <div class="page-header">
          <h1>Contacto #{{ contacto.id_contacto }}</h1>
          <div style="display:flex; gap:8px">
            <a [routerLink]="['/contactos', contacto.id_contacto, 'edit']" class="btn btn-secondary">✎ Editar</a>
            <a routerLink="/contactos" class="btn btn-outline">← Volver</a>
          </div>
        </div>

        <div class="detail-grid">
          <div class="card">
            <h3 class="section-title">Datos personales</h3>
            <div class="detail-row"><span>Nombre</span><strong>{{ contacto.nombre }}</strong></div>
            <div class="detail-row"><span>Primer Apellido</span><strong>{{ contacto.apellido1 || '—' }}</strong></div>
            <div class="detail-row"><span>Segundo Apellido</span><strong>{{ contacto.apellido2 || '—' }}</strong></div>
          </div>
          <div class="card">
            <h3 class="section-title">Metadatos</h3>
            <div class="detail-row"><span>Creado</span><strong>{{ contacto.created_at || '—' }}</strong></div>
            <div class="detail-row"><span>Actualizado</span><strong>{{ contacto.updated_at || '—' }}</strong></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./contactos-detail.component.css']
})
export class ContactosDetailComponent implements OnInit {
  contacto: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ContactosService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe({
      next: (data) => { this.contacto = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
