import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../shared/navbar/navbar';
import { FacturasService } from '../../core/services/facturas.service';

@Component({
  selector: 'app-facturas-detail',
  imports: [CommonModule, RouterLink, FormsModule, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div *ngIf="loading" style="text-align:center;padding:48px;color:#64748b">Cargando...</div>
      <ng-container *ngIf="!loading && factura">
        <div class="page-header">
          <h1>Factura {{ factura.numero_factura || '#' + factura.id_factura }}</h1>
          <a routerLink="/facturas" class="btn btn-outline">← Volver</a>
        </div>
        <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
        <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

        <div class="detail-grid">
          <div class="card">
            <div class="section-title">Datos generales</div>
            <div class="detail-row"><span>Nº Factura</span><strong>{{ factura.numero_factura || '—' }}</strong></div>
            <div class="detail-row"><span>Empresa</span><strong>{{ factura.id_empresa || '—' }}</strong></div>
            <div class="detail-row"><span>Fecha</span><strong>{{ factura.fecha_factura || '—' }}</strong></div>
            <div class="detail-row"><span>Importe total</span><strong>{{ factura.importe_total | number:'1.2-2' }} €</strong></div>
          </div>
        </div>

        <div class="card">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem">
            <div class="section-title" style="margin:0">Cobros registrados</div>
          </div>
          <div class="table-wrapper">
            <table>
              <thead><tr><th>Fecha</th><th>Importe</th><th>Forma pago</th><th></th></tr></thead>
              <tbody>
                <tr *ngFor="let c of cobros">
                  <td>{{ c.fecha_cobro || '—' }}</td>
                  <td>{{ c.importe | number:'1.2-2' }} €</td>
                  <td>{{ c.forma_pago || '—' }}</td>
                  <td><button class="btn btn-sm btn-danger" (click)="eliminarCobro(c)">✕</button></td>
                </tr>
                <tr *ngIf="!cobros.length">
                  <td colspan="4" style="text-align:center;color:#94a3b8;padding:24px">Sin cobros</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="margin-top:1rem;border-top:1px solid #e5e7eb;padding-top:1rem">
            <div class="section-title">Añadir cobro</div>
            <div class="form-grid">
              <div class="form-group">
                <label>Fecha</label>
                <input type="date" class="form-control" [(ngModel)]="nuevoCobro.fecha_cobro" name="fecha_cobro">
              </div>
              <div class="form-group">
                <label>Importe (€)</label>
                <input type="number" class="form-control" [(ngModel)]="nuevoCobro.importe" name="importe" step="0.01">
              </div>
              <div class="form-group">
                <label>Forma de pago</label>
                <input type="text" class="form-control" [(ngModel)]="nuevoCobro.forma_pago" name="forma_pago" placeholder="Transferencia, etc.">
              </div>
            </div>
            <button class="btn btn-primary btn-sm" (click)="addCobro()" [disabled]="addingCobro">
              {{ addingCobro ? 'Añadiendo...' : 'Añadir cobro' }}
            </button>
          </div>
        </div>
      </ng-container>
    </div>
  `
})
export class FacturasDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(FacturasService);

  factura: any = null;
  cobros: any[] = [];
  loading = true;
  errorMsg = '';
  successMsg = '';
  addingCobro = false;
  nuevoCobro: any = { fecha_cobro: '', importe: null, forma_pago: '' };

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe({
      next: (data) => {
        this.factura = data;
        this.cobros = data.cobros || [];
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  addCobro(): void {
    this.addingCobro = true;
    this.service.addCobro(this.factura.id_factura, this.nuevoCobro).subscribe({
      next: (c) => {
        this.cobros.push(c);
        this.nuevoCobro = { fecha_cobro: '', importe: null, forma_pago: '' };
        this.addingCobro = false;
        this.successMsg = 'Cobro añadido';
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (err) => { this.errorMsg = err?.error?.detail || 'Error al añadir cobro'; this.addingCobro = false; }
    });
  }

  eliminarCobro(c: any): void {
    if (confirm('¿Eliminar este cobro?')) {
      this.service.deleteCobro(this.factura.id_factura, c.id_cobro).subscribe({
        next: () => { this.cobros = this.cobros.filter(x => x.id_cobro !== c.id_cobro); }
      });
    }
  }
}
