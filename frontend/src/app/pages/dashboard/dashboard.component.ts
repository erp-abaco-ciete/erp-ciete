import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="welcome-banner">
        <div>
          <h1>Bienvenido, {{ userName }}</h1>
          <p>Panel de control — ERP Ciete Ingenieros</p>
        </div>
      </div>

      <div class="cards-grid">
        <a routerLink="/presupuestos" class="module-card">
          <div class="module-icon" style="background:#dbeafe; color:#2563eb">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <div class="module-info">
            <h3>Presupuestos</h3>
            <p>Gestiona y crea presupuestos para tus proyectos</p>
          </div>
          <div class="module-arrow">→</div>
        </a>

        <a routerLink="/pedidos" class="module-card">
          <div class="module-icon" style="background:#dcfce7; color:#16a34a">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
          <div class="module-info">
            <h3>Pedidos</h3>
            <p>Consulta y gestiona los pedidos generados</p>
          </div>
          <div class="module-arrow">→</div>
        </a>

        <a routerLink="/empresas" class="module-card">
          <div class="module-icon" style="background:#fef3c7; color:#d97706">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <div class="module-info">
            <h3>Empresas</h3>
            <p>Gestiona las empresas del sistema</p>
          </div>
          <div class="module-arrow">→</div>
        </a>

        <a routerLink="/contactos" class="module-card">
          <div class="module-icon" style="background:#ede9fe; color:#7c3aed">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <div class="module-info">
            <h3>Contactos</h3>
            <p>Administra los contactos y sus relaciones</p>
          </div>
          <div class="module-arrow">→</div>
        </a>

        <a routerLink="/estaciones" class="module-card">
          <div class="module-icon" style="background:#fee2e2; color:#dc2626">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <div class="module-info">
            <h3>Estaciones de Servicio</h3>
            <p>Gestiona las estaciones de servicio</p>
          </div>
          <div class="module-arrow">→</div>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getMe().subscribe({
      next: (user: any) => this.userName = user.name,
      error: () => this.userName = 'Usuario'
    });
  }
}
