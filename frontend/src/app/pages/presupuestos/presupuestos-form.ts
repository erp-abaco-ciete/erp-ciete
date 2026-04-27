import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { PresupuestosService } from '../../core/services/presupuestos.service';

interface Linea { id_servicio: number | null; unidades: number | null; }

@Component({
  selector: 'app-presupuestos-form',
  imports: [CommonModule, FormsModule, RouterLink, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Nuevo Presupuesto</h1>
        <a routerLink="/presupuestos" class="btn btn-outline">← Volver</a>
      </div>
      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>
      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="form-group">
            <label>Fecha del presupuesto</label>
            <input type="date" class="form-control" [(ngModel)]="fecha" name="fecha">
          </div>
          <div class="section-title" style="margin-top:1.5rem">Líneas del presupuesto</div>
          <div style="margin-bottom:1rem">
            <button type="button" class="btn btn-secondary btn-sm" (click)="addLinea()">+ Añadir línea</button>
          </div>
          <div class="table-wrapper" *ngIf="lineas.length > 0">
            <table>
              <thead><tr><th>#</th><th>ID Servicio</th><th>Unidades</th><th></th></tr></thead>
              <tbody>
                <tr *ngFor="let linea of lineas; let i = index">
                  <td>{{ i + 1 }}</td>
                  <td><input type="number" class="form-control" [(ngModel)]="linea.id_servicio" [name]="'s'+i" placeholder="ID Servicio"></td>
                  <td><input type="number" class="form-control" [(ngModel)]="linea.unidades" [name]="'u'+i" placeholder="0" step="0.01"></td>
                  <td><button type="button" class="btn btn-sm btn-danger" (click)="removeLinea(i)">✕</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div *ngIf="lineas.length === 0" style="color:#94a3b8; font-size:14px; padding:1rem 0">
            Sin líneas. Pulsa "+ Añadir línea" para empezar.
          </div>
          <div style="margin-top:1.5rem">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : 'Guardar Presupuesto' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class PresupuestosForm {
  private service = inject(PresupuestosService);
  private router = inject(Router);

  fecha = '';
  lineas: Linea[] = [];
  loading = false;
  errorMsg = '';

  addLinea(): void { this.lineas.push({ id_servicio: null, unidades: null }); }
  removeLinea(i: number): void { this.lineas.splice(i, 1); }

  guardar(): void {
    this.loading = true;
    this.errorMsg = '';
    this.service.create({
      fecha_presupuesto: this.fecha || null,
      lineas: this.lineas.map(l => ({ id_servicio: l.id_servicio, unidades: l.unidades }))
    }).subscribe({
      next: () => this.router.navigate(['/presupuestos']),
      error: (err) => { this.errorMsg = err?.error?.detail || 'Error al crear'; this.loading = false; }
    });
  }
}
