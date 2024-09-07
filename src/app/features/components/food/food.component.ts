import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent {}
