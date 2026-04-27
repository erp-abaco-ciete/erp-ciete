import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { ContratosService } from '../../core/services/contratos.service';
import { EmpresasService } from '../../core/services/empresas.service';
import { TarifarioService } from '../../core/services/tarifario.service';

@Component({
  selector: 'app-contratos-form',
  imports: [CommonModule, FormsModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>{{ isEdit ? 'Editar Contrato' : 'Nuevo Contrato' }}</h1>
        <a routerLink="/contratos-tarifarios" class="btn btn-outline">← Volver</a>
      </div>
      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="form-grid">
            <div class="form-group">
              <label>Número de contrato</label>
              <input type="text" class="form-control" [(ngModel)]="form.numero_contrato" name="numero_contrato">
            </div>
            <div class="form-group">
              <label>Nombre</label>
              <input type="text" class="form-control" [(ngModel)]="form.nombre" name="nombre">
            </div>
            <div class="form-group">
              <label>Empresa</label>
              <select class="form-control" [(ngModel)]="form.id_empresa" name="id_empresa">
                <option [ngValue]="null">— Seleccionar —</option>
                <option *ngFor="let e of empresas" [ngValue]="e.id_empresa">{{ e.nombre }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Tarifario</label>
              <select class="form-control" [(ngModel)]="form.id_tarifario" name="id_tarifario">
                <option [ngValue]="null">— Seleccionar —</option>
                <option *ngFor="let t of tarifarios" [ngValue]="t.id_tarifario">{{ t.nombre_tarifario }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Fecha inicio</label>
              <input type="date" class="form-control" [(ngModel)]="form.fecha_inicio" name="fecha_inicio">
            </div>
            <div class="form-group">
              <label>Fecha fin</label>
              <input type="date" class="form-control" [(ngModel)]="form.fecha_fin" name="fecha_fin">
            </div>
          </div>
          <div style="margin-top:1.5rem">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Crear Contrato') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class ContratosForm implements OnInit {
  private service = inject(ContratosService);
  private empresasService = inject(EmpresasService);
  private tarifarioService = inject(TarifarioService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  editId: number | null = null;
  loading = false;
  errorMsg = '';
  empresas: any[] = [];
  tarifarios: any[] = [];
  form: any = { numero_contrato: '', nombre: '', id_empresa: null, id_tarifario: null, fecha_inicio: '', fecha_fin: '' };

  ngOnInit(): void {
    this.empresasService.getAll().subscribe({ next: (d) => this.empresas = d });
    this.tarifarioService.getAll().subscribe({ next: (d) => this.tarifarios = d });
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
      next: () => this.router.navigate(['/contratos-tarifarios']),
      error: (err) => { this.errorMsg = err?.error?.detail || 'Error al guardar'; this.loading = false; }
    });
  }
}
