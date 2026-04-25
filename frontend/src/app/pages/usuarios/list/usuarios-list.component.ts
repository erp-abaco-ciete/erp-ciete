import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { UsuariosService } from '../../../core/services/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Usuarios</h1>
        <a routerLink="/usuarios/new" class="btn btn-primary">+ Nuevo Usuario</a>
      </div>

      <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email / Usuario</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let u of usuarios">
                <td>{{ u.name }}</td>
                <td>{{ u.email }}</td>
                <td>
                  <span [class]="u.role === 'admin' ? 'badge-aprobado' : 'badge-pendiente'">
                    {{ u.role }}
                  </span>
                </td>
                <td class="actions-cell">
                  <a [routerLink]="['/usuarios', u.id, 'edit']" class="btn btn-sm btn-secondary">Editar</a>
                  <button class="btn btn-sm btn-danger" (click)="eliminar(u)">Eliminar</button>
                </td>
              </tr>
              <tr *ngIf="usuarios.length === 0 && !loading">
                <td colspan="4" style="text-align:center; color:#94a3b8; padding:32px">No hay usuarios registrados</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div *ngIf="loading" style="text-align:center; padding:32px; color:#64748b">Cargando...</div>
      </div>
    </div>
  `,
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  usuarios: any[] = [];
  loading = true;
  successMsg = '';

  constructor(private service: UsuariosService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.usuarios = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  eliminar(usuario: any): void {
    if (confirm(`¿Eliminar el usuario "${usuario.name}"?`)) {
      this.service.delete(usuario.id).subscribe({
        next: () => {
          this.successMsg = 'Usuario eliminado correctamente';
          this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
          setTimeout(() => this.successMsg = '', 3000);
        },
        error: (err) => {
          alert(err?.error?.detail || 'Error al eliminar el usuario');
        }
      });
    }
  }
}
