import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { Food } from '../../../models/Food.model';
import { CurrencyPipe } from '@angular/common';
import { RatingStarsComponent } from "../rating-stars/rating-stars.component";

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe, RatingStarsComponent],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss',
})
export class FoodDetailsComponent {
  activeRoute = inject(ActivatedRoute);
  service = inject(FoodService);
  food = signal<Food | null>(null);
  amount = signal<number>(0)

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

  amountHanlder($event: Event) {
    const target = $event.target as HTMLButtonElement;
    const handlerType = target.dataset['handlerType'];
    const max = 10;

    if (handlerType == 'increase' && this.amount() == max) {
      alert('Please contact us for a large order personally');
      return;
    }
    if (handlerType == 'decrease' && this.amount() > 0) {
      this.amount.set(this.amount() - 1);
    }
    if (handlerType == 'increase' && this.amount() <= max) {
      this.amount.set(this.amount() + 1);
    }
  }
}
