import { Component, OnInit, Input } from '@angular/core';

import { Flower } from '../shared/flower';
import { FlowerService } from '../services/flower.service';
import { Article } from '../shared/article';
import { ArticleService } from '../services/article.service';
import { Advice } from '../shared/advice';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-flowerdetail',
  templateUrl: './flowerdetail.component.html',
  styleUrls: ['./flowerdetail.component.scss']
})

export class FlowerdetailComponent implements OnInit {

  flower: Flower;
  articles: Article[];
  adviceForm: FormGroup;
  advice: Advice;
  flowercopy = null;
  advicescopy = null;
  prev: number;
  next: number;
  flowerIds: number[];
  flowerErrMess: string;
  articleErrMess: string;

  formErrors = {
    author: '',
    advice: ''
  };

  validationMessages = {
    'author': {
      'required': 'Обязательно для заполнения',
      'minlength': 'Минимум 2 символа'
    },
    'advice': {
      'required': 'Обязательно для заполнения'
    }
  };

  constructor(private flowerservice: FlowerService,
    private articleservice: ArticleService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.flowerservice.getFlowerIds()
    .subscribe(flowerIds => this.flowerIds = flowerIds);
    this.route.params.switchMap(params => this.flowerservice.getFlower(+params['id']))
      .subscribe(flower => {
        this.flower = flower;
        this.flowercopy = flower;
        this.preparePrevId(flower.id);
        this.prepareNextId(flower.id);
      }, err => this.flowerErrMess = err.status + ' ' + err.statusText);

    this.route.params.switchMap(params => this.articleservice.getRelevantArticles(+params['id']))
      .subscribe(articles => this.articles = articles,
        err => this.articleErrMess = err.status + ' ' + err.statusText);
  }

  createForm() {
    this.adviceForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      advice: ['', Validators.required]
    });

    this.adviceForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    this.advicescopy = this.flower.advices.map(advice => Object.assign(new Object, advice));
    const newAdvice = new Advice;
    newAdvice.advice = this.adviceForm.get('advice').value;
    newAdvice.author = this.adviceForm.get('author').value;
    const d = new Date;
    newAdvice.date = d.toISOString();
    this.flowercopy.advices.push(newAdvice);
    console.log(this.flowercopy);
    this.flowercopy.save()
      .switchMap(flower => this.flowerservice.getFlower(this.flower.id))
      .subscribe(flower => {
        this.flower = flower;
        this.flowercopy = flower;
        this.adviceForm.reset({
          author: '',
          advice: ''
        });
      }, errmess => {
        this.flower.advices = this.advicescopy;
      });
  }

  preparePrevId(flowerId: number) {
    const ci = this.flowerIds.indexOf(flowerId);
    this.prev = ci === 0 ? this.flowerIds[this.flowerIds.length - 1] : this.flowerIds[ci - 1];
  }

  prepareNextId(flowerId: number) {
    const ci = this.flowerIds.indexOf(flowerId);
    this.next = ci === this.flowerIds.length - 1 ? this.flowerIds[0] : this.flowerIds[ci + 1];
  }

  // tslint:disable:forin
  onValueChanged(data?: any) {
    if (!this.adviceForm) { return; }
    const form = this.adviceForm;
    // tslint:disable:forin
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}
