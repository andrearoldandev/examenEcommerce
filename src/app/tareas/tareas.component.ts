import { NgFor, NgIf } from '@angular/common';
import { TareasService } from './../services/tareas.service';
import { Component, OnInit } from '@angular/core';
import {FormsModule, NgModel} from '@angular/forms';


@Component({
  selector: 'app-tareas',
  imports: [FormsModule, NgFor, NgIf],
  standalone: true,
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
})
export class TareasComponent {
  tareas: { id: number; nombre: string; completada: boolean }[] = [];
  nuevaTarea: string = '';
  errorMensaje: string = '';

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    // Cargar la lista inicial de tareas
    this.tareas = this.tareasService.getTareas();
  }

  //ORDEN DE EJECUCIÓN:
  //1. Se ejecuta el código del constructor en el que caso en el que tengamos constructor
  //2. Angular inicializa el componente con todas sus propiedades, métodos, template.....
  //3. Se inicializa todo lo que tengamos en el ngOnInit()

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      const nueva = {
        id: Date.now(), // Generamos un ID único basado en la fecha actual
        nombre: this.nuevaTarea,
        completada: false,
      };
      this.tareasService.tareas.push(nueva); // Añadimos la tarea al servicio
      this.tareas = this.tareasService.getTareas(); // Actualizamos la lista en la vista
      this.nuevaTarea = ''; // Limpiamos el campo de entrada
    } else {
      this.errorMensaje = 'Por favor añada una nueva tarea';
    }
  }

  eliminarTarea(id: number) {
    this.tareasService.deleteTarea(id); // Eliminamos la tarea del servicio
    this.tareas = this.tareasService.getTareas(); // Actualizamos la lista en la vista
  }

  actualizarTarea(id: number) {
    const nuevaInfo = { completada: true }; // Marcamos la tarea como completada
    this.tareasService.updateTarea(id, nuevaInfo); // Actualizamos la tarea
    this.tareas = this.tareasService.getTareas(); // Actualizamos la lista en la vista
  }
}
