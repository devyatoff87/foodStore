import { Component, inject } from '@angular/core';
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

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      console.log(data);
    });
  }
}
