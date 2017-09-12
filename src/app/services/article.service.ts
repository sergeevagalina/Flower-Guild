import { Injectable } from '@angular/core';
import { Article } from '../shared/article';
import { ARTICLES } from '../shared/articles';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles(): Article[] {
    return ARTICLES;
  }

  getArticle(id: number): Promise<Article> {
    return Promise.resolve(ARTICLES.filter((article) => (article.id === id))[0]);
  }
}
