import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { CashAndCarryService } from 'src/app/service/cash-and-carry.service';
import { CcCalc } from './ccCalc';

@Component({
  selector: 'app-cc-calculator',
  templateUrl: './cc-calculator.component.html',
  styleUrls: ['./cc-calculator.component.css']
})
export class CcCalculatorComponent implements OnInit {
  calcCc: CcCalc=new CcCalc();
  subscription: Subscription;
  Input:any={};
  result:String[]=new Array();
  constructor(private router: Router,private ccService:CashAndCarryService) { }

  ngOnInit(): void {
  }

  //fetches the calculated result for the user input values
  public postUserInput(){
    this.subscription=this.ccService.getCcCalculatorResult(this.calcCc)
    .subscribe(data=>{
      this.result = data;
      console.log(this.result);
    });
  }

  //sets the user input values from the form
  public setValues(event){
    event.preventDefault();
    this.calcCc = this.Input;
    if(this.calcCc.brokerage&&this.calcCc.bid_spotPrice&&this.calcCc.ask_spotPrice&&this.calcCc.bid_futurePrice&&this.calcCc.bid_rfr&&this.calcCc.ask_rfr&&this.calcCc.lot_size&&this.calcCc.duration)
    {
      this.postUserInput();
    }
    else{
      alert('Please fill all the required fields!');
    }
     
    


   
  }
  

}
