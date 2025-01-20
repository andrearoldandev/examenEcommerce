import { Injectable } from '@angular/core';
import { Producto } from '../producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Pinceles',
      descripcion: 'Pinceles para acuarela',
      precio: 15,
      imgUrl: 'assets/img/pincel.jpg',
    },
    {
      id: 2,
      nombre: 'Papel para acuarela',
      descripcion: 'Papel de alto gramaje',
      precio: 25,
      imgUrl: 'assets/img/papel.jpg',
    },
    {
      id: 3,
      nombre: 'Set acuarelas',
      descripcion: 'Set de los colores basicos de acuarela',
      precio: 30,
      imgUrl: 'assets/img/acuarela.jpg',
    },
  ];

  constructor() {}

  getProductos(): Producto[] {
    return this.productos;
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  eliminarProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }

  editarProducto(id: number, productoActualizado: Producto): void {
    const index = this.productos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.productos[index] = {...productoActualizado};
    }
  }
/*
  updateProducto(
    id: number,
    nuevoProducto: { nombre?: string; descripcion?: string; precio?: number; imgUrl?: string }
  ) {
    const index = this.productos.findIndex((producto) => producto.id == id);

    if (index !== -1) {
      this.productos[index] = {
        ...this.productos[index],
        ...nuevoProducto,
      };
    } else {
      alert(`No se encontró ningún producto con ese ID: ${id}`);
    }
  }

  //metodos para actualizar un producto
  /*
  actualizarProductos(id: number, productoActualizado: Producto) {
    const producto = this.productos.find(p => p.id === id);
    if(producto) {
      producto.descripcion = descripcion;
      producto.precio = precio;
    }

  }
    */
}
