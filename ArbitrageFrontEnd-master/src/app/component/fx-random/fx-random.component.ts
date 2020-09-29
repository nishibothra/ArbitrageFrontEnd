import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { ForexService } from 'src/app/service/forex.service';
import { Fx } from './fx';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-fx-random',
  templateUrl: './fx-random.component.html',
  styleUrls: ['./fx-random.component.css']
})
export class FxRandomComponent implements OnInit {

  randomFx: Fx[] = new Array();
  subscription: Subscription;
  bid_ask: String[] = new Array();
  bid_ask3: String[] = new Array();
  int_c1: String[] = new Array();
  int_c2: String[] = new Array();
  res: String[] = new Array();
  Input:any={};

  constructor(private router: Router,private fxService:ForexService) { }

  ngOnInit(): void {

    
    
  };
  
  //fetches the random arbitrage set with all its parameters
  public getRandomFx(){
    this.subscription = timer(0, 15000).pipe(//to refresh the data dynamically
      switchMap(() =>
      this.fxService.getFxRandom(this.Input.principal))
    ).subscribe(data=> {
      this.randomFx = data;
      console.log("Fx "+JSON.stringify(this.randomFx));
      this.res = this.randomFx['res'];
      this.bid_ask = this.randomFx['bid_ask'];
      this.bid_ask3 = this.randomFx['bid_ask_3'];
      this.int_c1 = this.randomFx['int_c1'];
      this.int_c2 = this.randomFx['int_c2'];
    });
    
    
      };
    
  
  public getData(event){
    event.preventDefault();
    this.getRandomFx();
    
  }

}
