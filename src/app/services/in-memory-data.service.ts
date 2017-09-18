import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FLOWERS } from '../shared/flowers';
import { ARTICLES } from '../shared/articles';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const flowers = FLOWERS;
    const articles = ARTICLES;
    return { flowers, articles };
  }

}
