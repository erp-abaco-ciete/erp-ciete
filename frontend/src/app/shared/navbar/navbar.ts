import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  private auth = inject(AuthService);
  isAdmin = false;
  permisos: any = {};

  ngOnInit(): void {
    this.auth.getMe().subscribe({
      next: (user: any) => {
        this.isAdmin = user.role === 'admin';
        try { this.permisos = JSON.parse(user.permisos || '{}'); } catch { this.permisos = {}; }
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
