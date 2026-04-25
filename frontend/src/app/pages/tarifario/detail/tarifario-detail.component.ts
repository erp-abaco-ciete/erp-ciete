import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { TarifarioService } from '../../../core/services/tarifario.service';
import { EmpresasService } from '../../../core/services/empresas.service';

@Component({
  selector: 'app-tarifario-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="!tarifario && !loading" class="alert alert-error">Tarifario no encontrado</div>
      <div *ngIf="loading" style="text-align:center; padding:48px; color:#64748b">Cargando...</div>

      <ng-container *ngIf="tarifario">
        <div class="page-header">
          <h1>{{ tarifario.nombre_tarifario }}</h1>
          <div style="display:flex;gap:8px">
            <a routerLink="/tarifario" class="btn btn-outline">← Volver</a>
          </div>
        </div>

        <!-- Info del tarifario -->
        <div class="card" style="margin-bottom:24px">
          <h3 style="font-size:15px;font-weight:600;margin-bottom:16px;color:#374151">Datos del tarifario</h3>
          <div *ngIf="editingInfo">
            <div class="form-grid">
              <div class="form-group">
                <label>Nombre *</label>
                <input type="text" class="form-control" [(ngModel)]="editForm.nombre_tarifario">
              </div>
              <div class="form-group">
                <label>Empresa</label>
                <select class="form-control" [(ngModel)]="editForm.id_empresa">
                  <option [value]="null">— Sin empresa —</option>
                  <option *ngFor="let e of empresas" [value]="e.id_empresa">{{ e.nombre }}</option>
                </select>
              </div>
              <div class="form-group">
                <label>Fecha vigencia</label>
                <input type="date" class="form-control" [(ngModel)]="editForm.fecha_tarifario">
              </div>
              <div class="form-group">
                <label>Fecha fin</label>
                <input type="date" class="form-control" [(ngModel)]="editForm.fecha_fin">
              </div>
            </div>
            <div style="margin-top:16px;display:flex;gap:8px">
              <button class="btn btn-primary" (click)="saveInfo()" [disabled]="savingInfo">
                {{ savingInfo ? 'Guardando...' : 'Guardar cambios' }}
              </button>
              <button class="btn btn-outline" (click)="editingInfo=false">Cancelar</button>
            </div>
          </div>
          <div *ngIf="!editingInfo">
            <div class="detail-grid">
              <div class="detail-row"><span class="detail-label">Empresa</span><span>{{ getNombreEmpresa(tarifario.id_empresa) }}</span></div>
              <div class="detail-row"><span class="detail-label">Fecha vigencia</span><span>{{ tarifario.fecha_tarifario || '—' }}</span></div>
              <div class="detail-row"><span class="detail-label">Fecha fin</span><span>{{ tarifario.fecha_fin || '—' }}</span></div>
            </div>
            <button class="btn btn-secondary" style="margin-top:16px" (click)="startEditInfo()">Editar datos</button>
          </div>
        </div>

        <!-- Servicios -->
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
            <h3 style="font-size:15px;font-weight:600;color:#374151;margin:0">Servicios del tarifario</h3>
            <button class="btn btn-primary btn-sm" (click)="showAddForm = !showAddForm">
              {{ showAddForm ? 'Cancelar' : '+ Añadir servicio' }}
            </button>
          </div>

          <!-- Formulario añadir servicio -->
          <div *ngIf="showAddForm" class="add-form">
            <div class="form-grid">
              <div class="form-group">
                <label>Código</label>
                <input type="text" class="form-control" [(ngModel)]="newServicio.codigo_servicio">
              </div>
              <div class="form-group">
                <label>Nº tarifa</label>
                <input type="text" class="form-control" [(ngModel)]="newServicio.numero_tarifa">
              </div>
              <div class="form-group">
                <label>Nombre del servicio *</label>
                <input type="text" class="form-control" [(ngModel)]="newServicio.nombre_servicio">
              </div>
              <div class="form-group">
                <label>Precio unitario *</label>
                <input type="number" step="0.01" class="form-control" [(ngModel)]="newServicio.precio_unitario">
              </div>
            </div>
            <div *ngIf="addError" class="alert alert-error" style="margin-top:8px">{{ addError }}</div>
            <button class="btn btn-primary" style="margin-top:12px" (click)="addServicio()" [disabled]="addingServicio">
              {{ addingServicio ? 'Añadiendo...' : 'Añadir servicio' }}
            </button>
          </div>

          <div *ngIf="successMsg" class="alert alert-success" style="margin-bottom:12px">{{ successMsg }}</div>

          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nº tarifa</th>
                  <th>Nombre</th>
                  <th>Precio unitario</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <ng-container *ngFor="let s of tarifario.servicios">
                  <tr *ngIf="editingServicioId !== s.id_servicio">
                    <td>{{ s.codigo_servicio || '—' }}</td>
                    <td>{{ s.numero_tarifa || '—' }}</td>
                    <td>{{ s.nombre_servicio }}</td>
                    <td>{{ s.precio_unitario | number:'1.2-2' }} €</td>
                    <td class="actions-cell">
                      <button class="btn btn-sm btn-secondary" (click)="startEditServicio(s)">Editar</button>
                      <button class="btn btn-sm btn-danger" (click)="deleteServicio(s)">Eliminar</button>
                    </td>
                  </tr>
                  <tr *ngIf="editingServicioId === s.id_servicio">
                    <td><input type="text" class="form-control" [(ngModel)]="editServicioForm.codigo_servicio"></td>
                    <td><input type="text" class="form-control" [(ngModel)]="editServicioForm.numero_tarifa"></td>
                    <td><input type="text" class="form-control" [(ngModel)]="editServicioForm.nombre_servicio"></td>
                    <td><input type="number" step="0.01" class="form-control" [(ngModel)]="editServicioForm.precio_unitario"></td>
                    <td class="actions-cell">
                      <button class="btn btn-sm btn-primary" (click)="saveServicio(s)" [disabled]="savingServicio">
                        {{ savingServicio ? '...' : 'Guardar' }}
                      </button>
                      <button class="btn btn-sm btn-outline" (click)="editingServicioId = null">Cancelar</button>
                    </td>
                  </tr>
                </ng-container>
                <tr *ngIf="tarifario.servicios.length === 0">
                  <td colspan="5" style="text-align:center;color:#94a3b8;padding:24px">No hay servicios en este tarifario</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./tarifario-detail.component.css']
})
export class TarifarioDetailComponent implements OnInit {
  tarifario: any = null;
  empresas: any[] = [];
  loading = true;
  successMsg = '';

