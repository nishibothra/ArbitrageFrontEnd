import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CcCalc } from '../component/cc-calculator/ccCalc';
import { Cc } from '../component/cc-random/cc';

//import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CashAndCarryService {

  constructor(private http:HttpClient) { }

  private userUrl = '/apiCc'; //specifications in proxy.conf.json
  private postHostUrl = '';
  private resultUrl = '/api-cc-calculator'; //specifications in proxy.conf.json
  // private principal : String;

   //get the arbitrage opportunities for the given amount
   public getCcRandom() : Observable<Cc[]> {
    return this.http.get<Cc[]>(this.userUrl);
  }


  //calculator service
  public getCcCalculatorResult(calcCc:CcCalc){
    let body = JSON.stringify(calcCc);
    console.log(body);
    return this.http.post<String[]>(this.resultUrl, body,httpOptions);
  }
}
