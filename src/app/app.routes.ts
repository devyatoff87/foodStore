import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/components/food.routes'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];
