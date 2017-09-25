import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  product: Product;

  constructor(private productservice: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.switchMap(params => this.productservice.getProduct(+params['id']))
    .subscribe(product => this.product = product);
  }

}
