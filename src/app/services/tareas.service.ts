import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  constructor() {}

  tareas = [
    { id: 1, nombre: 'Comprar leche', completada: false }, //index/posición 0
    { id: 2, nombre: 'Lavar el coche', completada: true }, //index/posición 1
    { id: 3, nombre: 'Preparar presentación', completada: false }, //index/posición 2
  ];

  /*   Esto es explicación no forma parte del ejercicio

  array_string: string[] = ['hola', 'adios'];
  array_number: number[] = [2, 3, 4, 5];
  array_any: any[] = [2, 3, 4, 5, 'hola'];
  array_objetos = [];

  elementoPorIndex(index: number){
    return this.array_any[index]
  } */

  //Crear un método para obtener todas las tareas en el template
  getTareas() {
    return this.tareas;
  }
  //Método para borrar una tarea filtrando las tareas y obteniendo un nuevo array con elementos filtrados o reasignar el valor de el array que ya tenemos
  deleteTarea(id: number) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }

  updateTarea(
    id: number,
    nuevaTarea: { nombre?: string; completada?: boolean }
  ) {
    const index = this.tareas.findIndex((tarea) => tarea.id === id);

    if (index !== -1) {
      this.tareas[index] = {
        //Operador de prapagación (spread operator)->
        ...this.tareas[index],
        //Cojo las propiedades del objeto nueva tarea y las copio dentro del nuevo objeto sobreescribiendo las que se han copiado desde this.tarea[index]
        ...nuevaTarea,
        //RESULTADO: Obtengo un nuevo objeto:
        // nuevaTarea va a sobreescribir las propiedades existentes en this.tarea[index]
        // se van a actualizar solo las propiedades de la tarea que cambien
      };
    } else {
      console.error(`No se encontró la tarea con ID: ${id}`);
    }
  }
}
