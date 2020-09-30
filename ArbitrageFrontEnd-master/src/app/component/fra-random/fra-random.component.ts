import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FraService } from 'src/app/service/fra.service';
import { Fra } from './fra';

@Component({
  selector: 'app-fra-random',
  templateUrl: './fra-random.component.html',
  styleUrls: ['./fra-random.component.css']
})
export class FraRandomComponent implements OnInit {

  randomFra: Fra[] = new Array();
  subscription: Subscription;
  loading:boolean=true;

  constructor(private router: Router,private fraService:FraService) { }

  ngOnInit(): void {

    this.getRandomFra();
  };

    //fetches the random arbitrage set with all its parameters
    public getRandomFra(){
      this.subscription = timer(0, 15000).pipe(//to refresh the data dynamically
        switchMap(() =>
        this.fraService.getFraRandom())
      ).subscribe(data=> {
        this.randomFra = data;
        this.loading=false;
      });
      
      
        };

}
