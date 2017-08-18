import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { FlowerdetailComponent } from '../flowerdetail/flowerdetail.component';
import { MainComponent } from '../main/main.component';
import { ArticlesComponent } from '../articles/articles.component';
import { DiscussionsComponent } from '../discussions/discussions.component';

export const routes: Routes = [
    {path: 'menu', component: MenuComponent},
    {path: 'flowerdetail/:id', component: FlowerdetailComponent},
    {path: 'main', component: MainComponent},
    {path: 'articles', component: ArticlesComponent},
    {path: 'discussions', component: DiscussionsComponent}
];

