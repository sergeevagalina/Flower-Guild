import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { baseURL } from '../shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private restangular: Restangular) { }

  getProducts(): Observable<Product[]> {
    return this.restangular.all('products').getList();
  }

  getProduct(id: number): Observable<Product> {
    return this.restangular.one('products', id).get();
  }

  submitProduct(product: Product): Observable<Product> {
    return this.restangular.all('products').post(product);
  }

}
