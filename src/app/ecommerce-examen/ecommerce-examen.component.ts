import { CarritoService } from './../services/carrito.service';
import { Producto } from './../producto.model';
import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ecommerce-examen',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './ecommerce-examen.component.html',
  styleUrl: './ecommerce-examen.component.css',
})
export class EcommerceExamenComponent {
  productos: Producto[] = [];

  nuevoProducto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    imgUrl: '',
  };

  productoEditando: Producto | null = null;

  errorMensaje: string = '';
  isCrear: boolean = false;
  filtro: string = '';


  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit() {
    this.productos = this.productosService.getProductos();

  }

  crearProducto() {
    this.isCrear = !this.isCrear;
  }

  //Método para filtrar un producto en la barra de búsqueda
  filtrarProductos() {
    return this.productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  agregarProducto() {
    const nuevoId = this.productos.length
      ? Math.max(...this.productos.map((p) => p.id)) + 1
      : 1;
    this.nuevoProducto.id = nuevoId;
    this.productosService.agregarProducto(this.nuevoProducto);
    this.nuevoProducto = {
      id: 0,
      nombre: '',
      descripcion: '',
      precio: 0,
      imgUrl: '',
    }; // Resetear el formulario
  }

  editarProducto(producto: Producto): void {
    this.productoEditando = { ...producto };
  }

  actualizarProducto(): void {
    if (this.productoEditando) {
      this.productosService.editarProducto(
        this.productoEditando.id,
        this.productoEditando
      );
      this.productoEditando = null; // Limpiar el producto editando
    }
  }

  eliminarProducto(id: number): void {
    // Muestra el cuadro de diálogo de confirmación
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, destrúyelo!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, procede a eliminar el producto
        this.productosService.eliminarProducto(id);
        this.productos = this.productosService.getProductos();

        // Muestra un mensaje de éxito
        Swal.fire('Eliminado!', 'El producto ha sido eliminado. (mentira, si recargas la página volverá, je je)', 'success');
      } else {
        // Si el usuario cancela, no se hace nada
        Swal.fire('Cancelado', 'El producto no ha sido eliminado.', 'error');
      }
    });
  }

  //Metodo para el carrito de la compra
  comprarProducto(producto: Producto) {
    this.carritoService.agregarArticulo();
    Swal.fire({
      title:`<strong>Producto agregado correctamente al carrito:</strong> ${producto.nombre}`,});
  }


}
