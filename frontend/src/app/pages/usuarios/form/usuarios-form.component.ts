import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { UsuariosService } from '../../../core/services/usuarios.service';

const MODULOS = ['presupuestos', 'pedidos', 'facturas', 'contratos', 'tarifario', 'usuarios'];

@Component({
  selector: 'app-usuarios-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>{{ isEdit ? 'Editar Usuario' : 'Nuevo Usuario' }}</h1>
        <a (click)="goBack()" class="btn btn-outline" style="cursor:pointer">← Volver</a>
      </div>

      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>

      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="form-grid">
            <div class="form-group">
              <label for="name">Nombre *</label>
              <input id="name" type="text" class="form-control" [(ngModel)]="form.name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email o identificador de usuario *</label>
              <input id="email" type="text" class="form-control" [(ngModel)]="form.email" name="email"
                placeholder="Puede ser un email o un identificador simple" required>
            </div>
            <div class="form-group">
              <label for="password">
                Contraseña {{ isEdit ? '(dejar vacío para no cambiar)' : '*' }}
              </label>
              <input id="password" type="password" class="form-control" [(ngModel)]="form.password" name="password"
                [required]="!isEdit">
            </div>
            <div class="form-group">
              <label for="role">Rol *</label>
              <select id="role" class="form-control" [(ngModel)]="form.role" name="role" (change)="onRoleChange()">
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
            </div>
          </div>

          <div style="margin-top:24px">
            <h3 style="font-size:15px; font-weight:600; margin-bottom:12px; color:#374151">Permisos por módulo</h3>
            <div class="permisos-grid">
              <label *ngFor="let m of modulos" class="permiso-item">
                <input type="checkbox" [(ngModel)]="permisos[m]" [name]="'p_' + m">
                <span>{{ m | titlecase }}</span>
              </label>
            </div>
          </div>

          <div style="margin-top:24px; display:flex; gap:12px">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Crear Usuario') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {
  isEdit = false;
  editId: number | null = null;
  loading = false;
  errorMsg = '';
  modulos = MODULOS;

  form: any = { name: '', email: '', password: '', role: 'user' };
  permisos: any = {
    presupuestos: false, pedidos: false, facturas: false,
    contratos: false, tarifario: false, usuarios: false
  };

  constructor(
    private service: UsuariosService,
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
          this.form = { name: data.name, email: data.email, password: '', role: data.role };
          try {
            this.permisos = JSON.parse(data.permisos || '{}');
          } catch {
            this.permisos = { presupuestos: false, pedidos: false, facturas: false, contratos: false, tarifario: false, usuarios: false };
          }
        },
        error: () => this.errorMsg = 'Error al cargar el usuario'
      });
    }
  }

  onRoleChange(): void {
    if (this.form.role === 'admin') {
      MODULOS.forEach(m => this.permisos[m] = true);
    }
  }

  guardar(): void {
    if (!this.form.name?.trim()) { this.errorMsg = 'El nombre es obligatorio'; return; }
    if (!this.form.email?.trim()) { this.errorMsg = 'El identificador es obligatorio'; return; }
    if (!this.isEdit && !this.form.password?.trim()) { this.errorMsg = 'La contraseña es obligatoria'; return; }

    this.loading = true;
    this.errorMsg = '';

    const payload: any = {
      name: this.form.name,
      email: this.form.email,
      role: this.form.role,
      permisos: JSON.stringify(this.permisos)
    };
    if (this.form.password?.trim()) {
      payload.password = this.form.password;
    }
    if (!this.isEdit) {
      payload.password = this.form.password;
    }

    const obs = this.isEdit
      ? this.service.update(this.editId!, payload)
      : this.service.create(payload);

    obs.subscribe({
      next: () => this.router.navigate(['/usuarios']),
      error: (err) => {
        this.errorMsg = err?.error?.detail || 'Error al guardar el usuario';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/usuarios']);
  }
}
