import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Article } from '../shared/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.scss']
})
export class ArticledetailComponent implements OnInit {

  article: Article;

  constructor(private articleservice: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.articleservice.getArticle(id).then(article => this.article = article);
  }

}
