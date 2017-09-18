import { Injectable } from '@angular/core';
import { Article } from '../shared/article';
import { Http } from '@angular/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleService {

  constructor(private http: Http,
   private processHTTPMsgService: ProcessHTTPMsgService) { }

  getArticles(): Observable<Article[]> {
      return this.http.get(baseURL + 'articles')
        .map(res => this.processHTTPMsgService.extractData(res));
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get(baseURL + 'articles/' + id)
      .map(res => this.processHTTPMsgService.extractData(res));
  }

  getRelevantArticles(flowerId: number): Observable<Article[]> {
    return this.http.get(baseURL + 'articles/' + flowerId)
      .map(res => this.processHTTPMsgService.extractData(res));
  }

  getLastArticles(): Observable<Article[]> {
    return this.http.get(baseURL + 'articles')
      .map(res => this.processHTTPMsgService.extractData(res));
  }

}
