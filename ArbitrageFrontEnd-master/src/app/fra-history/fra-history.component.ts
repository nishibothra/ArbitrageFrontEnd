import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HistoryService } from '../service/history.service';
import { FraHistory } from './fra-history';

@Component({
  selector: 'app-fra-history',
  templateUrl: './fra-history.component.html',
  styleUrls: ['./fra-history.component.css']
})
export class FraHistoryComponent implements OnInit {

  result:FraHistory[]=new Array();
  subscription: Subscription;
  loading:boolean=true;
  displayedColumns: string[] = ['ID', 'Principal Amount', '6 Months Spot', '12 Months Spot', '6/12 Forward', 'Subtype','Profit'];

  constructor(private router: Router,private fraHistoryService:HistoryService) { }

  ngOnInit(): void {

    this.getFraHistory();
  }

  getFraHistory(){
    this.subscription = timer(0, 15000).pipe(//to refresh the data dynamically
      switchMap(() =>
      this.fraHistoryService.getFraHistory())
    ).subscribe(data=> {
      this.result = data;
      this.loading=false;
      
    });
    
    
  }

}
