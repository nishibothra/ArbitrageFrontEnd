import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FxHistory } from '../fx-history/fxHistory';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  

  constructor(private http:HttpClient) { }

  private userUrl = '/api-fx-history';

  public getFxHistory() : Observable<FxHistory[]>{

    return this.http.get<FxHistory[]>(this.userUrl);
  }


}
