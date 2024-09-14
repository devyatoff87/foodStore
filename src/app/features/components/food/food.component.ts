import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../../core/components/sidebar/sidebar.component";
import { FoodlistComponent } from "../foodlist/foodlist.component";

@Component({
  selector: 'app-food',
  standalone: true,
  styleUrl: './food.component.scss',
  imports: [RouterOutlet, SidebarComponent, FoodlistComponent],
  templateUrl: './food.component.html'

})
export class FoodComponent { }
