import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  listaTransacciones!: Array<Transaccion>;
  
  constructor(private _http: HttpClient) 
  { 

  }

  addTransaccion(transaccion: Transaccion): Observable<any>
  {
    console.log(transaccion);
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }

    let body: any = JSON.stringify(transaccion);
    return this._http.post("http://localhost:3000/api/transaccion", body, httpOption);
  }

  getTransacciones(): Observable<any>
  {
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get("http://localhost:3000/api/transaccion", httpOption);
  }

  getTransaccionesByDivisa(monedaOrigen: string, monedaDestino: string): Observable<any>
  {
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }
    //return this._http.get("http://localhost:3000/api/transaccion/" +monedaOrigen +"/" +monedaDestino, httpOption);
    return this._http.get(`http://localhost:3000/api/transaccion/${monedaOrigen}/${monedaDestino}`, httpOption);
  }

  convert(monedaOrigen: string, monedaDestino: string, cantidadOrigen: any): Observable<any>
  {
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'x-rapidapi-key': 'f541794a55mshc017787ceb79636p1597d6jsn5991185f20cf',
        'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
      })
    }
    return this._http.get("https://currency-converter-pro1.p.rapidapi.com/convert?from=" +monedaOrigen +"&to=" +monedaDestino +"&amount=" +cantidadOrigen, httpOption);
  }

}
