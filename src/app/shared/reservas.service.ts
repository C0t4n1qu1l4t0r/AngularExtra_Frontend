import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  constructor(private http: HttpClient) { }

  reservar(reserva: any){
    return this.http.post<any>('http://127.0.0.1:8000/api/reservas', reserva);
  }
}
