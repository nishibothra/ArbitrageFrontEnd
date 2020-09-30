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
    this.calcCc.brokerage=parseFloat(this.Input.brokerage);
    this.calcCc.bid_spotPrice=parseFloat(this.Input.bid_spotPrice);
    this.calcCc.ask_spotPrice=parseFloat(this.Input.ask_spotPrice);
    this.calcCc.bid_futurePrice=parseFloat(this.Input.bid_futurePrice);
    this.calcCc.ask_futurePrice=parseFloat(this.Input.ask_futurePrice);
    this.calcCc.bid_rfr=parseFloat(this.Input.bid_rfr);
    this.calcCc.ask_rfr=parseFloat(this.Input.ask_rfr);
    this.calcCc.lot_size=parseFloat(this.Input.lot_size);
    this.calcCc.duration= parseFloat(this.Input.duration);
    
    //console.log(JSON.stringify(this.calcFx));


    this.postUserInput();
  }

}
