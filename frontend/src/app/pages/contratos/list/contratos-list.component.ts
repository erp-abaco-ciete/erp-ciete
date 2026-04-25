import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { ContratosService } from '../../../core/services/contratos.service';
import { EmpresasService } from '../../../core/services/empresas.service';
import { TarifarioService } from '../../../core/services/tarifario.service';

@Component({
  selector: 'app-contratos-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Contratos</h1>
        <a routerLink="/contratos/new" class="btn btn-primary">+ Nuevo Contrato</a>
      </div>

      <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Nº Contrato</th>
                <th>Nombre</th>
                <th>Empresa</th>
                <th>Tarifario</th>
                <th>Fecha inicio</th>
                <th>Fecha fin</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let c of contratos">
                <td><strong>{{ c.numero_contrato || '—' }}</strong></td>
                <td>{{ c.nombre || '—' }}</td>
                <td>{{ getNombreEmpresa(c.id_empresa) }}</td>
                <td>{{ getNombreTarifario(c.id_tarifario) }}</td>
                <td>{{ c.fecha_inicio || '—' }}</td>
                <td>{{ c.fecha_fin || '—' }}</td>
                <td>
                  <span [class]="isVigente(c.fecha_fin) ? 'badge-aprobado' : 'badge-rechazado'">
                    {{ isVigente(c.fecha_fin) ? 'Vigente' : 'Caducado' }}
                  </span>
                </td>
                <td class="actions-cell">
                  <a [routerLink]="['/contratos', c.id_contrato, 'edit']" class="btn btn-sm btn-secondary">Editar</a>
                  <button class="btn btn-sm btn-danger" (click)="eliminar(c)">Eliminar</button>
                </td>
              </tr>
              <tr *ngIf="contratos.length === 0 && !loading">
                <td colspan="8" style="text-align:center; color:#94a3b8; padding:32px">No hay contratos registrados</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div *ngIf="loading" style="text-align:center; padding:32px; color:#64748b">Cargando...</div>
      </div>
    </div>
  `,
  styleUrls: ['./contratos-list.component.css']
})
export class ContratosListComponent implements OnInit {
  contratos: any[] = [];
  empresas: any[] = [];
  tarifarios: any[] = [];
  loading = true;
  successMsg = '';

  constructor(
    private service: ContratosService,
    private empresasService: EmpresasService,
    private tarifarioService: TarifarioService
  ) {}

  ngOnInit(): void {
    this.empresasService.getAll().subscribe({ next: (d) => this.empresas = d });
    this.tarifarioService.getAll().subscribe({ next: (d) => this.tarifarios = d });
    this.service.getAll().subscribe({
      next: (data) => { this.contratos = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  getNombreEmpresa(id: number): string {
    const e = this.empresas.find(x => x.id_empresa === id);
    return e ? e.nombre : (id ? `#${id}` : '—');
  }

  getNombreTarifario(id: number): string {
    const t = this.tarifarios.find(x => x.id_tarifario === id);
    return t ? t.nombre_tarifario : (id ? `#${id}` : '—');
  }

  isVigente(fechaFin: string | null): boolean {
    if (!fechaFin) return true;
    return new Date(fechaFin) >= new Date();
  }

  eliminar(contrato: any): void {
    if (confirm(`¿Eliminar el contrato "${contrato.numero_contrato || contrato.nombre}"?`)) {
      this.service.delete(contrato.id_contrato).subscribe({
        next: () => {
          this.successMsg = 'Contrato eliminado correctamente';
          this.contratos = this.contratos.filter(c => c.id_contrato !== contrato.id_contrato);
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
