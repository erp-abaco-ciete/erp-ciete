import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { TarifarioService } from '../../../core/services/tarifario.service';
import { EmpresasService } from '../../../core/services/empresas.service';

@Component({
  selector: 'app-tarifario-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Nuevo Tarifario</h1>
        <a (click)="goBack()" class="btn btn-outline" style="cursor:pointer">← Volver</a>
      </div>

      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>

      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="form-grid">
            <div class="form-group">
              <label for="nombre_tarifario">Nombre del tarifario *</label>
              <input id="nombre_tarifario" type="text" class="form-control"
                [(ngModel)]="form.nombre_tarifario" name="nombre_tarifario" required>
            </div>
            <div class="form-group">
              <label for="id_empresa">Empresa</label>
              <select id="id_empresa" class="form-control" [(ngModel)]="form.id_empresa" name="id_empresa">
                <option [value]="null">— Seleccionar empresa —</option>
                <option *ngFor="let e of empresas" [value]="e.id_empresa">{{ e.nombre }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="fecha_tarifario">Fecha de vigencia</label>
              <input id="fecha_tarifario" type="date" class="form-control"
                [(ngModel)]="form.fecha_tarifario" name="fecha_tarifario">
            </div>
            <div class="form-group">
              <label for="fecha_fin">Fecha de fin</label>
              <input id="fecha_fin" type="date" class="form-control"
                [(ngModel)]="form.fecha_fin" name="fecha_fin">
            </div>
          </div>

          <div style="margin-top:24px; display:flex; gap:12px">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : 'Crear Tarifario' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./tarifario-form.component.css']
})
export class TarifarioFormComponent implements OnInit {
  loading = false;
  errorMsg = '';
  empresas: any[] = [];

  form: any = { nombre_tarifario: '', id_empresa: null, fecha_tarifario: '', fecha_fin: '' };

  constructor(
    private service: TarifarioService,
    private empresasService: EmpresasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.empresasService.getAll().subscribe({ next: (d) => this.empresas = d });
  }

  guardar(): void {
    if (!this.form.nombre_tarifario?.trim()) {
      this.errorMsg = 'El nombre del tarifario es obligatorio';
      return;
    }
    this.loading = true;
    this.errorMsg = '';
    this.service.create(this.form).subscribe({
      next: (t) => this.router.navigate(['/tarifario', t.id_tarifario]),
      error: (err) => {
        this.errorMsg = err?.error?.detail || 'Error al crear el tarifario';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/tarifario']);
  }
}
