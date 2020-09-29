import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FraCalc} from '../component/fra-calculator/fraCalc';
import { Fra } from '../component/fra-random/fra';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FraService {

  constructor(private http:HttpClient) { }

  private userUrl = '/apiFra'; //specifications in proxy.conf.json
  private resultUrl = '/api-fra-result'; //specifications in proxy.conf.json

  public getFraRandom() : Observable<Fra[]> {
    
    return this.http.get<Fra[]>(this.userUrl);
  }

  //calculator service
  public getFxCalculatorResult(calcFra:FraCalc){
    let body = JSON.stringify(calcFra);
    console.log(body);
    return this.http.post<String[]>(this.resultUrl, body,httpOptions);
  }
}
