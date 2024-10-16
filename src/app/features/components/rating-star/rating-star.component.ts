import {
  ChangeDetectorRef,
  Component,
  input,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-rating-star',
  standalone: true,
  imports: [],
  templateUrl: './rating-star.component.html',
  styleUrl: './rating-star.component.scss',
})
export class RatingStarComponent {
  fillPercentsOne = input.required<number>();
  fillPercentsTwo = input.required<number>();
  fillColor = input.required<string>();
  width = input.required<number>();
  height = input.required<number>();

  constructor(private cdr: ChangeDetectorRef) {}
}
