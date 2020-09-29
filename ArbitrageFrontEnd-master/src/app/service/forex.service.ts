import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fx } from '../component/fx-random/fx';
import { FxCalc } from '../component/fx-calculator/fxCalc';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ForexService {

  constructor(private http:HttpClient) { }

  private userUrl = '/apiFx'; //specifications in proxy.conf.json
  private postHostUrl = '';
  private resultUrl = '/api-fx-result'; //specifications in proxy.conf.json
  private principal : String;
 
  //get the arbitrage opportunities for the given amount
  public getFxRandom(principal:String) : Observable<Fx[]> {
    this.principal = principal;
    this.postHostUrl = this.userUrl+"/"+this.principal;
    this.http.post<Fx>(this.postHostUrl,this.principal);
    return this.http.get<Fx[]>(this.postHostUrl);
  }

  //calculator service
  public getFxCalculatorResult(calcFx:FxCalc){
    let body = JSON.stringify(calcFx);
    console.log(body);
    return this.http.post<String[]>(this.resultUrl, body,httpOptions);
  }
}
