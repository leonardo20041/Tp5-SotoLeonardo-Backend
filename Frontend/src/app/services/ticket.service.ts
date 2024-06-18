import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  listaTickets!: Array<Ticket>;

  constructor(private _http: HttpClient) 
  { 

  }

  addTicket(ticket: Ticket): Observable<any>
  {
    console.log(ticket);
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }

    let body: any = JSON.stringify(ticket);
    return this._http.post("http://localhost:3000/api/ticket", body, httpOption);
  }

  getTickets(): Observable<any>
  {
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get("http://localhost:3000/api/ticket", httpOption);
  }

  getTicketById(_id: string): Observable<any>
  {
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }
    
    return this._http.get("http://localhost:3000/api/ticket/" +_id, httpOption);
  }

  getTicketsByCategoria(categoria: string): Observable<any>
  {
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get("http://localhost:3000/api/ticket/categoria/" +categoria, httpOption);
  }

  updateTicket(ticket: Ticket): Observable<any> 
  { 
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }

    let body: any = JSON.stringify(ticket);
    return this._http.put("http://localhost:3000/api/ticket/" + ticket._id, body, httpOption);
  }

  deleteTicket(_id: string): Observable<any>
  {
    let httpOption = 
    {
      headers: new HttpHeaders
      ({
        'Content-Type': 'application/json'
      })
    }

    return this._http.delete(`http://localhost:3000/api/ticket/${_id}`, httpOption);
  }
}
