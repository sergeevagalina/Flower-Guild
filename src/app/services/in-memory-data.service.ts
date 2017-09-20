import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import {  ResponseOptions } from '@angular/http';
import { FLOWERS } from '../shared/flowers';
import { ARTICLES } from '../shared/articles';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const flowers = FLOWERS;
    const articles = ARTICLES;
    return { flowers, articles };
  }

  protected responseInterceptor(res: ResponseOptions, ri: RequestInfo): ResponseOptions {
    res.body = res.body['data'];
    return res;
}

}
