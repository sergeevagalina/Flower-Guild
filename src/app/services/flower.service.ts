import { Injectable } from '@angular/core';
import { Flower } from '../shared/flower';
import { FLOWERS } from '../shared/flowers';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class FlowerService {

  constructor() { }

  getFlowers(): Observable<Flower[]> {
    return Observable.of(FLOWERS);
  }

  getFlower(id: number): Observable<Flower> {
    return Observable.of(FLOWERS.filter((flower) => (flower.id === id))[0]);
  }

}
