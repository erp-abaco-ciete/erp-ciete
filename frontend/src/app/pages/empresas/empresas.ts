import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { EmpresasService } from '../../core/services/empresas.service';

@Component({
  selector: 'app-empresas',
  imports: [CommonModule, RouterLink, RouterModule, Navbar],
  templateUrl: './empresas.html',
  styleUrl: './empresas.css',
})
export class Empresas implements OnInit {
  private service = inject(EmpresasService);
  empresas: any[] = [];
  loading = true;
  successMsg = '';

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.empresas = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  eliminar(e: any): void {
    if (confirm(`¿Eliminar la empresa "${e.nombre}"?`)) {
      this.service.delete(e.id_empresa).subscribe({
        next: () => {
          this.successMsg = 'Empresa eliminada';
          this.empresas = this.empresas.filter(x => x.id_empresa !== e.id_empresa);
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
