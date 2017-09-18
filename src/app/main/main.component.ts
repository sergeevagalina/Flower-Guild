import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  articles: Article[];

  constructor(private articleservice: ArticleService) { }

  ngOnInit() {
    this.articleservice.getLastArticles().
      subscribe(articles => this.articles = articles);
  }

}
