import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ejercicio2directivas',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ejercicio2directivas.component.html',
  styleUrl: './ejercicio2directivas.component.css'
})
export class Ejercicio2directivasComponent {
  opcionesRAM = ['RAM 32', 'RAM 16', 'RAM 8'];
  opcionesProcesador = ['COREi9N8', 'COREi7N6', 'COREi3N4'];
  opcionesDisco = ['SSD', 'HDD'];
  opcionesFuente = ['600', '500', '400'];


  opcionRamE:String = "";
  opcionProE:String = "";
  opcionDisE:String = "";
  opcionFuenE:String = "";
  opcionGraf:Boolean = false;

  mostrarinfo(){


    console.log("Ram:" + this.opcionRamE +
    "Procesador:" + this.opcionProE +
    "Disco:" + this.opcionDisE +
    "FUente:" + this.opcionFuenE +
    "Grafica:" + this.opcionGraf
     )

  }
  



}
