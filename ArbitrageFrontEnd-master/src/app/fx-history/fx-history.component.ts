import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HistoryService } from '../service/history.service';
import { FxHistory } from './fxHistory';

@Component({
  selector: 'app-fx-history',
  templateUrl: './fx-history.component.html',
  styleUrls: ['./fx-history.component.css']
})
export class FxHistoryComponent implements OnInit {

  result:FxHistory[]=new Array();
  subscription: Subscription;
  displayedColumns: string[] = ['ID', 'EUR/USD Spot Bid', 'EUR/USD Spot Ask', 'EUR/USD Forward Bid', 'EUR/USD Forward Ask', 'EUR Interest Rate Bid','EUR Interest Rate Ask', 'USD Interest Rate Bid','USD Interest Rate Ask','Arbitrage','Profit'];
  loading:boolean=true;

  constructor(private router: Router,private fxHistoryService:HistoryService) { }

  ngOnInit(): void {
    this.getFxHistory();
  }

  getFxHistory(){

    this.subscription = timer(0, 15000).pipe(//to refresh the data dynamically
      switchMap(() =>
      this.fxHistoryService.getFxHistory())
    ).subscribe(data=> {
      this.result = data;
      this.loading=false;
      
    });
    
    
      };
    
  }

