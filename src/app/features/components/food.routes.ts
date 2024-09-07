import { Routes } from '@angular/router';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

export default [
  {
    path: '',
    component: FoodlistComponent,
  },
  {
    path: 'food/:id',
    component: FoodDetailsComponent,
  }

] as Routes;
