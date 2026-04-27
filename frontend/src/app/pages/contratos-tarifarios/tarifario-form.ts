import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { TarifarioService } from '../../core/services/tarifario.service';

@Component({
  selector: 'app-tarifario-form',
  imports: [CommonModule, FormsModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>{{ isEdit ? 'Editar Tarifario' : 'Nuevo Tarifario' }}</h1>
        <a routerLink="/contratos-tarifarios" class="btn btn-outline">← Volver</a>
      </div>
      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="form-grid">
            <div class="form-group">
              <label>Nombre del tarifario *</label>
              <input type="text" class="form-control" [(ngModel)]="form.nombre_tarifario" name="nombre_tarifario" required>
            </div>
            <div class="form-group" style="grid-column: 1/-1">
              <label>Descripción</label>
              <input type="text" class="form-control" [(ngModel)]="form.descripcion" name="descripcion">
            </div>
          </div>
          <div style="margin-top:1.5rem">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Crear Tarifario') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class TarifarioForm implements OnInit {
  private service = inject(TarifarioService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  editId: number | null = null;
  loading = false;
  errorMsg = '';
  form: any = { nombre_tarifario: '', descripcion: '' };

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
      next: () => this.router.navigate(['/contratos-tarifarios']),
      error: (err) => { this.errorMsg = err?.error?.detail || 'Error al guardar'; this.loading = false; }
    });
  }
}
