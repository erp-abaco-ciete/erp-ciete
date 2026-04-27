import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { ContactosService } from '../../core/services/contactos.service';

@Component({
  selector: 'app-contactos',
  imports: [CommonModule, RouterLink, RouterModule, Navbar],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos implements OnInit {
  private service = inject(ContactosService);
  contactos: any[] = [];
  loading = true;
  successMsg = '';

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.contactos = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  eliminar(c: any): void {
    if (confirm(`¿Eliminar el contacto "${c.nombre}"?`)) {
      this.service.delete(c.id_contacto).subscribe({
        next: () => {
          this.successMsg = 'Contacto eliminado';
          this.contactos = this.contactos.filter(x => x.id_contacto !== c.id_contacto);
          setTimeout(() => this.successMsg = '', 3000);
        }
      });
    }
  }
}
