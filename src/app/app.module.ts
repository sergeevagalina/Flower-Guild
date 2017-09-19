import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { baseURL } from './shared/baseurl';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import 'hammerjs';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FlowerdetailComponent } from './flowerdetail/flowerdetail.component';
import { ArticlesComponent } from './articles/articles.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';

import { FlowerService } from './services/flower.service';
import { ArticleService } from './services/article.service';
import { FairComponent } from './fair/fair.component';



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
    FairComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000}),
    AppRoutingModule
  ],
  providers: [
    FlowerService,
    ArticleService,
    {provide: 'BaseURL', useValue: baseURL},
    ProcessHTTPMsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
