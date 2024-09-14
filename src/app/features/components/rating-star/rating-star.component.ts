import { ChangeDetectorRef, Component, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  standalone: true,
  imports: [],
  templateUrl: './rating-star.component.html',
  styleUrl: './rating-star.component.scss'
})
export class RatingStarComponent {
  fillPercentsOne = input.required<number>();
  fillPercentsTwo = input.required<number>();
  fillColor = input.required<string>();
  width = input.required<number>();
  height = input.required<number>();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['fillPercentsOne'].currentValue !== 100) {
      setTimeout(() => this.cdr.detectChanges(), 0)
    }
  }
}