import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/components/mainlayout/mainlayout.component';
import { FoodlistComponent } from './features/components/foodlist/foodlist.component';

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/components/food.routes')
      }
    ]
  }
];
