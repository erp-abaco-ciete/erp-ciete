import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { FacturasService } from '../../core/services/facturas.service';
import { EmpresasService } from '../../core/services/empresas.service';

@Component({
  selector: 'app-facturas-form',
  imports: [CommonModule, FormsModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Nueva Factura</h1>
        <a routerLink="/facturas" class="btn btn-outline">← Volver</a>
      </div>
      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="form-grid">
            <div class="form-group">
              <label>Número de factura</label>
              <input type="text" class="form-control" [(ngModel)]="form.numero_factura" name="numero_factura" placeholder="FAC-0001">
            </div>
            <div class="form-group">
              <label>Empresa</label>
              <select class="form-control" [(ngModel)]="form.id_empresa" name="id_empresa">
                <option [ngValue]="null">— Seleccionar —</option>
                <option *ngFor="let e of empresas" [ngValue]="e.id_empresa">{{ e.nombre }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Fecha de factura</label>
              <input type="date" class="form-control" [(ngModel)]="form.fecha_factura" name="fecha_factura">
            </div>
            <div class="form-group">
              <label>Importe total (€)</label>
              <input type="number" class="form-control" [(ngModel)]="form.importe_total" name="importe_total" step="0.01" placeholder="0.00">
            </div>
          </div>
          <div style="margin-top:1.5rem">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : 'Guardar Factura' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class FacturasForm implements OnInit {
  private service = inject(FacturasService);
  private empresasService = inject(EmpresasService);
  private router = inject(Router);

  empresas: any[] = [];
  loading = false;
  errorMsg = '';
  form: any = { numero_factura: '', id_empresa: null, fecha_factura: '', importe_total: null };

  ngOnInit(): void {
    this.empresasService.getAll().subscribe({ next: (d) => this.empresas = d });
  }

  guardar(): void {
    this.loading = true;
    this.errorMsg = '';
    this.service.create(this.form).subscribe({
      next: () => this.router.navigate(['/facturas']),
      error: (err) => { this.errorMsg = err?.error?.detail || 'Error al crear'; this.loading = false; }
    });
  }
}
