import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodService } from './features/services/food.service';
import { FoodlistComponent } from "./features/components/foodlist/foodlist.component";
import { MainLayoutComponent } from "./core/components/mainlayout/mainlayout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, MainLayoutComponent]
})
export class AppComponent {

}
