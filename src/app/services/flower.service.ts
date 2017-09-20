import { Injectable } from '@angular/core';
import { Flower } from '../shared/flower';
import { baseURL } from '../shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class FlowerService {

  constructor(private restangular: Restangular) { }

  getFlowers(): Observable<Flower[]> {
    return this.restangular.all('flowers').getList();
  }

  getFlower(id: number): Observable<Flower> {
    return this.restangular.one('flowers', id).get();
  }

}
