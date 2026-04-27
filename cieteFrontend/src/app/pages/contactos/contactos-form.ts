import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { ContactosService } from '../../core/services/contactos.service';

@Component({
  selector: 'app-contactos-form',
  imports: [CommonModule, FormsModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>{{ isEdit ? 'Editar Contacto' : 'Nuevo Contacto' }}</h1>
        <a routerLink="/contactos" class="btn btn-outline">← Volver</a>
      </div>
      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="form-grid">
            <div class="form-group">
              <label>Nombre *</label>
              <input type="text" class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" [(ngModel)]="form.email" name="email">
            </div>
            <div class="form-group">
              <label>Teléfono</label>
              <input type="text" class="form-control" [(ngModel)]="form.telefono" name="telefono">
            </div>
            <div class="form-group">
              <label>Cargo</label>
              <input type="text" class="form-control" [(ngModel)]="form.cargo" name="cargo">
            </div>
            <div class="form-group">
              <label>ID Empresa</label>
              <input type="number" class="form-control" [(ngModel)]="form.id_empresa" name="id_empresa">
            </div>
          </div>
          <div style="margin-top:1.5rem">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Crear Contacto') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class ContactosForm implements OnInit {
  private service = inject(ContactosService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  editId: number | null = null;
  loading = false;
  errorMsg = '';
  form: any = { nombre: '', email: '', telefono: '', cargo: '', id_empresa: null };

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
      next: () => this.router.navigate(['/contactos']),
      error: (err) => { this.errorMsg = err?.error?.detail || 'Error al guardar'; this.loading = false; }
    });
  }
}
