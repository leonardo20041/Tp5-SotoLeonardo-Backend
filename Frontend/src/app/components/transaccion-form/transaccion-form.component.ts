import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Transaccion } from '../../models/transaccion';
import { TransaccionService } from '../../services/transaccion.service';

@Component({
  selector: 'app-transaccion-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './transaccion-form.component.html',
  styleUrl: './transaccion-form.component.css'
})
export class TransaccionFormComponent {

  transaccion!: Transaccion;
  accion: string = "new";
  monedaOrigen!: string; //moneda de entrada USD
  monedaDestino!: string; //ARS

  cantidadOrigen!: any; //ingresado

  cantidadDestino!: any; //devuelto

  constructor(private activatedRoute: ActivatedRoute, private transaccionService: TransaccionService, private router: Router) 
  { 
    this.iniciarVariable();
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
        /*else
        {
          this.accion = "update"; 
          this.cargarProducto(params['id']);
        }*/
      });
  }

  convertir(): void
  {
    this.transaccionService.convert(this.transaccion.monedaOrigen, this.transaccion.monedaDestino, this.transaccion.cantidadOrigen).subscribe
    (
      (data) => 
      {
        console.log('Resultado de la conversión:', data.result);
        this.transaccion.cantidadDestino = data.result;
        this.agregarTransaccion();
      },
      (error: any) => 
      {
        console.log(error);
      }
    );


    //metodo usando tasaConversion: 
    //(profe no entiendo el por que usaria esta variable si con la API de internet ya se puede calcular), ademas la que usted dejo no funciona
    /*if (!this.transaccion.tasaConversion || this.transaccion.tasaConversion <= 0) {
      console.error('Tasa de conversión no válida.');
      return;
    }

    this.transaccion.cantidadDestino = this.transaccion.cantidadOrigen * this.transaccion.tasaConversion;
    this.agregarTransaccion();*/
  }

  agregarTransaccion(): void
  {
    this.transaccionService.addTransaccion(this.transaccion).subscribe
    (
      (result) => 
      {
        if(result.status == 1)
          {
            alert("Transaccion guardada");
            this.router.navigate(['transaccion']);
          }
        
      },
      (error: any) => 
      {
        console.log(error);
      }
    ); 
    this.transaccion = new Transaccion(); 
  }

  iniciarVariable(): void
  {
    this.transaccion = new Transaccion(); 
  }
}
