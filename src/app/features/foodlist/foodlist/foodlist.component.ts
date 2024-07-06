import { Food } from './../../../models/Food.model';
import { Component, inject, signal } from '@angular/core';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-foodlist',
  standalone: true,
  imports: [],
  templateUrl: './foodlist.component.html',
  styleUrl: './foodlist.component.scss'
})
export class FoodlistComponent {
  service = inject(FoodService);
  foodList = signal<Food[]>([]);

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.foodList.set(data)
    });
  }
}
