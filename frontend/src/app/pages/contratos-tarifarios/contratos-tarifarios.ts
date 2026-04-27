import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { ContratosService } from '../../core/services/contratos.service';
import { TarifarioService } from '../../core/services/tarifario.service';
import { EmpresasService } from '../../core/services/empresas.service';

@Component({
  selector: 'app-contratos-tarifarios',
  imports: [CommonModule, RouterLink, RouterModule, Navbar],
  templateUrl: './contratos-tarifarios.html',
  styleUrl: './contratos-tarifarios.css',
})
export class ContratosTarifarios implements OnInit {
  private contratosService = inject(ContratosService);
  private tarifarioService = inject(TarifarioService);
  private empresasService = inject(EmpresasService);

  contratos: any[] = [];
  tarifarios: any[] = [];
  empresas: any[] = [];
  loadingC = true;
  loadingT = true;
  activeTab: 'contratos' | 'tarifarios' = 'contratos';
  successMsg = '';

  ngOnInit(): void {
    this.empresasService.getAll().subscribe({ next: (d) => this.empresas = d });
    this.contratosService.getAll().subscribe({
      next: (d) => { this.contratos = d; this.loadingC = false; },
      error: () => { this.loadingC = false; }
    });
    this.tarifarioService.getAll().subscribe({
      next: (d) => { this.tarifarios = d; this.loadingT = false; },
      error: () => { this.loadingT = false; }
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

  eliminarContrato(c: any): void {
    if (confirm(`¿Eliminar el contrato "${c.numero_contrato || c.nombre}"?`)) {
      this.contratosService.delete(c.id_contrato).subscribe({
        next: () => {
          this.contratos = this.contratos.filter(x => x.id_contrato !== c.id_contrato);
          this.successMsg = 'Contrato eliminado';
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }

  eliminarTarifario(t: any): void {
    if (confirm(`¿Eliminar el tarifario "${t.nombre_tarifario}"?`)) {
      this.tarifarioService.delete(t.id_tarifario).subscribe({
        next: () => {
          this.tarifarios = this.tarifarios.filter(x => x.id_tarifario !== t.id_tarifario);
          this.successMsg = 'Tarifario eliminado';
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
