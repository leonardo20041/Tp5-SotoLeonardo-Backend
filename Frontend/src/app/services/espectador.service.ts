import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Espectador } from '../models/espectador';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  listaEspectadores!: Array<Espectador>;

  constructor(private _http: HttpClient) { }

  getEspectadores(): Observable<any>
  {
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get("http://localhost:3000/api/espectador", httpOption);
  }
}
