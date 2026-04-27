import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { FacturasService } from '../../core/services/facturas.service';
import { EmpresasService } from '../../core/services/empresas.service';

@Component({
  selector: 'app-facturas',
  imports: [CommonModule, RouterLink, RouterModule, Navbar],
  templateUrl: './facturas.html',
  styleUrl: './facturas.css',
})
export class Facturas implements OnInit {
  private service = inject(FacturasService);
  private empresasService = inject(EmpresasService);

  facturas: any[] = [];
  empresas: any[] = [];
  loading = true;
  successMsg = '';

  ngOnInit(): void {
    this.empresasService.getAll().subscribe({ next: (d) => this.empresas = d });
    this.service.getAll().subscribe({
      next: (data) => { this.facturas = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  getNombreEmpresa(id: number): string {
    const e = this.empresas.find(x => x.id_empresa === id);
    return e ? e.nombre : (id ? `#${id}` : '—');
  }

  eliminar(f: any): void {
    if (confirm(`¿Eliminar la factura "${f.numero_factura || f.id_factura}"?`)) {
      this.service.delete(f.id_factura).subscribe({
        next: () => {
          this.successMsg = 'Factura eliminada';
          this.facturas = this.facturas.filter(x => x.id_factura !== f.id_factura);
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
