import { Injectable } from '@angular/core';
import { Article } from '../shared/article';
import { ARTICLES } from '../shared/articles';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return Observable.of(ARTICLES);
  }

  getArticle(id: number): Observable<Article> {
    return Observable.of(ARTICLES.filter((article) => (article.id === id))[0]);
  }

  getRelevantArticles(name: string): Observable<Article[]> {
    return Observable.of(ARTICLES.filter((article) => article.name === name));
  }

  getLastArticles(): Observable<Article[]> {
    return Observable.of(ARTICLES.filter((article) => (article.id > ARTICLES.length - 3)));
  }
}
