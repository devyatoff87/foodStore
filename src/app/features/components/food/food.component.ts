import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../../core/components/sidebar/sidebar.component";

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './food.component.html'

})
export class FoodComponent { }
