import { Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { TareasComponent } from './tareas/tareas.component';
import { EjercicioMascotasComponent } from './ejercicio-mascotas/ejercicio-mascotas.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "tareas", component: TareasComponent},
  {path: "mascotas", component: EjercicioMascotasComponent},
];
