import { Component, input } from '@angular/core';

@Component({
  selector: 'app-fooditem',
  standalone: true,
  imports: [],
  templateUrl: './fooditem.component.html',
  styleUrl: './fooditem.component.scss'
})
export class FooditemComponent {
  id = input<Number>();
  name = input<String>('');
  price = input<Number>();
  cookTime = input<String>('');
  favorite = input<String>('');
  origins = input<string[]>([]);
  stars = input<Number>();
  imageUrl = input<String>('');
  tags? = input<String>('');
  even = input<boolean>()
}
