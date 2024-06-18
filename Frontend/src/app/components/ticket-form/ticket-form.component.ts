import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { Espectador } from '../../models/espectador';
import { EspectadorService } from '../../services/espectador.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {

  ticket!: Ticket;
  listaEspectadores!: Array<Espectador>;
  accion: string = "new";

  constructor(private activatedRoute: ActivatedRoute, 
              private ticketService: TicketService, 
              private espectadorService: EspectadorService, 
              private router: Router) 
  { 
    this.iniciarVariable();
    this.cargarEspectadores();
  }

  ngOnInit(): void
  {
    this.activatedRoute.params.subscribe(params => 
      {
        if (params['id'] == "0")
          {
            this.accion = "new"; 
            this.iniciarVariable();
          }
        else
        {
          this.accion = "update"; 
          this.cargarTicket(params['id']);
        }
      });
      //this.cargarEspectadores();
  }

  cargarTicket(id: string): void 
  {
    console.log(this.ticket);
    this.ticketService.getTicketById(id).subscribe
    (
      (result) => 
      {
        this.ticket = result; 
      },
      (error: any) => 
      {
        console.log(error);
      }
    );
  }

  agregarTicket(): void
  {
    this.ticketService.addTicket(this.ticket).subscribe
    (
      (result) => 
      {
        if(result.status == 1)
          {
            alert("Ticket guardado");
            this.router.navigate(['ticket']);
          }
        
      },
      (error: any) => 
      {
        console.log(error);
      }
    ); 
    this.ticket = new Ticket(); 
  }

  actualizarTicket():void
  {
    this.ticketService.updateTicket(this.ticket).subscribe
    (
      (result) => 
      {
        if(result.status == 1)
          {
            alert("Ticket actualizado");
            this.router.navigate(['ticket']);
          }
        
      },
      (error: any) => 
      {
        console.log(error);
      }
    ); 
  }

  iniciarVariable(): void
  {
    this.ticket = new Ticket(); 
  }

  cargarEspectadores(): void 
  {
    this.espectadorService.getEspectadores().subscribe
    (
      (result) => 
      {
        this.listaEspectadores = result;
      },
      (error: any) => 
      {
        console.log(error);
      }
    );
  }
}
