import { Routes } from '@angular/router';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

export default [
  {
    path: '',
    children: [
      {
        path: '',
        component: FoodlistComponent,
      },
      {
        path: 'food-details/:id',
        component: FoodDetailsComponent,
      },
    ],
  },
] as Routes;
