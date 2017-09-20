import { Injectable } from '@angular/core';
import { Article } from '../shared/article';
import { baseURL } from '../shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleService {

  constructor(private restangular: Restangular) { }

  getArticles(): Observable<Article[]> {
    return this.restangular.all('articles').getList();
  }

  getArticle(id: number): Observable<Article> {
    return this.restangular.one('articles', id).get();
  }

  getRelevantArticles(flowerId: number): Observable<Article[]> {
    return this.restangular.all('articles').getList({flowerId: flowerId});
  }
}
