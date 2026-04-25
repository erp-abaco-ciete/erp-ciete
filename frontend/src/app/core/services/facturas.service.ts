import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FacturasService {
  private apiUrl = `${environment.apiUrl}/facturas`;

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

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getCobros(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}/cobros`);
  }

  addCobro(id: number, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/cobros`, data);
  }

  deleteCobro(idFactura: number, idCobro: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idFactura}/cobros/${idCobro}`);
  }
}
