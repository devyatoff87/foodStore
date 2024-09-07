import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet > </router-outlet>'

})
export class FoodComponent { }
