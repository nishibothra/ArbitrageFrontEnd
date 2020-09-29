import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HistoryService } from '../service/history.service';
import { CcHistory } from './cc-history';

@Component({
  selector: 'app-cc-history',
  templateUrl: './cc-history.component.html',
  styleUrls: ['./cc-history.component.css']
})
export class CcHistoryComponent implements OnInit {

  result:CcHistory[]=new Array();
  subscription: Subscription;
  displayedColumns: string[] = ['Spot Price(Bid/Ask)', 'Forward Price(Bid/Ask)','Duration', 'Forward Rate(Bid/Ask)','Lot Size','Brokerage','Arbitrage','Profit'];

  constructor(private router: Router,private ccHistoryService:HistoryService) { }

  ngOnInit(): void {
    this.getCcHistory();
  }

  getCcHistory(){
    this.subscription = this.ccHistoryService.getCcHistory()
    .subscribe(data=> {
      this.result = data;
      console.log("Cc History :  "+JSON.stringify(this.result));
      
    });
  }

}
