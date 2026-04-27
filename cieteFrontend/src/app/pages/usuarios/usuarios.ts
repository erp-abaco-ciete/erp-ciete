import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { UsuariosService } from '../../core/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Usuarios</h1>
        <a routerLink="/usuarios/new" class="btn btn-primary">+ Nuevo Usuario</a>
      </div>
      <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>
      <div class="card">
        <div *ngIf="loading" style="text-align:center;padding:32px;color:#64748b">Cargando...</div>
        <div class="table-wrapper" *ngIf="!loading">
          <table>
            <thead>
              <tr><th>Nombre</th><th>Email</th><th>Rol</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              <tr *ngFor="let u of usuarios">
                <td><strong>{{ u.name }}</strong></td>
                <td>{{ u.email }}</td>
                <td><span class="badge" [class]="u.role === 'admin' ? 'badge-aprobado' : 'badge-borrador'">{{ u.role }}</span></td>
                <td class="actions-cell">
                  <a [routerLink]="['/usuarios', u.id, 'edit']" class="btn btn-sm btn-secondary">Editar</a>
                  <button class="btn btn-sm btn-danger" (click)="eliminar(u)">Eliminar</button>
                </td>
              </tr>
              <tr *ngIf="usuarios.length === 0">
                <td colspan="4" style="text-align:center;color:#94a3b8;padding:32px">No hay usuarios</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class Usuarios implements OnInit {
  private service = inject(UsuariosService);
  usuarios: any[] = [];
  loading = true;
  successMsg = '';

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.usuarios = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  eliminar(u: any): void {
    if (confirm(`¿Eliminar al usuario "${u.name}"?`)) {
      this.service.delete(u.id).subscribe({
        next: () => {
          this.successMsg = 'Usuario eliminado';
          this.usuarios = this.usuarios.filter(x => x.id !== u.id);
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
