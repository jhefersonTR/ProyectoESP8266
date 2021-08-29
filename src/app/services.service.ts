import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataI } from './modal/data';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,

  ) { }

  Ultimodato() {
    let url =`http://localhost:8080/backend/ultimaactualizacion.php`;
    return this.http.get<DataI>(url);
  } 

  record() {
    let url =`http://localhost:8080/backend/top10.php`;
    return this.http.get<any>(url);
  } 


}
