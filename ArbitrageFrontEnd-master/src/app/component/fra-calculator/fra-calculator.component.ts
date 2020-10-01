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
export class FraCalculatorComponent implements OnInit
{

  calcFra: FraCalc=new FraCalc();
  subscription: Subscription;
  Input:any={};
  loading:boolean=false;
  result:String[]=new Array();

  constructor(private router: Router,private fraService:FraService) { }

  ngOnInit(): void {
  };

   //fetches the calculated result for the user input values
   public postUserInput(){
    this.subscription=this.fraService.getFxCalculatorResult(this.calcFra)
    .subscribe(data=>{
      this.result = data;
      this.loading=false;
    });
  }

  //sets the user input values from the form
  public setValues(event){
    event.preventDefault();
    this.calcFra=this.Input;
    

    if(this.calcFra.principleAmount&&
      this.calcFra.sixByTwelveFRAsk&&this.calcFra.sixBytwelveFRBid&&
      this.calcFra.sixMonthsSpotAsk&&this.calcFra.sixMonthsSpotBid&&
      this.calcFra.twelveMonthSpotAsk&&this.calcFra.twelveMonthSpotBid)
    {
      this.postUserInput();
      this.loading=true;
    }
    else{
      alert('Please fill all the required fields!');
    }

  }
}