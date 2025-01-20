import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cantidadArticulos: number = 0;
  
  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.cantidadArticulos$.subscribe((cantidad) => {
      this.cantidadArticulos = cantidad;
    });
  }
}
