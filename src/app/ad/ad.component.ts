import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, DealType, Images, DeliveryType } from '../shared/product';
import { ProductService } from '../services/product.service';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnDestroy {

  subscription: Subscription;
  adForm: FormGroup;
  dealType = DealType;
  images = Images;
  deliveryType = DeliveryType;
  product: Product;
  userId: number;

  formErrors = {
    name: '',
    price: '',
    exchange: ''
  };

  validationMessages = {
    'name': {
      'required': 'Обязательно для заполнения'
    },
    'price': {
      'required': 'Обязательно для заполнения',
      'pattern': 'Только цифры'
    },
    'exchange': {
      'required': 'Обязательно для заполнения'
    }
  };

  constructor(private fb: FormBuilder,
    private userservice: UserService,
    private productservice: ProductService) {
    this.subscription = this.userservice.getCurrentUser()
      .subscribe(user => {
        console.log('from login');
        console.log(user);
        this.userId = user.id;
      });
    this.createForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createForm() {
    this.adForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      dealtype: '',
      price: ['', Validators.pattern],
      exchange: '',
      image: '/assets/images/plant.svg',
      deliverytype: 'самовывоз',
    });

    this.adForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    this.product = this.adForm.value;
    this.product.userId = this.userId;
    console.log(this.product);
    this.productservice.submitProduct(this.product)
      .subscribe(product => {
        console.log(product);
    });
  }

    // tslint:disable:forin
    onValueChanged(data?: any) {
      if (!this.adForm) { return; }
      const form = this.adForm;
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
