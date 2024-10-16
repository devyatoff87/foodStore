import { AfterViewInit, Component, input, OnInit, signal } from '@angular/core';
import { RatingStarComponent } from '../rating-star/rating-star.component';

@Component({
  selector: 'app-rating-stars',
  standalone: true,
  imports: [RatingStarComponent],
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.scss',
})
export class RatingStarsComponent implements OnInit {
  rating = input<number | undefined>(3);
  fullStars = signal<number>(0);
  fillPercentsOne = signal<number>(0); //30% für Füllen des letzte "nicht vollen" Stars
  fillPercentsTwo = signal<number>(0); //70% identisch
  emptyCounterArray = signal<number[]>([]);

  ngOnInit(): void {
    this.fullStars.set(Math.floor(this.rating()!));

    this.fillPercentsOne.set(+(this.rating()! % 1).toFixed(1) * 100);

    this.emptyCounterArray.set(new Array(this.fullStars()));

    if (this.fillPercentsOne() !== 0) {
      this.fillPercentsTwo.set(100 - this.fillPercentsOne());
    }

    console.log(this.fullStars());
  }
}
