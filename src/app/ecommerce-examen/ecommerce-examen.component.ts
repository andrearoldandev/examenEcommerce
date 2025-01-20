import { CarritoService } from './../services/carrito.service';
import { Producto } from './../producto.model';
import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ecommerce-examen',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf,],
  templateUrl: './ecommerce-examen.component.html',
  styleUrl: './ecommerce-examen.component.css',
})
export class EcommerceExamenComponent {
  productos: Producto[] = [];

  nuevoProducto: Producto = {id: 0, nombre: '', descripcion: '', precio: 0, imgUrl: ''};

  productoEditando: Producto | null = null;

  errorMensaje: string = "";

  constructor(private productosService: ProductosService, private carritoService: CarritoService) {}

  ngOnInit() {
    this.productos = this.productosService.getProductos();
  }

  agregarProducto(){

      const nuevoId = this.productos.length
        ? Math.max(...this.productos.map((p) => p.id)) + 1
        : 1;
      this.nuevoProducto.id = nuevoId;
      this.productosService.agregarProducto(this.nuevoProducto);
      this.nuevoProducto = { id: 0, nombre: '', descripcion: '', precio: 0, imgUrl: '' }; // Resetear el formulario

  }

  editarProducto(producto: Producto): void {
    this.productoEditando = { ...producto };
  }

  actualizarProducto(): void {
    if (this.productoEditando) {
      this.productosService.editarProducto(this.productoEditando.id, this.productoEditando);
      this.productoEditando = null; // Limpiar el producto editando
  }
}

  eliminarProducto(id: number): void {
    this.productosService.eliminarProducto(id);
    this.productos = this.productosService.getProductos();
  }

  //Metodo para el carrito de la compra
  comprarProducto() {
    this.carritoService.agregarArticulo();
    alert('Producto añadido correctamente al carrito');
  }

}
