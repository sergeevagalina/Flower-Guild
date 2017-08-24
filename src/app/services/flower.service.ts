import { Injectable } from '@angular/core';
import { Flower } from '../shared/flower';
import { FLOWERS } from '../shared/flowers';

@Injectable()
export class FlowerService {

  constructor() { }

  getFlowers(): Flower[] {
    return FLOWERS;
  }

  getFlower(id: number): Promise<Flower> {
    return Promise.resolve(FLOWERS.filter((flower) => (flower.id === id))[0]);
  }

}
