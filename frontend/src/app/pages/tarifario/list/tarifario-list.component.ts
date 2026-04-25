import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { TarifarioService } from '../../../core/services/tarifario.service';
import { EmpresasService } from '../../../core/services/empresas.service';

@Component({
  selector: 'app-tarifario-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Tarifarios</h1>
        <a routerLink="/tarifario/new" class="btn btn-primary">+ Nuevo Tarifario</a>
      </div>

      <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Empresa</th>
                <th>Fecha vigencia</th>
                <th>Fecha fin</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let t of tarifarios">
                <td><strong>{{ t.nombre_tarifario }}</strong></td>
                <td>{{ getNombreEmpresa(t.id_empresa) }}</td>
                <td>{{ t.fecha_tarifario || '—' }}</td>
                <td>{{ t.fecha_fin || '—' }}</td>
                <td class="actions-cell">
                  <a [routerLink]="['/tarifario', t.id_tarifario]" class="btn btn-sm btn-outline">Ver / Servicios</a>
                  <button class="btn btn-sm btn-danger" (click)="eliminar(t)">Eliminar</button>
                </td>
              </tr>
              <tr *ngIf="tarifarios.length === 0 && !loading">
                <td colspan="5" style="text-align:center; color:#94a3b8; padding:32px">No hay tarifarios registrados</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div *ngIf="loading" style="text-align:center; padding:32px; color:#64748b">Cargando...</div>
      </div>
    </div>
  `,
  styleUrls: ['./tarifario-list.component.css']
})
export class TarifarioListComponent implements OnInit {
  tarifarios: any[] = [];
  empresas: any[] = [];
  loading = true;
  successMsg = '';

  constructor(
    private service: TarifarioService,
    private empresasService: EmpresasService
  ) {}

  ngOnInit(): void {
    this.empresasService.getAll().subscribe({ next: (d) => this.empresas = d });
    this.service.getAll().subscribe({
      next: (data) => { this.tarifarios = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  getNombreEmpresa(id: number): string {
    const e = this.empresas.find(x => x.id_empresa === id);
    return e ? e.nombre : (id ? `#${id}` : '—');
  }

  eliminar(t: any): void {
    if (confirm(`¿Eliminar el tarifario "${t.nombre_tarifario}"?`)) {
      this.service.delete(t.id_tarifario).subscribe({
        next: () => {
          this.successMsg = 'Tarifario eliminado correctamente';
          this.tarifarios = this.tarifarios.filter(x => x.id_tarifario !== t.id_tarifario);
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
