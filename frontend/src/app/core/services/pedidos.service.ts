import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PedidosService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/pedidos`;

  getAll(): Observable<any[]> { return this.http.get<any[]>(this.apiUrl); }
  getOne(id: number): Observable<any> { return this.http.get<any>(`${this.apiUrl}/${id}`); }
}
