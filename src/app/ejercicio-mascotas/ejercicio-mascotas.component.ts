import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../services/mascotas.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ejercicio-mascotas',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule ],
  templateUrl: './ejercicio-mascotas.component.html',
  styleUrl: './ejercicio-mascotas.component.css'
})
export class EjercicioMascotasComponent {
  mascotas: {id: number; nombre: string; vacunado: boolean}[] = [];
  nuevaMascota: string = "";
  errorMensaje: string = "";

  constructor(private mascotasService: MascotasService){}

  ngOnInit(){
    this.mascotas = this.mascotasService.getMascotas();
  }

  agregarMascota(){
    if (this.nuevaMascota.trim()){
      const nueva = {
        id: Date.now(),
        nombre: this.nuevaMascota,
        vacunado: false
      };
      this.mascotasService.mascotas.push(nueva);
      this.mascotas = this.mascotasService.getMascotas();
      this.nuevaMascota = "";
    } else {
      this.errorMensaje = "Debes ingresar un nombre para la mascota";
    }
  }

  eliminarMascota(id: number){
    this.mascotasService.deleteMascota(id);
    this.mascotas = this.mascotasService.getMascotas();
  }

  actualizarMascota(id: number){
    const nuevaInfo = { vacunado: true };
    this.mascotasService.updateMascota(id, nuevaInfo);
    this.mascotas = this.mascotasService.getMascotas();
  }
}
