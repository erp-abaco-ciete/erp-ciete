import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="navbar-brand">
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#2563eb"/>
          <path d="M10 20 L20 10 L30 20 L20 30 Z" fill="white" opacity="0.9"/>
        </svg>
        <span>ERP Ciete</span>
      </div>

      <div class="navbar-links">
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/presupuestos" routerLinkActive="active">Presupuestos</a>
        <a routerLink="/pedidos" routerLinkActive="active">Pedidos</a>
        <a routerLink="/empresas" routerLinkActive="active">Empresas</a>
        <a routerLink="/contactos" routerLinkActive="active">Contactos</a>
        <a routerLink="/estaciones" routerLinkActive="active">Estaciones</a>
      </div>

      <button class="btn-logout" (click)="logout()">Cerrar sesión</button>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth: AuthService) {}

  logout(): void {
    this.auth.logout();
  }
}
