import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FacturasService } from '../../../core/services/facturas.service';
import { EmpresasService } from '../../../core/services/empresas.service';
import { ContratosService } from '../../../core/services/contratos.service';
import { TarifarioService } from '../../../core/services/tarifario.service';

@Component({
  selector: 'app-facturas-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center; padding:48px; color:#64748b">Cargando...</div>
      <div *ngIf="!factura && !loading" class="alert alert-error">Factura no encontrada</div>

      <ng-container *ngIf="factura">
        <div class="page-header">
          <h1>Factura {{ factura.numero_factura || '#' + factura.id_factura }}</h1>
          <div style="display:flex;gap:8px">
            <a routerLink="/facturas" class="btn btn-outline">← Volver</a>
          </div>
        </div>

        <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

        <!-- Datos generales -->
        <div class="card" style="margin-bottom:16px">
          <h3 class="section-title">Datos generales</h3>
          <div class="detail-grid">
            <div class="detail-row"><span class="detail-label">Empresa</span><span>{{ getNombreEmpresa(factura.id_empresa) }}</span></div>
            <div class="detail-row"><span class="detail-label">Fecha de factura</span><span>{{ factura.fecha_factura || '—' }}</span></div>
            <div class="detail-row"><span class="detail-label">Fecha de solicitud</span><span>{{ factura.fecha_solicitud || '—' }}</span></div>
            <div class="detail-row"><span class="detail-label">Contrato</span><span>{{ getNombreContrato(factura.id_contrato) }}</span></div>
            <div class="detail-row"><span class="detail-label">Tarifario</span><span>{{ getNombreTarifario(factura.id_tarifario) }}</span></div>
            <div class="detail-row">
              <span class="detail-label">Estado de cobro</span>
              <span [class]="getEstadoCobro().clase">{{ getEstadoCobro().label }}</span>
            </div>
          </div>
        </div>

        <!-- Pedidos vinculados -->
        <div class="card" style="margin-bottom:16px" *ngIf="factura.pedidos_vinculados?.length > 0">
          <h3 class="section-title">Pedidos vinculados</h3>
          <div>
            <span *ngFor="let pv of factura.pedidos_vinculados" class="tag">
              Pedido #{{ pv.id_pedido }}
            </span>
          </div>
        </div>

        <!-- Líneas -->
        <div class="card" style="margin-bottom:16px">
          <h3 class="section-title">Líneas de factura</h3>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Tarifario</th>
                  <th>Servicio</th>
                  <th>Precio unit.</th>
                  <th>Unidades</th>
                  <th style="text-align:right">Importe</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let l of factura.lineas">
                  <td>{{ getNombreTarifario(l.id_tarifario) }}</td>
                  <td>{{ getNombreServicio(l.id_tarifario, l.id_servicio) }}</td>
                  <td>{{ l.precio_unitario | number:'1.2-2' }} €</td>
                  <td>{{ l.unidades }}</td>
                  <td style="text-align:right;font-weight:600">{{ l.importe | number:'1.2-2' }} €</td>
                </tr>
                <tr *ngIf="factura.lineas.length === 0">
                  <td colspan="5" style="text-align:center;color:#94a3b8;padding:16px">Sin líneas</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div *ngIf="factura.lineas.length > 0"
            style="text-align:right;font-size:16px;font-weight:700;padding:12px 0;border-top:1px solid #e2e8f0;margin-top:8px">
            Total: {{ factura.importe_total | number:'1.2-2' }} €
          </div>
        </div>

        <!-- Cobros -->
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
            <h3 class="section-title" style="margin:0">Cobros</h3>
            <button class="btn btn-secondary btn-sm" (click)="showCobroForm = !showCobroForm">
              {{ showCobroForm ? 'Cancelar' : '+ Registrar cobro' }}
            </button>
          </div>

          <!-- Formulario cobro inline -->
          <div *ngIf="showCobroForm" class="add-form">
            <div class="form-grid">
              <div class="form-group">
                <label>Importe *</label>
                <input type="number" step="0.01" class="form-control" [(ngModel)]="newCobro.importe">
              </div>
              <div class="form-group">
                <label>Fecha *</label>
                <input type="date" class="form-control" [(ngModel)]="newCobro.fecha">
              </div>
              <div class="form-group">
                <label>Tipología</label>
                <input type="text" class="form-control" [(ngModel)]="newCobro.tipologia_cobro"
                  placeholder="Transferencia, cheque...">
              </div>
              <div class="form-group">
                <label>Cuenta bancaria</label>
                <input type="text" class="form-control" [(ngModel)]="newCobro.cuenta_bancaria">
              </div>
            </div>
            <div *ngIf="cobroError" class="alert alert-error" style="margin-top:8px">{{ cobroError }}</div>
            <button class="btn btn-primary" style="margin-top:12px" (click)="addCobro()" [disabled]="addingCobro">
              {{ addingCobro ? 'Registrando...' : 'Registrar cobro' }}
            </button>
          </div>

          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Importe</th>
                  <th>Tipología</th>
                  <th>Cuenta bancaria</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let c of factura.cobros">
                  <td>{{ c.fecha }}</td>
                  <td><strong>{{ c.importe | number:'1.2-2' }} €</strong></td>
                  <td>{{ c.tipologia_cobro || '—' }}</td>
                  <td>{{ c.cuenta_bancaria || '—' }}</td>
                  <td>
                    <button class="btn btn-sm btn-danger" (click)="deleteCobro(c)">Eliminar</button>
                  </td>
                </tr>
                <tr *ngIf="factura.cobros.length === 0">
                  <td colspan="5" style="text-align:center;color:#94a3b8;padding:16px">Sin cobros registrados</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div *ngIf="factura.cobros.length > 0"
            style="text-align:right;font-size:14px;padding-top:12px;color:#374151">
            Total cobrado: <strong>{{ totalCobrado() | number:'1.2-2' }} €</strong>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./facturas-detail.component.css']
})
export class FacturasDetailComponent implements OnInit {
  factura: any = null;
  loading = true;
  successMsg = '';
  empresas: any[] = [];
  contratos: any[] = [];
  tarifarios: any[] = [];
  tarifarioServicios: { [id: number]: any[] } = {};

