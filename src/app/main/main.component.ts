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
  errMess: string;

  constructor(private articleservice: ArticleService) { }

  ngOnInit() {
    this.articleservice.getArticles().subscribe(
      articles => this.articles = articles.sort(
        (a: Article, b: Article) => {
          const d1 = new Date(a.date);
          const d2 = new Date(b.date);
          return d2.getTime() - d1.getTime();
        }
      ).slice(0, 2),
      err => this.errMess = err.status + ' ' + err.statusText
    );
  }

}
