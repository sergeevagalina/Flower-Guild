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
  contactinfo = new Array;


  constructor(private productservice: ProductService,
    private route: ActivatedRoute,
    private userservice: UserService) { }

  ngOnInit() {
    this.route.params.switchMap(params => this.productservice.getProduct(+params['id']))
      .subscribe(product => {
        this.product = product;
        this.getDealDetails();
        this.userservice.getUserById(this.product.userId)
          .subscribe(user => {
            user.email = user.email.replace(/%40/g, '@');
            if (user.telnum !== '') {
              user.telnum = '+7' + user.telnum;
              this.contactinfo.push(user.telnum);
            }
            this.contactinfo.push(user.email);
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
}