  showCobroForm = false;
  addingCobro = false;
  cobroError = '';
  newCobro: any = { importe: null, fecha: '', tipologia_cobro: '', cuenta_bancaria: '' };

  constructor(
    private service: FacturasService,
    private empresasService: EmpresasService,
    private contratosService: ContratosService,
    private tarifarioService: TarifarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.empresasService.getAll().subscribe({ next: (d) => this.empresas = d });
    this.contratosService.getAll().subscribe({ next: (d) => this.contratos = d });
    this.tarifarioService.getAll().subscribe({
      next: (d) => {
        this.tarifarios = d;
        d.forEach((t: any) => { this.tarifarioServicios[t.id_tarifario] = t.servicios || []; });
      }
    });
    this.loadFactura();
  }

  loadFactura(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.service.getOne(+id).subscribe({
      next: (data) => { this.factura = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  getNombreEmpresa(id: number): string {
    const e = this.empresas.find(x => x.id_empresa === id);
    return e ? e.nombre : (id ? `#${id}` : '—');
  }

  getNombreContrato(id: number): string {
    const c = this.contratos.find(x => x.id_contrato === id);
    return c ? (c.numero_contrato || c.nombre || `#${id}`) : (id ? `#${id}` : '—');
  }

  getNombreTarifario(id: number): string {
    const t = this.tarifarios.find(x => x.id_tarifario === id);
    return t ? t.nombre_tarifario : (id ? `#${id}` : '—');
  }

  getNombreServicio(idTarifario: number, idServicio: number): string {
    const servicios = this.tarifarioServicios[idTarifario] || [];
    const s = servicios.find((x: any) => x.id_servicio === idServicio);
    return s ? s.nombre_servicio : (idServicio ? `#${idServicio}` : '—');
  }

  getEstadoCobro(): { label: string; clase: string } {
    const total = parseFloat(this.factura?.importe_total) || 0;
    const cobrado = this.totalCobrado();
    if (cobrado <= 0) return { label: 'Pendiente', clase: 'badge-pendiente' };
    if (cobrado >= total) return { label: 'Cobrada', clase: 'badge-aprobado' };
    return { label: 'Cobro parcial', clase: 'badge-borrador' };
  }

  totalCobrado(): number {
    return (this.factura?.cobros || []).reduce((s: number, c: any) => s + parseFloat(c.importe || 0), 0);
  }

  addCobro(): void {
    this.cobroError = '';
    if (!this.newCobro.importe) { this.cobroError = 'El importe es obligatorio'; return; }
    if (!this.newCobro.fecha) { this.cobroError = 'La fecha es obligatoria'; return; }
    this.addingCobro = true;
    this.service.addCobro(this.factura.id_factura, this.newCobro).subscribe({
      next: (c) => {
        this.factura.cobros.push(c);
        this.newCobro = { importe: null, fecha: '', tipologia_cobro: '', cuenta_bancaria: '' };
        this.showCobroForm = false;
        this.addingCobro = false;
        this.successMsg = 'Cobro registrado';
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (err) => {
        this.cobroError = err?.error?.detail || 'Error al registrar el cobro';
        this.addingCobro = false;
      }
    });
  }

  deleteCobro(cobro: any): void {
    if (!confirm('¿Eliminar este cobro?')) return;
    this.service.deleteCobro(this.factura.id_factura, cobro.id_cobro).subscribe({
      next: () => {
        this.factura.cobros = this.factura.cobros.filter((c: any) => c.id_cobro !== cobro.id_cobro);
        this.successMsg = 'Cobro eliminado';
        setTimeout(() => this.successMsg = '', 3000);
      }
    });
  }
}
