import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FlowerdetailComponent } from './flowerdetail/flowerdetail.component';
import { ArticlesComponent } from './articles/articles.component';
import { MainComponent } from './main/main.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FlowerService } from './services/flower.service';
import { ArticleService } from './services/article.service';
import { ArticledetailComponent } from './articledetail/articledetail.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FlowerdetailComponent,
    ArticlesComponent,
    MainComponent,
    DiscussionsComponent,
    HeaderComponent,
    FooterComponent,
    ArticledetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [
    FlowerService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
