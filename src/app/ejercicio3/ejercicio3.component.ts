import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {


  destinose:string = "";
  destinose2:string = "";
  numeropase:string = "";

  fechaida:Date = new Date();
  fechavuelta:Date = new Date();


  destinoS = ["Madrid","Alicante","Elche","Barcelona"];
  numeropas = ["1","2","3","4","5","6"];

  mostrar(){
    
    if(this.destinose2 === this.destinose){
     
      console.log("No puede ser igual el destino de ida que el de llegada")
    }else if(this.fechaida > this.fechavuelta){
      console.log("la fecha de vuelta no puede ser anterior a la de ida")
    }else{
      

      console.log(this.destinose + " " + this.destinose2 + " " + this.fechaida + " " + this.fechavuelta + " " + this.numeropase)
    }



  }

  
}
