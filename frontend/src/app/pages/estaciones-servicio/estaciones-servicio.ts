import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { EstacionesService } from '../../core/services/estaciones.service';

@Component({
  selector: 'app-estaciones-servicio',
  imports: [CommonModule, RouterLink, RouterModule, Navbar],
  templateUrl: './estaciones-servicio.html',
  styleUrl: './estaciones-servicio.css',
})
export class EstacionesServicio implements OnInit {
  private service = inject(EstacionesService);
  estaciones: any[] = [];
  loading = true;
  successMsg = '';

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.estaciones = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  eliminar(e: any): void {
    if (confirm(`¿Eliminar la estación "${e.nombre}"?`)) {
      this.service.delete(e.id_estacion).subscribe({
        next: () => {
          this.successMsg = 'Estación eliminada';
          this.estaciones = this.estaciones.filter(x => x.id_estacion !== e.id_estacion);
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
