import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { PresupuestosService } from '../../../core/services/presupuestos.service';

interface Linea {
  id_servicio: number | null;
  unidades: number | null;
}

@Component({
  selector: 'app-presupuestos-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Nuevo Presupuesto</h1>
        <a (click)="goBack()" class="btn btn-outline" style="cursor:pointer">← Volver</a>
      </div>

      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>

      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="form-group">
            <label for="fecha">Fecha del presupuesto</label>
            <input id="fecha" type="date" class="form-control" [(ngModel)]="fecha" name="fecha">
          </div>

          <div class="lineas-section">
            <div class="lineas-header">
              <h3>Líneas del presupuesto</h3>
              <button type="button" class="btn btn-secondary btn-sm" (click)="addLinea()">+ Añadir línea</button>
            </div>

            <div *ngIf="lineas.length === 0" class="empty-lineas">
              No hay líneas. Pulsa "+ Añadir línea" para comenzar.
            </div>

            <div class="table-wrapper" *ngIf="lineas.length > 0">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID Servicio</th>
                    <th>Unidades</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let linea of lineas; let i = index">
                    <td>{{ i + 1 }}</td>
                    <td>
                      <input type="number" class="form-control" [(ngModel)]="linea.id_servicio"
                        [name]="'servicio_' + i" placeholder="ID Servicio" min="1">
                    </td>
                    <td>
                      <input type="number" class="form-control" [(ngModel)]="linea.unidades"
                        [name]="'unidades_' + i" placeholder="0" min="0" step="0.01">
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger btn-sm" (click)="removeLinea(i)">✕</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style="margin-top:24px; display:flex; gap:12px">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : 'Guardar Presupuesto' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./presupuestos-form.component.css']
})
export class PresupuestosFormComponent {
  fecha = '';
  lineas: Linea[] = [];
  loading = false;
  errorMsg = '';

  constructor(private service: PresupuestosService, private router: Router) {}

  addLinea(): void {
    this.lineas.push({ id_servicio: null, unidades: null });
  }

  removeLinea(index: number): void {
    this.lineas.splice(index, 1);
  }

  guardar(): void {
    this.loading = true;
    this.errorMsg = '';
    const payload = {
      fecha_presupuesto: this.fecha || null,
      lineas: this.lineas.map(l => ({
        id_servicio: l.id_servicio,
        unidades: l.unidades
      }))
    };
    this.service.create(payload).subscribe({
      next: () => this.router.navigate(['/presupuestos']),
      error: (err) => {
        this.errorMsg = err?.error?.detail || 'Error al crear el presupuesto';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/presupuestos']);
  }
}
