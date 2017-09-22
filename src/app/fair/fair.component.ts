import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-fair',
  templateUrl: './fair.component.html',
  styleUrls: ['./fair.component.scss']
})
export class FairComponent implements OnInit {

  products: Product[];

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productservice.getProducts()
      .subscribe(products => this.products = products);
  }

}
