import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-bg">
      <div class="login-card">
        <div class="login-logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="#2563eb"/>
            <path d="M10 20 L20 10 L30 20 L20 30 Z" fill="white" opacity="0.9"/>
          </svg>
          <span>ERP Ciete</span>
        </div>
        <h1>Iniciar sesión</h1>
        <p class="subtitle">Accede a tu panel de gestión</p>

        <div *ngIf="errorMsg" class="alert alert-error">{{ errorMsg }}</div>

        <form (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" [(ngModel)]="email" name="email"
              placeholder="admin@ciete.es" required autocomplete="email">
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input id="password" type="password" class="form-control" [(ngModel)]="password" name="password"
              placeholder="••••••••" required autocomplete="current-password">
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; padding:11px;" [disabled]="loading">
            {{ loading ? 'Entrando...' : 'Entrar' }}
          </button>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    this.errorMsg = '';
    this.loading = true;
    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => {
        this.errorMsg = 'Credenciales incorrectas';
        this.loading = false;
      }
    });
  }
}
