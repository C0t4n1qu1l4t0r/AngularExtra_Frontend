import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CochesService {


  constructor(private http: HttpClient) { }

  getCoches(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/coches');
  }

  getCoche(id :any) : Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/coches/' + id);
  }
}
