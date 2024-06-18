import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  listaProductos!: Array<Producto>;
  opcion: boolean = false;
  elegido!: boolean;

  constructor(private productoService: ProductoService, 
              private router: Router,
              private route: ActivatedRoute) 
  {
    // Obtener la opción desde los parámetros de la ruta
    this.route.queryParams.subscribe
    (
      params => 
        {
          this.opcion = params['opcion'] === 'true';
          if (this.opcion) {
            this.obtenerProductosDestacados();
          } else {
            this.obtenerProductos();
          }
        }
    );
  }

  obtenerProductos() 
  {
    this.productoService.getProductos().subscribe
    (
      data => 
        {
          this.listaProductos = data;
          console.log(this.listaProductos);
        },
        error => 
        {
          console.log(error);
        }
    )
  }

  obtenerProductosDestacados()
  {
    this.productoService.getProductosDestacados().subscribe
    (
      data => 
        {
          this.listaProductos = data;
          console.log(this.listaProductos);
        },
        error => 
        {
          console.log(error);
        }
    )
  }

  agregarProducto()
  {
    this.router.navigate(['producto-form', 0]);
  }

  elegir(elegido: boolean) 
  {
    this.router.navigate
    ([],
    {
      relativeTo: this.route,
      queryParams: { opcion: elegido },
      queryParamsHandling: 'merge'  // Mantener otros parámetros si existen
    });
  }


  
}
