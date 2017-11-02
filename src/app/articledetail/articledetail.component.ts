import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Article } from '../shared/article';
import { ArticleService } from '../services/article.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.scss']
})
export class ArticledetailComponent implements OnInit {

  article: Article;
  errMess: string;

  constructor(private articleservice: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.switchMap(params => this.articleservice.getArticle(+params['id']))
      .subscribe(article => this.article = article,
        err => this.errMess = err.status + ' ' + err.statusText);
  }

}
