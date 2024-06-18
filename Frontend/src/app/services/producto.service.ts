import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listaProductos!: Array<Producto>;

  constructor(private _http: HttpClient) 
  { 

  }

  getProductos(): Observable<any>
  {
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get("http://localhost:3000/api/producto", httpOption);
  }

  getProductosDestacados(): Observable<any>
  {
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get("http://localhost:3000/api/producto/destacados", httpOption);
  }

  addProducto(producto: Producto): Observable<any>
  {
    console.log(producto);
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }

    let body: any = JSON.stringify(producto);
    return this._http.post("http://localhost:3000/api/producto", body, httpOption);
  }

}
