import { Component, OnInit, Input } from '@angular/core';
import { Flower } from '../shared/flower';
import { Article } from '../shared/article';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlowerService } from '../services/flower.service';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-flowerdetail',
  templateUrl: './flowerdetail.component.html',
  styleUrls: ['./flowerdetail.component.scss']
})
export class FlowerdetailComponent implements OnInit {

  flower: Flower;
  articles: Article[];

  constructor(private flowerservice: FlowerService,
    private articleservice: ArticleService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.switchMap(params => this.flowerservice.getFlower(+params['id']))
    .subscribe(flower => this.flower = flower);

    this.route.params.switchMap(params => this.articleservice.getRelevantArticles(+params['id']) )
    .subscribe(articles => this.articles = articles );
  }

}
