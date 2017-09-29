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
  user: User;
  contactinfo: string;
  dealdetails: string;

  constructor(private productservice: ProductService,
    private route: ActivatedRoute,
    private userservice: UserService) { }

  ngOnInit() {
    this.route.params.switchMap(params => this.productservice.getProduct(+params['id']))
      .subscribe(product => {
        this.product = product;
        this.getDealDetails();
        this.userservice.getUser(this.product.userId)
          .subscribe(user => {
            this.user = user;
            this.getContactInfo();
          });
      });
  }

  getContactInfo() {
    return this.product.contacttype === 'Email' ? this.contactinfo = this.user.email : this.contactinfo = '+7' + this.user.telnum;
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
}
