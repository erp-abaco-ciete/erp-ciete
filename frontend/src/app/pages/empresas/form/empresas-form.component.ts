import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { EmpresasService } from '../../../core/services/empresas.service';

@Component({
  selector: 'app-empresas-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>{{ isEdit ? 'Editar Empresa' : 'Nueva Empresa' }}</h1>
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
              <label for="razon_social">Razón Social</label>
              <input id="razon_social" type="text" class="form-control" [(ngModel)]="form.razon_social" name="razon_social">
            </div>
            <div class="form-group">
              <label for="cif">CIF</label>
              <input id="cif" type="text" class="form-control" [(ngModel)]="form.cif" name="cif">
            </div>
          </div>

          <div style="margin-top:24px; display:flex; gap:12px">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Guardar Empresa') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./empresas-form.component.css']
})
export class EmpresasFormComponent implements OnInit {
  isEdit = false;
  editId: number | null = null;
  loading = false;
  errorMsg = '';
  form: any = { nombre: '', razon_social: '', cif: '' };

  constructor(
    private service: EmpresasService,
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
            razon_social: data.razon_social || '',
            cif: data.cif || ''
          };
        },
        error: () => this.errorMsg = 'Error al cargar la empresa'
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
      next: () => this.router.navigate(['/empresas']),
      error: (err) => {
        this.errorMsg = err?.error?.detail || 'Error al guardar la empresa';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/empresas']);
  }
}
