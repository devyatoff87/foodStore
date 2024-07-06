import { Food } from '../../models/Food.model';
import { Component, inject, signal } from '@angular/core';
import { FoodService } from '../services/food.service';
import { FooditemComponent } from "../fooditem/fooditem.component";
import { ImageCheckService } from '../../shared/services/image-check.service';

@Component({
  selector: 'app-foodlist',
  standalone: true,
  templateUrl: './foodlist.component.html',
  styleUrl: './foodlist.component.scss',
  imports: [FooditemComponent]
})
export class FoodlistComponent {
  foodService = inject(FoodService);
  foodList = signal<Food[]>([]);
  imageService = inject(ImageCheckService)



  ngOnInit(): void {
    this.foodService.getAll().subscribe({
      next: (foodItems) => {
        this.foodList.set(foodItems)
      },
      error: (error) => {
        console.log(error);

      }
    });
  }
}
