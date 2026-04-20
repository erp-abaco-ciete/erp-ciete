import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { ContactosService } from '../../../core/services/contactos.service';

@Component({
  selector: 'app-contactos-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>{{ isEdit ? 'Editar Contacto' : 'Nuevo Contacto' }}</h1>
        <a (click)="goBack()" class="btn btn-outline" style="cursor:pointer">← Volver</a>
      </div>

      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>

      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="form-grid">
            <div class="form-group">
              <label for="nombre">Nombre *</label>
              <input id="nombre" type="text" class="form-control" [(ngModel)]="form.nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label for="apellido1">Primer Apellido</label>
              <input id="apellido1" type="text" class="form-control" [(ngModel)]="form.apellido1" name="apellido1">
            </div>
            <div class="form-group">
              <label for="apellido2">Segundo Apellido</label>
              <input id="apellido2" type="text" class="form-control" [(ngModel)]="form.apellido2" name="apellido2">
            </div>
          </div>

          <div style="margin-top:24px; display:flex; gap:12px">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Guardar Contacto') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./contactos-form.component.css']
})
export class ContactosFormComponent implements OnInit {
  isEdit = false;
  editId: number | null = null;
  loading = false;
  errorMsg = '';
  form: any = { nombre: '', apellido1: '', apellido2: '' };

  constructor(
    private service: ContactosService,
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
          this.form = {
            nombre: data.nombre || '',
            apellido1: data.apellido1 || '',
            apellido2: data.apellido2 || ''
          };
        },
        error: () => this.errorMsg = 'Error al cargar el contacto'
      });
    }
  }

  guardar(): void {
    if (!this.form.nombre?.trim()) {
      this.errorMsg = 'El nombre es obligatorio';
      return;
    }
    this.loading = true;
    this.errorMsg = '';
    const obs = this.isEdit
      ? this.service.update(this.editId!, this.form)
      : this.service.create(this.form);
    obs.subscribe({
      next: () => this.router.navigate(['/contactos']),
      error: (err) => {
        this.errorMsg = err?.error?.detail || 'Error al guardar el contacto';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/contactos']);
  }
}
