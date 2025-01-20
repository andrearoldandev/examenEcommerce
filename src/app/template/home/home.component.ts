import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterOutlet } from '@angular/router';
import { TareasComponent } from "../../tareas/tareas.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RouterOutlet, TareasComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
