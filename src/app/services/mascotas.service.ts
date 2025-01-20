import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor() { }

  mascotas = [
    {id: 1, nombre: "Mary Roxy", vacunado: true},
    {id: 2, nombre: "Mary Lilly", vacunado: false},
    {id: 3, nombre: "Dorys Dorys", vacunado: false},
  ];

  //Metodos CRUD
  getMascotas(){
    return this.mascotas;
  }

  deleteMascota(id: number){
    this.mascotas = this.mascotas.filter((mascota) => mascota.id !== id);
  }

  updateMascota(id: number, nuevaMascota: {nombre?: string; vacunado?: boolean}){
    const index = this.mascotas.findIndex((mascota) => mascota.id === id);

    if (index !== -1) {
      this.mascotas[index] = {
        ...this.mascotas[index],
        ...nuevaMascota
      };
    } else {
      console.error('No se encontró la mascota con el id:', id);
    }
  }
}
