import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { PresupuestosService } from '../../core/services/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  imports: [CommonModule, RouterLink, RouterModule, Navbar],
  templateUrl: './presupuestos.html',
  styleUrl: './presupuestos.css',
})
export class Presupuestos implements OnInit {
  private service = inject(PresupuestosService);
  presupuestos: any[] = [];
  loading = true;

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.presupuestos = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
