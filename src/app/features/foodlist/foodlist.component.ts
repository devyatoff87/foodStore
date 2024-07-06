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


  checkImg(url: string): Promise<string> {
    return new Promise(resolve => {
      this.imageService.checkImage(url).subscribe(isValid => {
        if (!isValid) {
          resolve('../../../../assets/default-food-image.jpg'); // default image path
        } else {
          resolve(url);
        }
      });
    });
  }

  ngOnInit(): void {
    this.foodService.getAll().subscribe((foodItems) => {
      (async () => {
        for (const item of foodItems) {
          item.imageUrl = await this.checkImg(item.imageUrl);
        }
        this.foodList.set(foodItems)
      })()
    });
  }
}
