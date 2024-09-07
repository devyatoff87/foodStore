import { Component, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Food } from '../../../models/Food.model';

@Component({
  selector: 'app-fooditem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fooditem.component.html',
  styleUrl: './fooditem.component.scss',
})
export class FooditemComponent {
  constructor(private router: Router) {}

  dummy = {
    id: 1,
    name: 'Margherita Pizza',
    price: 8,
    cookTime: '30-40',
    favorite: true,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: './assets/imgs/food-01.png',
    tags: ['FastFood', 'Dinner'],
  };

  foodItem = input<Food | null>(null);
  routerLink = RouterLink;
}
