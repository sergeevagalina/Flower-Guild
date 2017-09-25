import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { FlowerdetailComponent } from '../flowerdetail/flowerdetail.component';
import { MainComponent } from '../main/main.component';
import { ArticlesComponent } from '../articles/articles.component';
import { ArticledetailComponent } from '../articledetail/articledetail.component';
import { FairComponent } from '../fair/fair.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';

export const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'flowerdetail/:id', component: FlowerdetailComponent},
    {path: 'articles', component: ArticlesComponent},
    {path: 'articledetail/:id', component: ArticledetailComponent},
    {path: 'fair', component: FairComponent},
    {path: 'productdetail/:id', component: ProductdetailComponent }
];

