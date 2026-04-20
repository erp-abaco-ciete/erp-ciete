import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { ContactosService } from '../../../core/services/contactos.service';

@Component({
  selector: 'app-contactos-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="page-container">
      <div class="page-header">
        <h1>Contactos</h1>
        <a routerLink="/contactos/new" class="btn btn-primary">+ Nuevo Contacto</a>
      </div>

      <div *ngIf="successMsg" class="alert alert-success">{{ successMsg }}</div>

      <div class="card">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Primer Apellido</th>
                <th>Segundo Apellido</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let c of contactos">
                <td><strong>#{{ c.id_contacto }}</strong></td>
                <td>{{ c.nombre }}</td>
                <td>{{ c.apellido1 || '—' }}</td>
                <td>{{ c.apellido2 || '—' }}</td>
                <td class="actions-cell">
                  <a [routerLink]="['/contactos', c.id_contacto]" class="btn btn-sm btn-outline">Ver</a>
                  <a [routerLink]="['/contactos', c.id_contacto, 'edit']" class="btn btn-sm btn-secondary">Editar</a>
                  <button class="btn btn-sm btn-danger" (click)="eliminar(c)">Eliminar</button>
                </td>
              </tr>
              <tr *ngIf="contactos.length === 0 && !loading">
                <td colspan="5" style="text-align:center; color:#94a3b8; padding:32px">No hay contactos registrados</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div *ngIf="loading" style="text-align:center; padding:32px; color:#64748b">Cargando...</div>
      </div>
    </div>
  `,
  styleUrls: ['./contactos-list.component.css']
})
export class ContactosListComponent implements OnInit {
  contactos: any[] = [];
  loading = true;
  successMsg = '';

  constructor(private service: ContactosService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.contactos = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  eliminar(contacto: any): void {
    if (confirm(`¿Eliminar el contacto "${contacto.nombre}"?`)) {
      this.service.delete(contacto.id_contacto).subscribe({
        next: () => {
          this.successMsg = 'Contacto eliminado correctamente';
          this.contactos = this.contactos.filter(c => c.id_contacto !== contacto.id_contacto);
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
