import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PresupuestosService {
  private apiUrl = `${environment.apiUrl}/presupuestos`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  cambiarEstado(id: number, estado: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}/estado`, { estado });
  }

  convertir(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/convertir`, {});
  }
}
