import { Injectable } from '@angular/core';
import { Flower } from '../shared/flower';
import { FLOWERS } from '../shared/flowers';

@Injectable()
export class FlowerService {

  constructor() { }

  getFlowers(): Flower[] {
    return FLOWERS;
  }

  getFlower(id: number): Flower {
    return FLOWERS.filter((flower) => (flower.id === id))[0];
  }

}
