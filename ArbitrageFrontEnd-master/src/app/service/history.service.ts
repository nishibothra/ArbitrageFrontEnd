import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CcHistory } from '../cc-history/cc-history';
import { FraHistory } from '../fra-history/fra-history';
import { FxHistory } from '../fx-history/fxHistory';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  

  constructor(private http:HttpClient) { }

  private userUrl1 = '/api-fx-history';
  private userUrl2 = '/api-fra-history'
  private userUrl3 = '/api-cc-history'

  public getFxHistory() : Observable<FxHistory[]>{

    return this.http.get<FxHistory[]>(this.userUrl1);
  }

  public getFraHistory() : Observable<FraHistory[]>{

    return this.http.get<FraHistory[]>(this.userUrl2);
  }

  public getCcHistory() : Observable<CcHistory[]>{

    return this.http.get<CcHistory[]>(this.userUrl3);
  }


}
