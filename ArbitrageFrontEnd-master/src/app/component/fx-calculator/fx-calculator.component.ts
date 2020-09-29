import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForexService } from 'src/app/service/forex.service';
import { FxCalc } from './fxCalc';

@Component({
  selector: 'app-fx-calculator',
  templateUrl: './fx-calculator.component.html',
  styleUrls: ['./fx-calculator.component.css']
})
export class FxCalculatorComponent implements OnInit {
  calcFx: FxCalc=new FxCalc();
  subscription: Subscription;
  Input:any={};
  result:String[]=new Array();

  constructor(private router: Router,private fxService:ForexService) { }

  ngOnInit(): void {
  }

  //fetches the calculated result for the user input values
  public postUserInput(){
        this.subscription=this.fxService.getFxCalculatorResult(this.calcFx)
        .subscribe(data=>{
          this.result = data;
          console.log(this.result);
        });


  }

  //sets the user input values from the form
  public setValues(event){
    event.preventDefault();
    this.calcFx.bid_ask={"bid":parseFloat(this.Input.bid_c1),"ask":parseFloat(this.Input.ask_c1)};
    this.calcFx.bid_ask_3 = {"bid":parseFloat(this.Input.bid_c2),"ask":parseFloat(this.Input.ask_c2)}
    this.calcFx.int_c1={"bid":parseFloat(this.Input.int_bid_c1),"ask":parseFloat(this.Input.int_ask_c1)};
    this.calcFx.int_c2={"bid":parseFloat(this.Input.int_bid_c2),"ask":parseFloat(this.Input.int_ask_c2)};
    this.calcFx.amount = parseFloat(this.Input.principal);
    this.calcFx.c1 = this.Input.c1;
    this.calcFx.c2 = this.Input.c2;
    //console.log(JSON.stringify(this.calcFx));


    this.postUserInput();
  }

}