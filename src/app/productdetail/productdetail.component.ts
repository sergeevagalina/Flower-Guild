import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  product: Product;
  dealdetails: string;
  prev: number;
  next: number;
  productIds: number[];
  user: User;
  telnum: string;

  constructor(private productservice: ProductService,
    private route: ActivatedRoute,
    private userservice: UserService) { }

  ngOnInit() {
    this.productservice.getProductIds()
      .subscribe(productIds => this.productIds = productIds);
    this.route.params.switchMap(params => this.productservice.getProduct(+params['id']))
      .subscribe(product => {
        this.product = product;
        this.preparePrevId(product.id);
        this.prepareNextId(product.id);
        this.getDealDetails();
        this.userservice.getUserById(this.product.userId)
          .subscribe(user => {
            user.email = user.email.replace(/%40/g, '@');
            if (user.telnum) {
              this.telnum = '+7' + user.telnum;
            } else {
              this.telnum = null;
            }
            this.user = user;
          });
      });
  }

  getDealDetails() {
    switch (this.product.dealtype) {
      case 'Продажа':
        this.dealdetails = this.product.price + ' руб.';
        break;
      case 'Обмен':
        this.dealdetails = this.product.exchange;
        break;
      default:
        this.dealdetails = this.product.exchange + ' ( или ' + this.product.price + ' руб. )';
    }
  }

  preparePrevId(productId: number) {
    const ci = this.productIds.indexOf(productId);
    this.prev = ci === 0 ? this.productIds[this.productIds.length - 1] : this.productIds[ci - 1];
  }

  prepareNextId(productId: number) {
    const ci = this.productIds.indexOf(productId);
    this.next = ci === this.productIds.length - 1 ? this.productIds[0] : this.productIds[ci + 1];
  }
}
