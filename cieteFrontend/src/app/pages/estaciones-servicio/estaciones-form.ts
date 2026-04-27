import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { EstacionesService } from '../../core/services/estaciones.service';

@Component({
  selector: 'app-estaciones-form',
  imports: [CommonModule, FormsModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>{{ isEdit ? 'Editar Estación' : 'Nueva Estación' }}</h1>
        <a routerLink="/estaciones-servicio" class="btn btn-outline">← Volver</a>
      </div>
      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="section-title">Identificación</div>
          <div class="form-grid">
            <div class="form-group"><label>Nombre</label><input type="text" class="form-control" [(ngModel)]="form.nombre" name="nombre"></div>
            <div class="form-group"><label>Código ES</label><input type="text" class="form-control" [(ngModel)]="form.cod_es" name="cod_es"></div>
            <div class="form-group"><label>Tipo</label><input type="text" class="form-control" [(ngModel)]="form.tipo" name="tipo"></div>
            <div class="form-group"><label>NIF</label><input type="text" class="form-control" [(ngModel)]="form.nif" name="nif"></div>
            <div class="form-group"><label>ID Empresa</label><input type="number" class="form-control" [(ngModel)]="form.id_empresa" name="id_empresa"></div>
          </div>
          <div class="section-title" style="margin-top:1.5rem">Ubicación</div>
          <div class="form-grid">
            <div class="form-group"><label>Dirección</label><input type="text" class="form-control" [(ngModel)]="form.direccion" name="direccion"></div>
            <div class="form-group"><label>Código Postal</label><input type="text" class="form-control" [(ngModel)]="form.cod_postal" name="cod_postal"></div>
            <div class="form-group"><label>Población</label><input type="text" class="form-control" [(ngModel)]="form.poblacion" name="poblacion"></div>
            <div class="form-group"><label>Provincia</label><input type="text" class="form-control" [(ngModel)]="form.provincia" name="provincia"></div>
            <div class="form-group"><label>CCAA</label><input type="text" class="form-control" [(ngModel)]="form.ccaa" name="ccaa"></div>
            <div class="form-group"><label>País</label><input type="text" class="form-control" [(ngModel)]="form.pais" name="pais"></div>
          </div>
          <div class="section-title" style="margin-top:1.5rem">Contacto</div>
          <div class="form-grid">
            <div class="form-group"><label>Teléfono móvil</label><input type="text" class="form-control" [(ngModel)]="form.tel_movil" name="tel_movil"></div>
            <div class="form-group"><label>Teléfono oficina</label><input type="text" class="form-control" [(ngModel)]="form.tl_oficina" name="tl_oficina"></div>
            <div class="form-group"><label>Email</label><input type="email" class="form-control" [(ngModel)]="form.sede_email" name="sede_email"></div>
          </div>
          <div style="margin-top:1.5rem">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Crear Estación') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class EstacionesForm implements OnInit {
  private service = inject(EstacionesService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  editId: number | null = null;
  loading = false;
  errorMsg = '';
  form: any = {
    nombre: '', cod_es: '', tipo: '', nif: '', id_empresa: null,
    direccion: '', cod_postal: '', poblacion: '', provincia: '', ccaa: '', pais: 'España',
    tel_movil: '', tl_oficina: '', sede_email: ''
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.editId = +id;
      this.service.getOne(this.editId).subscribe({
        next: (data) => { this.form = { ...this.form, ...data }; },
        error: () => { this.errorMsg = 'Error al cargar'; }
      });
    }
  }

  guardar(): void {
    this.loading = true;
    this.errorMsg = '';
    const obs = this.isEdit ? this.service.update(this.editId!, this.form) : this.service.create(this.form);
    obs.subscribe({
      next: () => this.router.navigate(['/estaciones-servicio']),
      error: (err) => { this.errorMsg = err?.error?.detail || 'Error al guardar'; this.loading = false; }
    });
  }
}
