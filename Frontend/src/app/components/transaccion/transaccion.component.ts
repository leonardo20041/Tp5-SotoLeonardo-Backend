import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Transaccion } from '../../models/transaccion';
import { TransaccionService } from '../../services/transaccion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaccion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaccion.component.html',
  styleUrl: './transaccion.component.css'
})
export class TransaccionComponent {

  listaTransacciones!: Array<Transaccion>;
  monedaOrigen: string = '';
  monedaDestino: string = '';

  constructor(private transaccionService: TransaccionService, 
              private router: Router,
              private route: ActivatedRoute)
  {
    this.obtenerTransacciones();
  }

  obtenerTransacciones() 
  {
    this.transaccionService.getTransacciones().subscribe
    (
      data => 
        {
          this.listaTransacciones = data;
          console.log(this.listaTransacciones);
        },
        error => 
        {
          console.log(error);
        }
    )
  }

  obtenerTransaccionesByDivisa()
  {
    this.transaccionService.getTransaccionesByDivisa(this.monedaOrigen, this.monedaDestino).subscribe
    (
      data => 
        {
          this.listaTransacciones = data;
          console.log(this.listaTransacciones);
        },
        error => 
        {
          console.log(error);
        }
    )
  }

  agregarTransaccion()
  {
    this.router.navigate(['transaccion-form', 0]);
  }
}