  editingInfo = false;
  savingInfo = false;
  editForm: any = {};

  showAddForm = false;
  addingServicio = false;
  addError = '';
  newServicio: any = { codigo_servicio: '', numero_tarifa: '', nombre_servicio: '', precio_unitario: null };

  editingServicioId: number | null = null;
  editServicioForm: any = {};
  savingServicio = false;

  constructor(
    private service: TarifarioService,
    private empresasService: EmpresasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.empresasService.getAll().subscribe({ next: (d) => this.empresas = d });
    this.loadTarifario();
  }

  loadTarifario(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.loading = true;
    this.service.getOne(+id).subscribe({
      next: (data) => { this.tarifario = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  getNombreEmpresa(id: number): string {
    const e = this.empresas.find(x => x.id_empresa === id);
    return e ? e.nombre : (id ? `#${id}` : '—');
  }

  startEditInfo(): void {
    this.editForm = {
      nombre_tarifario: this.tarifario.nombre_tarifario,
      id_empresa: this.tarifario.id_empresa,
      fecha_tarifario: this.tarifario.fecha_tarifario || '',
      fecha_fin: this.tarifario.fecha_fin || ''
    };
    this.editingInfo = true;
  }

  saveInfo(): void {
    if (!this.editForm.nombre_tarifario?.trim()) return;
    this.savingInfo = true;
    this.service.update(this.tarifario.id_tarifario, this.editForm).subscribe({
      next: (data) => {
        this.tarifario = { ...data, servicios: this.tarifario.servicios };
        this.editingInfo = false;
        this.savingInfo = false;
        this.successMsg = 'Tarifario actualizado';
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: () => { this.savingInfo = false; }
    });
  }

  addServicio(): void {
    this.addError = '';
    if (!this.newServicio.nombre_servicio?.trim()) { this.addError = 'El nombre es obligatorio'; return; }
    if (!this.newServicio.precio_unitario) { this.addError = 'El precio es obligatorio'; return; }
    this.addingServicio = true;
    this.service.addServicio(this.tarifario.id_tarifario, this.newServicio).subscribe({
      next: (s) => {
        this.tarifario.servicios.push(s);
        this.newServicio = { codigo_servicio: '', numero_tarifa: '', nombre_servicio: '', precio_unitario: null };
        this.showAddForm = false;
        this.addingServicio = false;
        this.successMsg = 'Servicio añadido';
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (err) => {
        this.addError = err?.error?.detail || 'Error al añadir servicio';
        this.addingServicio = false;
      }
    });
  }

  startEditServicio(s: any): void {
    this.editingServicioId = s.id_servicio;
    this.editServicioForm = {
      codigo_servicio: s.codigo_servicio || '',
      numero_tarifa: s.numero_tarifa || '',
      nombre_servicio: s.nombre_servicio,
      precio_unitario: s.precio_unitario
    };
  }

  saveServicio(s: any): void {
    this.savingServicio = true;
    this.service.updateServicio(this.tarifario.id_tarifario, s.id_servicio, this.editServicioForm).subscribe({
      next: (updated) => {
        const idx = this.tarifario.servicios.findIndex((x: any) => x.id_servicio === s.id_servicio);
        if (idx >= 0) this.tarifario.servicios[idx] = updated;
        this.editingServicioId = null;
        this.savingServicio = false;
        this.successMsg = 'Servicio actualizado';
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: () => { this.savingServicio = false; }
    });
  }

  deleteServicio(s: any): void {
    if (!confirm(`¿Eliminar el servicio "${s.nombre_servicio}"?`)) return;
    this.service.deleteServicio(this.tarifario.id_tarifario, s.id_servicio).subscribe({
      next: () => {
        this.tarifario.servicios = this.tarifario.servicios.filter((x: any) => x.id_servicio !== s.id_servicio);
        this.successMsg = 'Servicio eliminado';
        setTimeout(() => this.successMsg = '', 3000);
      }
    });
  }
}
