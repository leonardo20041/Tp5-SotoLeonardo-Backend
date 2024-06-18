import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  listaTickets!: Array<Ticket>;
  categoria!: string;

  constructor(private ticketService: TicketService, 
    private router: Router)
    {
      this.obtenerTickets();
    }

  obtenerTickets() 
  {
    this.ticketService.getTickets().subscribe
    (
      data => 
        {
          this.listaTickets = data;
          console.log(this.listaTickets);
        },
        error => 
        {
          console.log(error);
        }
    )
  }

  obtenerTicketsByCategoria()
  {
    this.ticketService.getTicketsByCategoria(this.categoria).subscribe
    (
      data => 
        {
          this.listaTickets = data;
          console.log(this.listaTickets);
        },
        error => 
        {
          console.log(error);
        }
    )
  }

  eliminarTicket(_id: string)
  {
    this.ticketService.deleteTicket(_id).subscribe
    (
      data => 
        {
          if (data.status == 1)
            {
              alert("Ticket eliminado")
              this.obtenerTickets();
            }
        },
        error => 
        {
          console.log(error);
        }
    )
  }

  agregarTicket()
  {
    this.router.navigate(['ticket-form', 0]);
  }

  modificarTicket(id: string | undefined)
  {
    console.log(id);
    if (id)
      {
        this.router.navigate(['ticket-form', id]);
      }
      else
      {
        console.error('Ticket ID is undefined or null');
      }
  }

}
