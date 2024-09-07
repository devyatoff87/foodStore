import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { Food } from '../../../models/Food.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss',
})
export class FoodDetailsComponent {
  activeRoute = inject(ActivatedRoute);
  service = inject(FoodService);
  food = signal<Food | null>(null);

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((a) => {
      const id = +a.get('id')!;
      this.service.getAll().subscribe((data) => {
        data.find((food) => {
          if (food.id == id) {
            this.food.set(food);
          }
        });
      });
    });
  }
}
