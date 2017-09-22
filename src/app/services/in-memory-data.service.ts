import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import {  ResponseOptions } from '@angular/http';
import { FLOWERS } from '../shared/flowers';
import { ARTICLES } from '../shared/articles';
import { PRODUCTS } from '../shared/products';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const flowers = FLOWERS;
    const articles = ARTICLES;
    const products = PRODUCTS;
    return { flowers, articles, products };
  }

  protected responseInterceptor(res: ResponseOptions, ri: RequestInfo): ResponseOptions {
    res.body = res.body['data'];
    return res;
}

}
