import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { EstacionesService } from '../../../core/services/estaciones.service';

@Component({
  selector: 'app-estaciones-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>{{ isEdit ? 'Editar Estación' : 'Nueva Estación' }}</h1>
        <a (click)="goBack()" class="btn btn-outline" style="cursor:pointer">← Volver</a>
      </div>

      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>

      <div class="card">
        <form (ngSubmit)="guardar()">
          <h3 class="section-title">Identificación</h3>
          <div class="form-grid">
            <div class="form-group">
              <label for="nombre">Nombre</label>
              <input id="nombre" type="text" class="form-control" [(ngModel)]="form.nombre" name="nombre">
            </div>
            <div class="form-group">
              <label for="cod_es">Código ES</label>
              <input id="cod_es" type="text" class="form-control" [(ngModel)]="form.cod_es" name="cod_es">
            </div>
            <div class="form-group">
              <label for="tipo">Tipo</label>
              <input id="tipo" type="text" class="form-control" [(ngModel)]="form.tipo" name="tipo">
            </div>
            <div class="form-group">
              <label for="nif">NIF</label>
              <input id="nif" type="text" class="form-control" [(ngModel)]="form.nif" name="nif">
            </div>
            <div class="form-group">
              <label for="concesion">Concesión</label>
              <input id="concesion" type="text" class="form-control" [(ngModel)]="form.concesion" name="concesion">
            </div>
            <div class="form-group">
              <label for="id_empresa">ID Empresa</label>
              <input id="id_empresa" type="number" class="form-control" [(ngModel)]="form.id_empresa" name="id_empresa">
            </div>
          </div>

          <h3 class="section-title" style="margin-top:24px">Códigos</h3>
          <div class="form-grid">
            <div class="form-group">
              <label for="cod_retailgas">Código Retailgas</label>
              <input id="cod_retailgas" type="text" class="form-control" [(ngModel)]="form.cod_retailgas" name="cod_retailgas">
            </div>
            <div class="form-group">
              <label for="cod_sociedad">Código Sociedad</label>
              <input id="cod_sociedad" type="text" class="form-control" [(ngModel)]="form.cod_sociedad" name="cod_sociedad">
            </div>
            <div class="form-group">
              <label for="cod_solred">Código SOLRED</label>
              <input id="cod_solred" type="text" class="form-control" [(ngModel)]="form.cod_solred" name="cod_solred">
            </div>
          </div>

          <h3 class="section-title" style="margin-top:24px">Ubicación</h3>
          <div class="form-grid">
            <div class="form-group">
              <label for="direccion">Dirección</label>
              <input id="direccion" type="text" class="form-control" [(ngModel)]="form.direccion" name="direccion">
            </div>
            <div class="form-group">
              <label for="cod_postal">Código Postal</label>
              <input id="cod_postal" type="text" class="form-control" [(ngModel)]="form.cod_postal" name="cod_postal">
            </div>
            <div class="form-group">
              <label for="poblacion">Población</label>
              <input id="poblacion" type="text" class="form-control" [(ngModel)]="form.poblacion" name="poblacion">
            </div>
            <div class="form-group">
              <label for="provincia">Provincia</label>
              <input id="provincia" type="text" class="form-control" [(ngModel)]="form.provincia" name="provincia">
            </div>
            <div class="form-group">
              <label for="ccaa">CCAA</label>
              <input id="ccaa" type="text" class="form-control" [(ngModel)]="form.ccaa" name="ccaa">
            </div>
            <div class="form-group">
              <label for="pais">País</label>
              <input id="pais" type="text" class="form-control" [(ngModel)]="form.pais" name="pais">
            </div>
          </div>

          <h3 class="section-title" style="margin-top:24px">Gestión</h3>
          <div class="form-grid">
            <div class="form-group">
              <label for="delegacion">Delegación</label>
              <input id="delegacion" type="text" class="form-control" [(ngModel)]="form.delegacion" name="delegacion">
            </div>
            <div class="form-group">
              <label for="delegado">Delegado</label>
              <input id="delegado" type="text" class="form-control" [(ngModel)]="form.delegado" name="delegado">
            </div>
            <div class="form-group">
              <label for="tecnico_gestion">Técnico Gestión</label>
              <input id="tecnico_gestion" type="text" class="form-control" [(ngModel)]="form.tecnico_gestion" name="tecnico_gestion">
            </div>
            <div class="form-group">
              <label for="responsable_gestor">Responsable Gestor</label>
              <input id="responsable_gestor" type="text" class="form-control" [(ngModel)]="form.responsable_gestor" name="responsable_gestor">
            </div>
            <div class="form-group">
              <label for="tipo_mantenimiento">Tipo Mantenimiento</label>
              <input id="tipo_mantenimiento" type="text" class="form-control" [(ngModel)]="form.tipo_mantenimiento" name="tipo_mantenimiento">
            </div>
            <div class="form-group">
              <label for="horario_apertura">Horario Apertura</label>
              <input id="horario_apertura" type="text" class="form-control" [(ngModel)]="form.horario_apertura" name="horario_apertura">
            </div>
          </div>

          <h3 class="section-title" style="margin-top:24px">Contacto de la estación</h3>
          <div class="form-grid">
            <div class="form-group">
              <label for="tel_movil">Teléfono Móvil</label>
              <input id="tel_movil" type="text" class="form-control" [(ngModel)]="form.tel_movil" name="tel_movil">
            </div>
            <div class="form-group">
              <label for="tl_oficina">Teléfono Oficina</label>
              <input id="tl_oficina" type="text" class="form-control" [(ngModel)]="form.tl_oficina" name="tl_oficina">
            </div>
            <div class="form-group">
              <label for="sede_email">Email Sede</label>
              <input id="sede_email" type="email" class="form-control" [(ngModel)]="form.sede_email" name="sede_email">
            </div>
          </div>

          <h3 class="section-title" style="margin-top:24px">Fechas</h3>
          <div class="form-grid">
            <div class="form-group">
              <label for="f_alta">Fecha Alta</label>
              <input id="f_alta" type="date" class="form-control" [(ngModel)]="form.f_alta" name="f_alta">
            </div>
            <div class="form-group">
              <label for="f_baja">Fecha Baja</label>
              <input id="f_baja" type="date" class="form-control" [(ngModel)]="form.f_baja" name="f_baja">
            </div>
          </div>

          <div style="margin-top:24px; display:flex; gap:12px">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Guardar Estación') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./estaciones-form.component.css']
})
export class EstacionesFormComponent implements OnInit {
  isEdit = false;
  editId: number | null = null;
  loading = false;
  errorMsg = '';
  form: any = {
    nombre: '', cod_es: '', tipo: '', nif: '', concesion: '', id_empresa: null,
    cod_retailgas: '', cod_sociedad: '', cod_solred: '',
    direccion: '', cod_postal: '', poblacion: '', provincia: '', ccaa: '', pais: 'España',
    delegacion: '', delegado: '', tecnico_gestion: '', responsable_gestor: '',
    tipo_mantenimiento: '', horario_apertura: '',
    tel_movil: '', tl_oficina: '', sede_email: '',
    f_alta: null, f_baja: null
  };

  constructor(
    private service: EstacionesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.editId = +id;
      this.service.getOne(this.editId).subscribe({
        next: (data) => {
          this.form = { ...this.form, ...data };
        },
        error: () => this.errorMsg = 'Error al cargar la estación'
      });
    }
  }

  guardar(): void {
    this.loading = true;
    this.errorMsg = '';
    const obs = this.isEdit
      ? this.service.update(this.editId!, this.form)
      : this.service.create(this.form);
    obs.subscribe({
      next: () => this.router.navigate(['/estaciones']),
      error: (err) => {
        this.errorMsg = err?.error?.detail || 'Error al guardar la estación';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/estaciones']);
  }
}
