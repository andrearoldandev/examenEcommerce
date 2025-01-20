import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  private cantidadArticulos = new BehaviorSubject<number>(0);
  cantidadArticulos$ = this.cantidadArticulos.asObservable();

  //Metodos para agregar productos al carrito
  agregarArticulo(){
    this.cantidadArticulos.next(this.cantidadArticulos.value + 1);
  }


}
