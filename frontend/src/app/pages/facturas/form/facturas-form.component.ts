import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FacturasService } from '../../../core/services/facturas.service';
import { EmpresasService } from '../../../core/services/empresas.service';
import { ContratosService } from '../../../core/services/contratos.service';
import { TarifarioService } from '../../../core/services/tarifario.service';
import { PedidosService } from '../../../core/services/pedidos.service';

@Component({
  selector: 'app-facturas-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Nueva Factura</h1>
        <a (click)="goBack()" class="btn btn-outline" style="cursor:pointer">← Volver</a>
      </div>

      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>

      <div class="card" style="margin-bottom:16px">
        <h3 class="section-title">Datos generales</h3>
        <div class="form-grid">
          <div class="form-group">
            <label>Número de factura</label>
            <input type="text" class="form-control" [(ngModel)]="form.numero_factura" name="numero_factura">
          </div>
          <div class="form-group">
            <label>Empresa</label>
            <select class="form-control" [(ngModel)]="form.id_empresa" name="id_empresa" (change)="onEmpresaChange()">
              <option [value]="null">— Seleccionar empresa —</option>
              <option *ngFor="let e of empresas" [value]="e.id_empresa">{{ e.nombre }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Contrato</label>
            <select class="form-control" [(ngModel)]="form.id_contrato" name="id_contrato">
              <option [value]="null">— Sin contrato —</option>
              <option *ngFor="let c of contratosFiltrados" [value]="c.id_contrato">
                {{ c.numero_contrato || c.nombre || '#' + c.id_contrato }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Tarifario</label>
            <select class="form-control" [(ngModel)]="form.id_tarifario" name="id_tarifario">
              <option [value]="null">— Sin tarifario —</option>
              <option *ngFor="let t of tarifarios" [value]="t.id_tarifario">{{ t.nombre_tarifario }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Fecha de factura</label>
            <input type="date" class="form-control" [(ngModel)]="form.fecha_factura" name="fecha_factura">
          </div>
          <div class="form-group">
            <label>Fecha de solicitud</label>
            <input type="date" class="form-control" [(ngModel)]="form.fecha_solicitud" name="fecha_solicitud">
          </div>
        </div>
      </div>

      <!-- Pedidos vinculados -->
      <div class="card" style="margin-bottom:16px">
        <h3 class="section-title">Pedidos vinculados</h3>
        <div style="display:flex;gap:8px;margin-bottom:12px">
          <select class="form-control" style="max-width:300px" [(ngModel)]="pedidoSeleccionado" name="pedido_sel">
            <option [value]="null">— Seleccionar pedido —</option>
            <option *ngFor="let p of pedidos" [value]="p.id_pedido"
              [disabled]="pedidosVinculados.includes(p.id_pedido)">
              Pedido #{{ p.id_pedido }} - {{ p.estado }}
            </option>
          </select>
          <button type="button" class="btn btn-secondary" (click)="vincularPedido()">Añadir</button>
        </div>
        <div *ngIf="pedidosVinculados.length > 0">
          <span *ngFor="let pid of pedidosVinculados" class="tag">
            Pedido #{{ pid }}
            <button type="button" class="tag-remove" (click)="quitarPedido(pid)">×</button>
          </span>
        </div>
        <p *ngIf="pedidosVinculados.length === 0" style="color:#94a3b8;font-size:13px">Sin pedidos vinculados</p>
      </div>

      <!-- Líneas de factura -->
      <div class="card" style="margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <h3 class="section-title" style="margin:0">Líneas de factura</h3>
          <button type="button" class="btn btn-secondary btn-sm" (click)="addLinea()">+ Añadir línea</button>
        </div>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Tarifario</th>
                <th>Servicio</th>
                <th>Precio unit.</th>
                <th>Unidades</th>
                <th>Importe</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let l of lineas; let i = index">
                <td>
                  <select class="form-control" [(ngModel)]="l.id_tarifario" [name]="'tar_' + i"
                    (change)="onTarifarioLineaChange(l)">
                    <option [value]="null">—</option>
                    <option *ngFor="let t of tarifarios" [value]="t.id_tarifario">{{ t.nombre_tarifario }}</option>
                  </select>
                </td>
                <td>
                  <select class="form-control" [(ngModel)]="l.id_servicio" [name]="'srv_' + i"
                    (change)="onServicioChange(l)">
                    <option [value]="null">—</option>
                    <option *ngFor="let s of getServiciosPorTarifario(l.id_tarifario)"
                      [value]="s.id_servicio">{{ s.nombre_servicio }}</option>
                  </select>
                </td>
                <td>
                  <input type="number" step="0.01" class="form-control" [(ngModel)]="l.precio_unitario"
                    [name]="'pu_' + i" (input)="calcularImporte(l)">
                </td>
                <td>
                  <input type="number" step="0.01" class="form-control" [(ngModel)]="l.unidades"
                    [name]="'u_' + i" (input)="calcularImporte(l)">
                </td>
                <td style="text-align:right;font-weight:600">
                  {{ (l.importe | number:'1.2-2') || '0.00' }} €
                </td>
                <td>
                  <button type="button" class="btn btn-sm btn-danger" (click)="removeLinea(i)">×</button>
                </td>
              </tr>
              <tr *ngIf="lineas.length === 0">
                <td colspan="6" style="text-align:center;color:#94a3b8;padding:16px">Sin líneas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div *ngIf="lineas.length > 0" style="text-align:right;font-size:16px;font-weight:700;padding:12px 0;border-top:1px solid #e2e8f0;margin-top:8px">
          Total: {{ calcularTotal() | number:'1.2-2' }} €
        </div>
      </div>

      <div style="display:flex;gap:12px">
        <button class="btn btn-primary" (click)="guardar()" [disabled]="loading">
          {{ loading ? 'Guardando...' : 'Crear Factura' }}
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./facturas-form.component.css']
})
export class FacturasFormComponent implements OnInit {
  loading = false;
  errorMsg = '';
  empresas: any[] = [];
  contratos: any[] = [];
  contratosFiltrados: any[] = [];
  tarifarios: any[] = [];
  pedidos: any[] = [];
  pedidosVinculados: number[] = [];
  pedidoSeleccionado: number | null = null;
  lineas: any[] = [];
  tarifarioServicios: { [id: number]: any[] } = {};

  form: any = {
    numero_factura: '', id_empresa: null, id_contrato: null,
    id_tarifario: null, fecha_factura: '', fecha_solicitud: '', importe_total: null
  };

  constructor(
    private service: FacturasService,
    private empresasService: EmpresasService,
    private contratosService: ContratosService,
    private tarifarioService: TarifarioService,
    private pedidosService: PedidosService,
    private router: Router,
    private route: ActivatedRoute
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
    this.pedidosService.getAll().subscribe({ next: (d) => this.pedidos = d });
  }

  onEmpresaChange(): void {
    this.contratosFiltrados = this.contratos.filter(c => c.id_empresa === this.form.id_empresa);
    this.form.id_contrato = null;
  }

  vincularPedido(): void {
    if (this.pedidoSeleccionado && !this.pedidosVinculados.includes(this.pedidoSeleccionado)) {
      this.pedidosVinculados.push(this.pedidoSeleccionado);
    }
    this.pedidoSeleccionado = null;
  }

  quitarPedido(id: number): void {
    this.pedidosVinculados = this.pedidosVinculados.filter(p => p !== id);
  }

  addLinea(): void {
    this.lineas.push({ id_tarifario: null, id_servicio: null, precio_unitario: null, unidades: null, importe: 0 });
  }

  removeLinea(i: number): void {
    this.lineas.splice(i, 1);
  }

  getServiciosPorTarifario(id: number): any[] {
    return this.tarifarioServicios[id] || [];
  }

  onTarifarioLineaChange(l: any): void {
    l.id_servicio = null;
    l.precio_unitario = null;
    l.importe = 0;
  }

  onServicioChange(l: any): void {
    const servicios = this.getServiciosPorTarifario(l.id_tarifario);
    const s = servicios.find((x: any) => x.id_servicio === l.id_servicio);
    if (s) l.precio_unitario = parseFloat(s.precio_unitario);
    this.calcularImporte(l);
  }

  calcularImporte(l: any): void {
    const pu = parseFloat(l.precio_unitario) || 0;
    const u = parseFloat(l.unidades) || 0;
    l.importe = pu * u;
  }

  calcularTotal(): number {
    return this.lineas.reduce((s, l) => s + (parseFloat(l.importe) || 0), 0);
  }

  guardar(): void {
    this.loading = true;
    this.errorMsg = '';
    const payload = {
      ...this.form,
      importe_total: this.calcularTotal() || null,
      pedidos_ids: this.pedidosVinculados,
      lineas: this.lineas.map(l => ({
        id_tarifario: l.id_tarifario,
        id_servicio: l.id_servicio,
        precio_unitario: l.precio_unitario,
        unidades: l.unidades,
        importe: l.importe
      }))
    };
    this.service.create(payload).subscribe({
      next: (f) => this.router.navigate(['/facturas', f.id_factura]),
      error: (err) => {
        this.errorMsg = err?.error?.detail || 'Error al crear la factura';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/facturas']);
  }
}
