import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CashAndCarryService } from 'src/app/service/cash-and-carry.service';
import { Cc } from './cc';

@Component({
  selector: 'app-cc-random',
  templateUrl: './cc-random.component.html',
  styleUrls: ['./cc-random.component.css']
})
export class CcRandomComponent implements OnInit {

  constructor(private router: Router,private ccService:CashAndCarryService) { }

  randomCc: Cc[] = new Array();
  subscription: Subscription;
  Input:any={};
  loading:boolean = true;
  ngOnInit(): void {
    this.getRandomCc();
  }

 //fetches the random arbitrage set with all its parameters
 public getRandomCc(){
  this.subscription = timer(0, 15000).pipe(//to refresh the data dynamically
    switchMap(() =>
    this.ccService.getCcRandom())
    ).subscribe(data=>{
      this.randomCc = data;
      this.loading = false;
    });
  
  
  };


}
