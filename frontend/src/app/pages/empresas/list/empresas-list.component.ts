import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { EmpresasService } from '../../../core/services/empresas.service';

@Component({
  selector: 'app-empresas-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Empresas</h1>
        <a routerLink="/empresas/new" class="btn btn-primary">+ Nueva Empresa</a>
      </div>

      <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Razón Social</th>
                <th>CIF</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let e of empresas">
                <td><strong>#{{ e.id_empresa }}</strong></td>
                <td>{{ e.nombre }}</td>
                <td>{{ e.razon_social || '—' }}</td>
                <td>{{ e.cif || '—' }}</td>
                <td class="actions-cell">
                  <a [routerLink]="['/empresas', e.id_empresa]" class="btn btn-sm btn-outline">Ver</a>
                  <a [routerLink]="['/empresas', e.id_empresa, 'edit']" class="btn btn-sm btn-secondary">Editar</a>
                  <button class="btn btn-sm btn-danger" (click)="eliminar(e)">Eliminar</button>
                </td>
              </tr>
              <tr *ngIf="empresas.length === 0 && !loading">
                <td colspan="5" style="text-align:center; color:#94a3b8; padding:32px">No hay empresas registradas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div *ngIf="loading" style="text-align:center; padding:32px; color:#64748b">Cargando...</div>
      </div>
    </div>
  `,
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {
  empresas: any[] = [];
  loading = true;
  successMsg = '';

  constructor(private service: EmpresasService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.empresas = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  eliminar(empresa: any): void {
    if (confirm(`¿Eliminar la empresa "${empresa.nombre}"?`)) {
      this.service.delete(empresa.id_empresa).subscribe({
        next: () => {
          this.successMsg = 'Empresa eliminada correctamente';
          this.empresas = this.empresas.filter(e => e.id_empresa !== empresa.id_empresa);
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
