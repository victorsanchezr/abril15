import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})



export class Ejercicio1Component {
  main(){

    console.log(interestOnlyPayment); 
    console.log(conventionalPayment);
  }

}

interface Loan{
  principal: number;
  interestRate: number;
}

interface ConventionalLoan extends Loan {
  months: number;
}

function  calculateInterestOnlyLoanPayment(loanes: Loan): string {

  let interest = loanes.interestRate / 1200; 
  let payment;
  payment = loanes.principal * interest;
  return 'The interest only loan payment is ' + payment.toFixed(2);
}

function calculateConventionalLoanPayment(loanesC:ConventionalLoan) {
  // Calculates the monthly payment of a conventional loan
  let interest = loanesC.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
  let payment;
  payment = loanesC.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanesC.months)));
  return 'The conventional loan payment is ' + payment.toFixed(2);


}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
let conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });



