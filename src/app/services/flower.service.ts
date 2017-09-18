import { Injectable } from '@angular/core';
import { Flower } from '../shared/flower';
import { Http } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class FlowerService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getFlowers(): Observable<Flower[]> {
    return this.http.get(baseURL + 'flowers').
      map(res => this.processHTTPMsgService.extractData(res));
  }

  getFlower(id: number): Observable<Flower> {
    return this.http.get(baseURL + 'flowers/' + id).
      map(res => this.processHTTPMsgService.extractData(res));
  }

}
