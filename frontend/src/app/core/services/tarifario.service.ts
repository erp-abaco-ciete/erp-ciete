import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TarifarioService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/tarifario`;

  getAll(): Observable<any[]> { return this.http.get<any[]>(this.apiUrl); }
  getOne(id: number): Observable<any> { return this.http.get<any>(`${this.apiUrl}/${id}`); }
  create(data: any): Observable<any> { return this.http.post<any>(this.apiUrl, data); }
  update(id: number, data: any): Observable<any> { return this.http.put<any>(`${this.apiUrl}/${id}`, data); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
  getServicios(id: number): Observable<any[]> { return this.http.get<any[]>(`${this.apiUrl}/${id}/servicios`); }
  addServicio(id: number, data: any): Observable<any> { return this.http.post<any>(`${this.apiUrl}/${id}/servicios`, data); }
  updateServicio(idT: number, idS: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${idT}/servicios/${idS}`, data);
  }
  deleteServicio(idT: number, idS: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idT}/servicios/${idS}`);
  }
}
