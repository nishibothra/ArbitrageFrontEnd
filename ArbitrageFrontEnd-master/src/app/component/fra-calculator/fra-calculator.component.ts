import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FraService } from 'src/app/service/fra.service';
import { FraCalc } from './fraCalc';

@Component({
  selector: 'app-fra-calculator',
  templateUrl: './fra-calculator.component.html',
  styleUrls: ['./fra-calculator.component.css']
})
export class FraCalculatorComponent implements OnInit {

  calcFra: FraCalc=new FraCalc();
  subscription: Subscription;
  Input:any={};
  result:String[]=new Array();

  constructor(private router: Router,private fraService:FraService) { }

  ngOnInit(): void {
  };

   //fetches the calculated result for the user input values
   public postUserInput(){
    this.subscription=this.fraService.getFxCalculatorResult(this.calcFra)
    .subscribe(data=>{
      this.result = data;
      console.log(this.result);
    });
  }

  //sets the user input values from the form
  public setValues(event){
    event.preventDefault();
    this.calcFra.principleAmount=parseFloat(this.Input.principleAmount);
    this.calcFra.transactionCost=parseFloat(this.Input.transactionCost);
    this.calcFra.sixByTwelveFRAsk=parseFloat(this.Input.sixByTwelveFRAsk);
    this.calcFra.sixBytwelveFRBid=parseFloat(this.Input.sixBytwelveFRBid);
    this.calcFra.sixMonthsSpotAsk=parseFloat(this.Input.sixMonthsSpotAsk);
    this.calcFra.sixMonthsSpotBid=parseFloat(this.Input.sixMonthsSpotBid);
    this.calcFra.twelveMonthSpotAsk=parseFloat(this.Input.twelveMonthSpotAsk);
    this.calcFra.twelveMonthSpotBid=parseFloat(this.Input.twelveMonthSpotBid);
    
    //console.log(JSON.stringify(this.calcFx));


    this.postUserInput();
  }




}
