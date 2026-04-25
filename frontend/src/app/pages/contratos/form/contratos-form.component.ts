import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { ContratosService } from '../../../core/services/contratos.service';
import { EmpresasService } from '../../../core/services/empresas.service';
import { TarifarioService } from '../../../core/services/tarifario.service';

@Component({
  selector: 'app-contratos-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>{{ isEdit ? 'Editar Contrato' : 'Nuevo Contrato' }}</h1>
        <a (click)="goBack()" class="btn btn-outline" style="cursor:pointer">← Volver</a>
      </div>

      <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>

      <div class="card">
        <form (ngSubmit)="guardar()">
          <div class="form-grid">
            <div class="form-group">
              <label for="numero_contrato">Número de contrato</label>
              <input id="numero_contrato" type="text" class="form-control"
                [(ngModel)]="form.numero_contrato" name="numero_contrato">
            </div>
            <div class="form-group">
              <label for="nombre">Nombre del contrato</label>
              <input id="nombre" type="text" class="form-control" [(ngModel)]="form.nombre" name="nombre">
            </div>
            <div class="form-group">
              <label for="id_empresa">Empresa</label>
              <select id="id_empresa" class="form-control" [(ngModel)]="form.id_empresa" name="id_empresa">
                <option [value]="null">— Seleccionar empresa —</option>
                <option *ngFor="let e of empresas" [value]="e.id_empresa">{{ e.nombre }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="id_tarifario">Tarifario</label>
              <select id="id_tarifario" class="form-control" [(ngModel)]="form.id_tarifario" name="id_tarifario">
                <option [value]="null">— Seleccionar tarifario —</option>
                <option *ngFor="let t of tarifarios" [value]="t.id_tarifario">{{ t.nombre_tarifario }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="fecha_inicio">Fecha de inicio</label>
              <input id="fecha_inicio" type="date" class="form-control"
                [(ngModel)]="form.fecha_inicio" name="fecha_inicio">
            </div>
            <div class="form-group">
              <label for="fecha_fin">Fecha de fin</label>
              <input id="fecha_fin" type="date" class="form-control"
                [(ngModel)]="form.fecha_fin" name="fecha_fin">
            </div>
          </div>
          <div class="form-group" style="margin-top:16px">
            <label for="descripcion">Descripción</label>
            <textarea id="descripcion" class="form-control" [(ngModel)]="form.descripcion"
              name="descripcion" rows="3"></textarea>
          </div>

          <div style="margin-top:24px; display:flex; gap:12px">
            <button type="submit" class="btn btn-primary" [disabled]="loading">
              {{ loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Guardar Contrato') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./contratos-form.component.css']
})
export class ContratosFormComponent implements OnInit {
  isEdit = false;
  editId: number | null = null;
  loading = false;
  errorMsg = '';
  empresas: any[] = [];
  tarifarios: any[] = [];

  form: any = {
    numero_contrato: '', nombre: '', id_empresa: null,
    id_tarifario: null, fecha_inicio: '', fecha_fin: '', descripcion: ''
  };

  constructor(
    private service: ContratosService,
    private empresasService: EmpresasService,
    private tarifarioService: TarifarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.empresasService.getAll().subscribe({ next: (d) => this.empresas = d });
    this.tarifarioService.getAll().subscribe({ next: (d) => this.tarifarios = d });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.editId = +id;
      this.service.getOne(this.editId).subscribe({
        next: (data) => {
          this.form = {
            numero_contrato: data.numero_contrato || '',
            nombre: data.nombre || '',
            id_empresa: data.id_empresa,
            id_tarifario: data.id_tarifario,
            fecha_inicio: data.fecha_inicio || '',
            fecha_fin: data.fecha_fin || '',
            descripcion: data.descripcion || ''
          };
        },
        error: () => this.errorMsg = 'Error al cargar el contrato'
      });
    }
  }

  guardar(): void {
    this.loading = true;
    this.errorMsg = '';
    const obs = this.isEdit
      ? this.service.update(this.editId!, this.form)
      : this.service.create(this.form);
    obs.subscribe({
      next: () => this.router.navigate(['/contratos']),
      error: (err) => {
        this.errorMsg = err?.error?.detail || 'Error al guardar el contrato';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/contratos']);
  }
}
