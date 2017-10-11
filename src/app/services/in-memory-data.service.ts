import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ResponseOptions } from '@angular/http';
import { FLOWERS } from '../shared/flowers';
import { ARTICLES } from '../shared/articles';
import { PRODUCTS } from '../shared/products';
import { USERS } from '../shared/users';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const flowers = FLOWERS;
    const articles = ARTICLES;
    const products = PRODUCTS;
    const users = USERS;
    return { flowers, articles, products, users };
  }
}
