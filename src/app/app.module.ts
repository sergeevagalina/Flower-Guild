import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { baseURL } from './shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';
import 'hammerjs';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { FlowerdetailComponent } from './flowerdetail/flowerdetail.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import { FairComponent } from './fair/fair.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { FlowerService } from './services/flower.service';
import { ArticleService } from './services/article.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { AdComponent } from './ad/ad.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FlowerdetailComponent,
    ArticlesComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ArticledetailComponent,
    FairComponent,
    ProductdetailComponent,
    LoginComponent,
    SignupComponent,
    AdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000}),
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FlowerService,
    ArticleService,
    ProductService,
    UserService,
    {provide: 'BaseURL', useValue: baseURL},
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    SignupComponent
  ]
})
export class AppModule { }
