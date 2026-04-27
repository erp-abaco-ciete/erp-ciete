import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { UsuariosService } from '../../core/services/usuarios.service';

const MODULOS = ['presupuestos', 'pedidos', 'facturas', 'contratos', 'tarifario', 'usuarios'];

@Component({
  selector: 'app-usuarios-form',
  imports: [CommonModule, FormsModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>{{ isEdit ? 'Editar Usuario' : 'Nuevo Usuario' }}</h1>
        <a routerLink="/usuarios" class="btn btn-outline">← Volver</a>
      </div>
      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="form-grid">
            <div class="form-group">
              <label>Nombre *</label>
              <input type="text" class="form-control" [(ngModel)]="form.name" name="name" required>
            </div>
            <div class="form-group">
              <label>Email o identificador *</label>
              <input type="text" class="form-control" [(ngModel)]="form.email" name="email" required>
            </div>
            <div class="form-group">
              <label>Contraseña {{ isEdit ? '(vacío = no cambiar)' : '*' }}</label>
              <input type="password" class="form-control" [(ngModel)]="form.password" name="password" [required]="!isEdit">
            </div>
            <div class="form-group">
              <label>Rol *</label>
              <select class="form-control" [(ngModel)]="form.role" name="role" (change)="onRoleChange()">
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
            </div>
          </div>
          <div style="margin-top:1.5rem">
            <div class="section-title">Permisos por módulo</div>
            <div class="permisos-grid">
              <label *ngFor="let m of modulos" class="permiso-item">
                <input type="checkbox" [(ngModel)]="permisos[m]" [name]="'p_'+m">
                <span>{{ m | titlecase }}</span>
              </label>
            </div>
          </div>
          <div style="margin-top:1.5rem">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Crear Usuario') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class UsuariosForm implements OnInit {
  private service = inject(UsuariosService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  editId: number | null = null;
  loading = false;
  errorMsg = '';
  modulos = MODULOS;
  form: any = { name: '', email: '', password: '', role: 'user' };
  permisos: any = { presupuestos: false, pedidos: false, facturas: false, contratos: false, tarifario: false, usuarios: false };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.editId = +id;
      this.service.getOne(this.editId).subscribe({
        next: (data) => {
          this.form = { name: data.name, email: data.email, password: '', role: data.role };
          try { this.permisos = JSON.parse(data.permisos || '{}'); } catch {}
        },
        error: () => { this.errorMsg = 'Error al cargar'; }
      });
    }
  }

  onRoleChange(): void {
    if (this.form.role === 'admin') MODULOS.forEach(m => this.permisos[m] = true);
  }

  guardar(): void {
    if (!this.form.name?.trim()) { this.errorMsg = 'El nombre es obligatorio'; return; }
    if (!this.form.email?.trim()) { this.errorMsg = 'El email es obligatorio'; return; }
    if (!this.isEdit && !this.form.password?.trim()) { this.errorMsg = 'La contraseña es obligatoria'; return; }
    this.loading = true;
    this.errorMsg = '';
    const payload: any = { name: this.form.name, email: this.form.email, role: this.form.role, permisos: JSON.stringify(this.permisos) };
    if (this.form.password?.trim()) payload.password = this.form.password;
    const obs = this.isEdit ? this.service.update(this.editId!, payload) : this.service.create(payload);
    obs.subscribe({
      next: () => this.router.navigate(['/usuarios']),
      error: (err) => { this.errorMsg = err?.error?.detail || 'Error al guardar'; this.loading = false; }
    });
  }
}
