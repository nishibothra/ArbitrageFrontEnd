import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HistoryService } from '../service/history.service';
import { CcHistory } from './cc-history';

@Component({
  selector: 'app-cc-history',
  templateUrl: './cc-history.component.html',
  styleUrls: ['./cc-history.component.css']
})
export class CcHistoryComponent implements OnInit {
  loading:boolean=true;
  result:CcHistory[]=new Array();
  subscription: Subscription;
  displayedColumns: string[] = ['Spot Price(Bid/Ask)', 'Forward Price(Bid/Ask)','Duration', 'Forward Rate(Bid/Ask)','Lot Size','Brokerage','Arbitrage','Profit'];

  constructor(private router: Router,private ccHistoryService:HistoryService) { }

  ngOnInit(): void {
    this.getCcHistory();
  }

  getCcHistory(){
    this.subscription = timer(0, 15000).pipe(//to refresh the data dynamically
      switchMap(() =>
      this.ccHistoryService.getCcHistory())
    ).subscribe(data=> {
      this.result = data;
      this.loading=false;
      
    });
  }
    
  

}
