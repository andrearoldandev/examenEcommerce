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

  constructor(private productosService: ProductosService) {}

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

  /*
  eliminarProducto(id: number){
    this.productosService.deleteProductos(id);
    this.productos = this.productosService.getProductos();
  }

  actualizarProducto(id: number){
    const nuevaInfo = {descripcion: this.nuevaDescripcion, precio: this.nuevoPrecio};
    this.productosService.updateProducto(id, nuevaInfo);
    this.productos = this.productosService.getProductos();
  }

  //Metodos para la edicion
  /*editarProducto(producto: {id: number; nombre: string; descripcion: string; precio: number; imgUrl: string}): void {
    this.productoEditando = producto;
    this.nuevaDescripcion = producto.descripcion;
    this.nuevoPrecio = producto.precio;
  }

  actualizarDatos() {
    if(this.productoEditando) {
      this.productosService.updateProducto(this.productoEditando.id,this.nuevaDescripcion, this.nuevoPrecio!);
      this.productoEditando = null;
      this.nuevaDescripcion = "";
      this.nuevoPrecio = 0;
    }
  }*/
}
