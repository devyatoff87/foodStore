import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/components/mainlayout/mainlayout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/components/food.routes'),
      },
    ],
  },
];
