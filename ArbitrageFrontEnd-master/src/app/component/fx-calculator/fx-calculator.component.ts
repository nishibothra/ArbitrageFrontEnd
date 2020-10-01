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
  loading:boolean=false;

  constructor(private router: Router,private fxService:ForexService) { }

  ngOnInit(): void {
  }

  //fetches the calculated result for the user input values
  public postUserInput(){
        this.subscription=this.fxService.getFxCalculatorResult(this.calcFx)
        .subscribe(data=>{
          this.result = data;
          this.loading = false;
        });


  }

  //sets the user input values from the form
  public setValues(event){
    event.preventDefault();
    this.calcFx.bid_ask={"bid":this.Input.bid_c1,"ask":this.Input.ask_c1};
    this.calcFx.bid_ask_3 = {"bid":this.Input.bid_c2,"ask":this.Input.ask_c2}
    this.calcFx.int_c1={"bid":this.Input.int_bid_c1,"ask":this.Input.int_ask_c1};
    this.calcFx.int_c2={"bid":this.Input.int_bid_c2,"ask":this.Input.int_ask_c2};
    this.calcFx.amount = this.Input.principal;
    this.calcFx.c1 = this.Input.c1;
    this.calcFx.c2 = this.Input.c2;
    this.calcFx.transCost = this.Input.transCost;
    this.calcFx.monthsDuration = this.Input.monthsDuration;
    
    if(this.calcFx.bid_ask['bid']!=null&&this.calcFx.bid_ask['ask']!=null&&this.calcFx.bid_ask_3['bid']!=null&&this.calcFx.bid_ask_3['ask']
    !=null&&this.calcFx.int_c1['bid']!=null&&this.calcFx.int_c1['ask']!=null&&this.calcFx.int_c2['bid']!=null&&this.calcFx.int_c2['ask']!=null&&this.calcFx.amount!=null&&
    this.calcFx.c1!=null&&this.calcFx.c2!=null&&this.calcFx.monthsDuration!=null){
      this.loading=true;
      this.postUserInput();

    }
    else{
      alert('Please fill all the required fiels');
    }


    
  }

}
