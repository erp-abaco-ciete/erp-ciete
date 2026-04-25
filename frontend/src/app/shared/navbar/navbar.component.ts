import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
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
        <a routerLink="/contratos" routerLinkActive="active" *ngIf="hasPermiso('contratos')">Contratos</a>
        <a routerLink="/tarifario" routerLinkActive="active" *ngIf="hasPermiso('tarifario')">Tarifario</a>
        <a routerLink="/facturas" routerLinkActive="active" *ngIf="hasPermiso('facturas')">Facturas</a>
        <a routerLink="/usuarios" routerLinkActive="active" *ngIf="isAdmin">Usuarios</a>
      </div>

      <button class="btn-logout" (click)="logout()">Cerrar sesión</button>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin = false;
  permisos: any = {};

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getMe().subscribe({
      next: (user: any) => {
        this.isAdmin = user.role === 'admin';
        try {
          this.permisos = JSON.parse(user.permisos || '{}');
        } catch {
          this.permisos = {};
        }
      }
    });
  }

  hasPermiso(modulo: string): boolean {
    if (this.isAdmin) return true;
    return this.permisos[modulo] === true;
  }

  logout(): void {
    this.auth.logout();
  }
}
