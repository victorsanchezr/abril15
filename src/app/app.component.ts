import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2directivasComponent } from './ejercicio2directivas/ejercicio2directivas.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Ejercicio1Component,Ejercicio2directivasComponent,Ejercicio3Component,Ejercicio4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abril15';
}
