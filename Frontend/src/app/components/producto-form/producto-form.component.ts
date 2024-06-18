import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {

  producto!: Producto;
  accion: string = "new";

  constructor(private activatedRoute: ActivatedRoute, private productoService: ProductoService, private router: Router) 
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

  /*cargarProducto(id: string): void 
  {
    console.log(this.producto);
    this.productoService.getProductoById(id).subscribe
    (
      (result) => 
      {
        this.expediente = result; 
        //Object.assign(this.expediente, result);
      },
      (error: any) => 
      {
        console.log(error);
      }
    );
  }*/

  agregarProducto(): void
  {
    this.productoService.addProducto(this.producto).subscribe
    (
      (result) => 
      {
        if(result.status == 1)
          {
            alert("Producto guardado");
            this.router.navigate(['producto']);
          }
        
      },
      (error: any) => 
      {
        console.log(error);
      }
    ); 
    this.producto = new Producto(); 
  }

  iniciarVariable(): void
  {
    this.producto = new Producto(); 
  }
}
