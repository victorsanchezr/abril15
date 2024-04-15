import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  opcionesGenE:string = "";
  opcionesNacE:string = "";
  opcioneslengE:string = "";


  opcionesGen = ["Mujer","Hombre","Otros"];

  opcionesNac = ["Español","Rumano","Aleman","Frances"]; 

  opcionesleng = ["C++","Java","Js","Python"]; 


  mostrarinfor(){

    console.log( this.opcionesGenE +  " " + this.opcionesNacE  + " "+ this.opcioneslengE);
  }

}
