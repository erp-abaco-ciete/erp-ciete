import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { PedidosService } from '../../core/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  imports: [CommonModule, RouterLink, RouterModule, Navbar],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css',
})
export class Pedidos implements OnInit {
  private service = inject(PedidosService);
  pedidos: any[] = [];
  loading = true;

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.pedidos = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
